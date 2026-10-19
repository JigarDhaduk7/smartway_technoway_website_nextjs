'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { formatDate, stripHtml, type Blog } from '@/lib/types';

// Blog teaser card with image zoom and a sliding arrow on hover.
export default function BlogCard({ blog, index = 0, large = false }: { blog: Blog; index?: number; large?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        data-cursor="Read"
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 transition-colors duration-300 hover:border-brand-bright/50"
      >
        <div className={`relative overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes={large ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 640px) 400px, 85vw'}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          {blog.createdAt && (
            <span className="glass absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-fg">
              <Calendar className="size-3.5 text-cyan" aria-hidden />
              {formatDate(blog.createdAt)}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className={`font-display font-semibold text-fg ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{blog.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm text-muted">{stripHtml(blog.content)}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cyan">
            Read article
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
