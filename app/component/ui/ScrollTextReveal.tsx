'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  /** Words to highlight with the brand gradient once revealed. */
  highlight?: string[];
}

// Large statement whose words light up as the user scrolls through it.
export default function ScrollTextReveal({ text, className, highlight = [] }: ScrollTextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');
  const marks = highlight.map((w) => w.toLowerCase());

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isMark = marks.includes(word.toLowerCase().replace(/[^a-z0-9-]/g, ''));
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} highlight={isMark}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <span aria-hidden className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity, y }} className={`inline-block ${highlight ? 'text-gradient-brand -mb-[0.2em]' : ''}`}>
        {children}
      </motion.span>
    </span>
  );
}
