import { Metadata } from 'next';
import { getById, getData } from '../../../lib/api';
import BlogDetailsClient from './BlogDetailsClient';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const response = await getData('blogs');
    return response.data
      .filter((blog: any) => blog.isPublished)
      .map((blog: any) => ({ slug: [blog.slug] }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr[0] : slugArr;

  try {
    const { data: blog } = await getById('blogs', slug);
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
  } catch {
    return {
      title: 'Blog - Smartway Technoway | Tech Insights',
      description: 'Read our latest tech insights and industry trends',
    };
  }
}

const BlogDetailsPage = async ({ params }: PageProps) => {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr[0] : slugArr;

  let blog: Blog | null = null;
  let relatedBlogs: Blog[] = [];
  let recentBlogs: Blog[] = [];

  try {
    const [blogRes, allBlogsRes] = await Promise.all([
      getById('blogs', slug),
      getData('blogs'),
    ]);
    blog = blogRes.data;
    const published = allBlogsRes.data.filter((b: Blog) => b.isPublished && b.slug !== slug);
    relatedBlogs = published.slice(0, 4);
    recentBlogs = published.slice(-5).reverse();
  } catch {
    // blog stays null — client will show not found
  }

  return <BlogDetailsClient blog={blog} relatedBlogs={relatedBlogs} recentBlogs={recentBlogs} />;
};

export default BlogDetailsPage;
