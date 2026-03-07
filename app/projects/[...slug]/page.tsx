import { Metadata } from 'next';
import { getById, getData } from '../../../lib/api';
import ProjectDetailsClient from './ProjectDetailsClient';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const response = await getData('projects');
    return response.data
      .filter((project: any) => project.isPublished)
      .map((project: any) => ({
        slug: [project.slug]
      }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  
  try {
    const response = await getById('projects', slug);
    const project = response.data;
    
    const contentPreview = project.content.replace(/<[^>]*>/g, ' ').substring(0, 160);
    
    return {
      title: `${project.title} - Smartway Technoway | Our Work`,
      description: contentPreview,
      openGraph: {
        title: `${project.title} - Smartway Technoway`,
        description: contentPreview,
        type: 'article',
        images: [project.image],
      },
    };
  } catch (error) {
    return {
      title: 'Project - Smartway Technoway | Our Work',
      description: 'Explore our project portfolio',
    };
  }
}

const ProjectDetailsPage: React.FC<PageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;

  return <ProjectDetailsClient slug={slug} />;
};

export default ProjectDetailsPage;
