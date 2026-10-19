'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

import { formatDate, stripHtml, type Blog } from '@/lib/types';
import PageHero from '../../component/ui/PageHero';
import { Reveal } from '../../component/ui/Reveal';
import Button from '../../component/ui/Button';
import RecentPosts from '../../component/BlogForHome/RecentPosts';
import BlogComponent from '../../component/BlogForHome/blogcomponent';
import FrequentlyAskedQuestion from '../../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';

interface BlogDetailsClientProps {
  blog: Blog | null;
  relatedBlogs: Blog[];
  recentBlogs: Blog[];
}

const BlogDetailsClient: React.FC<BlogDetailsClientProps> = ({ blog, relatedBlogs, recentBlogs }) => {
  const articleRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ['start 30%', 'end 70%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  if (!blog) {
    return (
      <section className="container-x py-48 text-center">
        <h1 className="font-display text-4xl font-semibold">Blog not found</h1>
        <div className="mt-8 flex justify-center"><Button href="/blogs" arrow>Browse all articles</Button></div>
      </section>
    );
  }

  const readMinutes = Math.max(1, Math.round(stripHtml(blog.content).split(' ').length / 200));

  return (
    <>
      <PageHero
        title={blog.title}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs', href: '/blogs' }, { label: blog.title }]}
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <Reveal className="-mt-6 mb-12 flex flex-wrap justify-center gap-3 text-sm text-muted">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"><Calendar className="size-4 text-cyan" />{formatDate(blog.createdAt)}</span>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2"><Clock className="size-4 text-cyan" />{readMinutes} min read</span>
          </Reveal>

          <Reveal scale className="relative mb-16 aspect-[16/9] overflow-hidden rounded-[32px] border border-line md:aspect-[21/9]">
            <Image src={blog.image} alt={blog.title} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          </Reveal>

          <div className="grid gap-12 xl:grid-cols-12">
            <div ref={articleRef} className="relative xl:col-span-8">
              {/* Reading progress rail */}
              <div className="absolute top-0 -left-6 hidden h-full w-px bg-line xl:block">
                <motion.div style={{ scaleY: progress }} className="h-full w-px origin-top bg-gradient-to-b from-brand-bright to-cyan" />
              </div>
              <article className="prose-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <aside className="xl:col-span-4">
              <div>
                <RecentPosts blogs={recentBlogs} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FrequentlyAskedQuestion />

      {relatedBlogs.length > 0 && <BlogComponent title="Related Posts" items={relatedBlogs} />}

      <FormContentSection />
    </>
  );
};

export default BlogDetailsClient;
