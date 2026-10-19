'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Button from './Button';
import SplitText from './SplitText';

interface CtaBandProps {
  title: string;
  description: string;
  cta: { label: string; href?: string; onClick?: () => void; external?: boolean };
}

// Full-bleed gradient call-to-action that scales up as it scrolls into view.
export default function CtaBand({ title, description, cta }: CtaBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [80, 32]);

  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <motion.div
          ref={ref}
          style={{ scale, borderRadius: radius }}
          className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-brand via-[#1d3f8a] to-night px-6 py-16 text-center md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-radial" />
          <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-cyan/30 blur-[100px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-violet/30 blur-[100px] animate-pulse-glow" />
          <div className="relative mx-auto max-w-3xl">
            <SplitText text={title} className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-semibold text-white" />
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">{description}</p>
            <div className="mt-9 flex justify-center">
              <Button variant="light" arrow href={cta.href} onClick={cta.onClick} external={cta.external}>
                {cta.label}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
