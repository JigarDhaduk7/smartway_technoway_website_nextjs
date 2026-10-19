'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import SplitText from './SplitText';
import ParallaxImage from './ParallaxImage';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  crumbs: Crumb[];
  image?: string | StaticImageData;
  imageAlt?: string;
}

// Shared hero for inner pages: animated grid, glow orbs, split title and parallax banner.
export default function PageHero({ title, eyebrow, description, crumbs, image, imageAlt = '' }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-cyan/20 blur-[120px]" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="container-x relative">
        <nav aria-label="Breadcrumb" className="anim-fade-up mb-8 flex justify-center">
          <ol className="glass flex flex-wrap items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-fg">
                    {c.label}
                  </Link>
                ) : (
                  <span className="line-clamp-1 max-w-[50vw] text-cyan" aria-current="page">
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="size-3.5 opacity-60" aria-hidden />}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p style={{ animationDelay: '0.15s' }} className="anim-fade-up eyebrow mb-5 flex justify-center text-center">
            {eyebrow}
          </p>
        )}
        <SplitText
          as="h1"
          immediate
          delay={0.1}
          text={title}
          className="mx-auto max-w-5xl text-center font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold text-fg"
        />
        {description && (
          <p
            style={{ animationDelay: '0.45s' }}
            className="anim-fade-up mx-auto mt-6 max-w-2xl text-center text-base text-muted md:text-lg"
          >
            {description}
          </p>
        )}
      </motion.div>

      {image && (
        <div className="container-x relative mt-14 md:mt-20">
          <ParallaxImage src={image} alt={imageAlt} priority className="aspect-[16/9] rounded-[32px] border border-line md:aspect-[21/8]" />
        </div>
      )}
    </section>
  );
}
