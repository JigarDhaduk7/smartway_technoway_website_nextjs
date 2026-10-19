'use client';

import React, { useRef } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  /** How far (in %) the image drifts while the frame scrolls past. */
  strength?: number;
  priority?: boolean;
}

// Image that drifts inside its frame as the page scrolls, with a clip-path reveal on entry.
export default function ParallaxImage({ src, alt, className = '', strength = 12, priority }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: 'inset(12% 12% 12% 12% round 32px)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div style={{ y }} className="absolute -inset-y-[15%] inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
    </motion.div>
  );
}
