'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { Gem, Handshake, Lightbulb, ShieldCheck, Target, type LucideIcon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const values: { icon: LucideIcon; title: string; text: string; tint: string }[] = [
  { icon: Lightbulb, title: 'Innovation', text: 'We constantly evolve, explore, and adopt emerging technologies to stay ahead of the curve.', tint: 'from-brand-bright/30' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Every interaction is rooted in honesty, transparency, and ethical excellence.', tint: 'from-cyan/25' },
  { icon: Target, title: 'Impact', text: 'Our success is measured by the real value we deliver to our clients and communities.', tint: 'from-violet/30' },
  { icon: Handshake, title: 'Collaboration', text: 'We work as an extension of your team, co-creating solutions that drive long-term success.', tint: 'from-brand-bright/30' },
  { icon: Gem, title: 'Excellence', text: "Quality isn't an option — it's our standard in every line of code, design, and decision.", tint: 'from-cyan/25' },
];

// Cards pin and stack on top of each other as the user scrolls.
const OurCompanyValuesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Values"
          title="The Core Values That Drive Us"
          description="At the heart of Smartway Technoway lies a belief that great technology begins with great purpose. Our principles define how we think, build, and grow with every partner."
        />
        <div ref={ref} className="relative mt-14">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} total={values.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ValueCard({
  value,
  index,
  total,
  progress,
}: {
  value: (typeof values)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card shrinks slightly once the following cards have stacked over it
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const Icon = value.icon;

  return (
    <div className="sticky flex h-[60vh] min-h-[340px] items-start justify-center md:h-[55vh]" style={{ top: `calc(110px + ${index * 22}px)` }}>
      <motion.div
        style={{ scale }}
        className="relative grid w-full origin-top overflow-hidden rounded-[32px] border border-line bg-surface shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.9)] md:grid-cols-12"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${value.tint} via-transparent to-transparent`} />
        <div className="relative flex flex-col justify-between gap-10 p-8 md:col-span-7 md:p-12">
          <span className="font-mono text-sm text-muted">0{index + 1} / 0{total}</span>
          <div>
            <h3 className="font-display text-4xl font-semibold md:text-6xl">{value.title}</h3>
            <p className="mt-4 max-w-lg text-base text-muted md:text-lg">{value.text}</p>
          </div>
        </div>
        <div className="relative hidden place-items-center md:col-span-5 md:grid">
          <div className="absolute size-56 rounded-full bg-brand-bright/20 blur-[70px]" />
          <div className="relative grid size-40 place-items-center rounded-[36px] border border-line-strong bg-gradient-to-br from-surface-2 to-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <Icon className="size-16 text-cyan" strokeWidth={1.4} aria-hidden />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurCompanyValuesSection;
