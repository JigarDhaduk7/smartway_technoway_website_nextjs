'use client';

import React, { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getData } from '../../../lib/api';
import type { Blog } from '@/lib/types';
import SectionHeading from '../ui/SectionHeading';
import BlogCard from './BlogCard';
import Button from '../ui/Button';

// Home "Latest insights": horizontal snap carousel of published blogs from the admin.
const blogcomponent = ({ title = 'Latest Insights & Updates', items }: { title?: string; items?: Blog[] }) => {
  const [blogs, setBlogs] = useState<Blog[]>(items ?? []);
  const [loading, setLoading] = useState(!items);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items) {
      setBlogs(items);
      return;
    }
    const fetchBlogs = async () => {
      try {
        const response = await getData('blogs');
        const publishedBlogs = response.data.filter((blog: Blog) => blog.isPublished);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [items]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 480), behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Blog"
            title={title}
            description="Expert advice, industry trends, actionable tips, and case studies that can help you grow."
          />
          <div className="flex shrink-0 gap-3">
            <button type="button" aria-label="Previous posts" onClick={() => scroll(-1)} className="grid size-12 place-items-center rounded-full border border-line-strong transition-colors hover:bg-white/10">
              <ArrowLeft className="size-5" />
            </button>
            <button type="button" aria-label="Next posts" onClick={() => scroll(1)} className="grid size-12 place-items-center rounded-full border border-line-strong transition-colors hover:bg-white/10">
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {loading ? (
          [1, 2, 3].map((i) => <div key={i} className="h-[420px] w-[85vw] shrink-0 animate-pulse rounded-3xl bg-white/5 sm:w-[400px]" />)
        ) : blogs.length > 0 ? (
          blogs.map((blog, i) => (
            <div key={blog._id} className="w-[85vw] shrink-0 snap-start sm:w-[400px]">
              <BlogCard blog={blog} index={i} />
            </div>
          ))
        ) : (
          <p className="text-muted">No published blogs available.</p>
        )}
      </div>

      {!items && (
        <div className="container-x mt-10">
          <Button href="/blogs" variant="ghost" arrow>Read all articles</Button>
        </div>
      )}
    </section>
  )
}

export default blogcomponent
