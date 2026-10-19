'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
}

// Words rise up from a clipped baseline, one after another.
export default function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  as = 'h2',
  immediate = false,
}: SplitTextProps) {
  const words = text.split(' ');
  const wrapCls = 'inline-block overflow-hidden pt-[0.22em] -mt-[0.22em] pb-[0.28em] -mb-[0.28em] align-bottom';
  const wordCls = `inline-block pb-[0.2em] -mb-[0.2em] will-change-transform ${wordClassName ?? ''}`;

  // On-load headings animate with pure CSS so they show without waiting for hydration.
  if (immediate) {
    const Plain = as;
    return (
      <Plain className={className} aria-label={text}>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <span aria-hidden className={wrapCls}>
              <span className={`${wordCls} anim-word-rise`} style={{ animationDelay: `${delay + i * 0.06}s` }}>
                {word}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </Plain>
    );
  }

  const Tag = motion[as];
  const trigger = { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span aria-hidden className={wrapCls}>
            <motion.span
              className={wordCls}
              variants={{
                hidden: { y: '110%', rotate: 4 },
                show: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {/* Breakable space between word boxes so long words wrap cleanly */}
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
}
