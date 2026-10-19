import { Metadata } from 'next';
import React from 'react';
import { getData } from '../../lib/api';
import type { Blog } from '@/lib/types';

import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import BlogCard from '../component/BlogForHome/BlogCard';
import RecentPosts from '../component/BlogForHome/RecentPosts';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '../../public/assets/images/blog-categorie-banner-image.png';

export const metadata: Metadata = {
  title: 'Smartway Technoway Insights | AI, Automation, and Digital Transformation Blog',
  description: "Stay ahead with Smartway Technoway's latest insights on AI, cloud, and enterprise innovation. Explore expert articles, success stories, and trends shaping the future of technology — From Thought to Impact.",
  keywords: 'Smartway Technoway blog, AI trends, cloud solutions India, automation insights, technology blog, digital transformation articles',
  openGraph: {
    title: "Stay ahead with Smartway Technoway's latest insights on AI, cloud, and enterprise innovation. Explore expert articles, success stories, and trends shaping the future of technology — From Thought to Impact.",
    description: 'Stay updated with latest technology trends and expert insights on web development, cloud solutions, and digital transformation.',
    type: 'website',
  },
};

const Blogs: React.FC = async () => {
  let blogs: Blog[] = [];
  let recentBlogs: Blog[] = [];

  try {
    const response = await getData('blogs');
    blogs = response.data.filter((blog: Blog) => blog.isPublished);
    recentBlogs = blogs.slice(-5).reverse(); // Last 5 blogs, most recent first
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }

  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero
        title="Blogs"
        eyebrow="Insights & Updates"
        description="Expert advice, industry trends, actionable tips, and case studies on AI, cloud, and enterprise innovation."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]}
        image={innerHeroBannerImage}
        imageAlt="Blogs Banner"
      />

      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Trusted by Innovators Who Build the Future"
            description="At Smartway Technoway, we don't just serve clients — we partner with visionaries who believe in technology as a force for growth. Across industries and geographies, our collaborations turn ideas into impact through intelligent innovation."
          />

          <div className="mt-14 grid gap-10 xl:grid-cols-12">
            <div className="xl:col-span-8">
              {blogs.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {featured && (
                    <div className="md:col-span-2">
                      <BlogCard blog={featured} large />
                    </div>
                  )}
                  {rest.map((blog, i) => (
                    <BlogCard key={blog._id} blog={blog} index={i} />
                  ))}
                </div>
              ) : (
                <p className="text-muted">No published blogs available.</p>
              )}
            </div>
            <aside className="xl:col-span-4">
              <div>
                <RecentPosts blogs={recentBlogs} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FormContentSection />
    </>
  );
};

export default Blogs;
