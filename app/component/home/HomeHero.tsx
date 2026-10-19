'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Cloud, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import SplitText from '../ui/SplitText';
import Marquee from '../ui/Marquee';

const HeroScene = dynamic(() => import('../three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute top-1/2 right-[8%] size-[420px] -translate-y-1/2 rounded-full bg-brand/30 blur-[100px]" />
  ),
});

const capabilities = [
  'AI & Automation', 'Cloud Architecture', 'Enterprise Software', 'Web Platforms', 'Mobile Apps',
  'UI/UX Design', 'Data & Analytics', 'Cyber Security', 'ERP / CRM', 'DevOps',
];

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-60" />
      <div className="pointer-events-none absolute -top-40 -left-40 size-[620px] rounded-full bg-brand/35 blur-[150px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[520px] rounded-full bg-violet/20 blur-[150px]" />

      <div className="absolute inset-0 opacity-50 md:opacity-100" aria-hidden>
        <HeroScene />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 flex flex-1 flex-col justify-center pt-32 pb-16 md:pt-36"
      >
        <div className="max-w-5xl">
          <div
            className="anim-fade-up glass mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-1.5 text-sm"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand to-brand-bright px-2.5 py-0.5 text-xs font-semibold text-white">
              <Sparkles className="size-3" /> Smartway Group
            </span>
            <span className="text-fg/85">From Thought to Impact</span>
          </div>

          <h1 data-hero-text className="font-display text-[clamp(2.5rem,6.2vw,4.6rem)] leading-[0.98] font-semibold tracking-tight">
            <SplitText as="span" immediate delay={0.15} text="Transforming Ideas" className="block" />
            <SplitText as="span" immediate delay={0.3} text="Into Intelligent" className="block" />
            <SplitText as="span" immediate delay={0.45} text="Technology" className="block" wordClassName="text-gradient" />
          </h1>

          <p
            style={{ animationDelay: '0.7s' }}
            data-hero-text
            className="anim-fade-up mt-7 max-w-2xl text-base text-muted md:text-lg"
          >
            At Smartway Technoway, we turn innovation into impact. As the technology arm of the Smartway Group, we create smart, scalable, and secure digital solutions — from AI and automation to cloud architecture and enterprise software.
          </p>

          <div style={{ animationDelay: '0.85s' }} className="anim-fade-up mt-10 flex flex-wrap gap-3">
            <Button href="/about" arrow>Explore Technoway</Button>
            <Button href="/services" variant="ghost">Our Services</Button>
          </div>

          <ul
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
          >
            {[
              { icon: Cpu, text: 'AI-first engineering' },
              { icon: Cloud, text: 'Cloud-native by default' },
              { icon: ShieldCheck, text: 'Secure & scalable' },
            ].map((f, i) => (
              <li
                key={f.text}
                style={{ animationDelay: `${1 + i * 0.1}s` }}
                className="anim-fade-up flex items-center gap-2"
              >
                <f.icon className="size-4 text-cyan" aria-hidden /> {f.text}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 md:block">
      <div style={{ animationDelay: '1.4s' }} className="anim-fade-up flex flex-col items-center gap-2 text-xs tracking-[0.3em] text-subtle uppercase">
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="size-4" />
        </motion.span>
      </div>
      </div>

      <div className="relative z-10 border-y border-line bg-ink/60 py-5 backdrop-blur">
        <Marquee duration={35} pauseOnHover={false}>
          {capabilities.map((c) => (
            <span key={c} className="mx-6 flex items-center gap-6 font-display text-lg whitespace-nowrap text-fg/70 md:text-xl">
              {c}
              <span className="size-1.5 rotate-45 bg-cyan" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
