import { Metadata } from 'next';
import { getById, getData } from '../../../lib/api';
import BlogDetailsClient from './BlogDetailsClient';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const response = await getData('blogs');
    return response.data
      .filter((blog: any) => blog.isPublished)
      .map((blog: any) => ({
        slug: [blog.slug]
      }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
  
  try {
    const response = await getById('blogs', slug);
    const blog = response.data;
    
    const contentPreview = blog.content.replace(/<[^>]*>/g, ' ').substring(0, 160);
    
    return {
      title: `${blog.title} - Smartway Technoway | Tech Blog`,
      description: contentPreview,
      keywords: `${blog.title.toLowerCase()}, tech blog, IT insights, smartway technoway`,
      openGraph: {
        title: `${blog.title} - Smartway Technoway`,
        description: contentPreview,
        type: 'article',
        images: [blog.image],
      },
    };
  } catch (error) {
    return {
      title: 'Blog - Smartway Technoway | Tech Insights',
      description: 'Read our latest tech insights and industry trends',
    };
  }
}

const BlogDetailsPage: React.FC<PageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;

  return <BlogDetailsClient slug={slug} />;
};

export default BlogDetailsPage;
