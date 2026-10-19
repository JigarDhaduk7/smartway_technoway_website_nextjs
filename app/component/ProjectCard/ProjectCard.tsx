'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECT_IMAGE, stripHtml, type Project } from '@/lib/types';

// Admin project teaser. The image frame uses the standard project image ratio
// (PROJECT_IMAGE) so correctly sized images are never cropped. Off-size uploads are
// shown in full (contain) over a blurred copy of themselves instead of being cut.
export default function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const sizes = featured ? '(min-width: 1280px) 1216px, 100vw' : '(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor="View"
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-surface/70 transition-colors duration-500 hover:border-brand-bright/50"
      >
        <div
          className="relative overflow-hidden bg-night"
          style={{ aspectRatio: `${PROJECT_IMAGE.width} / ${PROJECT_IMAGE.height}` }}
        >
          {/* Blurred fill, only visible when an upload isn't the standard ratio */}
          <Image src={project.image} alt="" aria-hidden fill sizes="64px" className="scale-110 object-cover opacity-40 blur-2xl" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={sizes}
            className="object-contain transition-[filter] duration-500 group-hover:brightness-110"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/50 to-transparent" />
          <span className="absolute top-4 right-4 grid size-12 scale-75 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight className="size-5" aria-hidden />
          </span>
          <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-xs text-fg">
            Case {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1 p-6 md:p-8">
          <h3 className={`font-display font-semibold text-fg ${featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-muted">{stripHtml(project.content)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
