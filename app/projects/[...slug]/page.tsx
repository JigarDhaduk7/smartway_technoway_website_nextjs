import { Metadata } from 'next';
import { getById, getData } from '../../../lib/api';
import ProjectDetailsClient from './ProjectDetailsClient';

interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const response = await getData('projects');
    return response.data
      .filter((project: any) => project.isPublished)
      .map((project: any) => ({ slug: [project.slug] }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr[0] : slugArr;

  try {
    const { data: project } = await getById('projects', slug);
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
  } catch {
    return {
      title: 'Project - Smartway Technoway | Our Work',
      description: 'Explore our project portfolio',
    };
  }
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr[0] : slugArr;

  let project: Project | null = null;
  let relatedProjects: Project[] = [];

  try {
    const [projectRes, allProjectsRes] = await Promise.all([
      getById('projects', slug),
      getData('projects'),
    ]);
    project = projectRes.data;
    const published = allProjectsRes.data.filter((p: Project) => p.isPublished && p.slug !== slug);
    relatedProjects = published.slice(0, 3);
  } catch {
    // project stays null — client will show not found
  }

  return <ProjectDetailsClient project={project} relatedProjects={relatedProjects} />;
};

export default ProjectDetailsPage;
