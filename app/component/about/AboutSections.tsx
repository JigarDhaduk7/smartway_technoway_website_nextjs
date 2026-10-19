'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { BookOpen, Compass, Heart } from 'lucide-react';

import endToEndImage from '@/public/assets/images/end-to-end-solutions-section.png';
import ourVisionImage from '@/public/assets/images/our-vision-image.png';
import ourMissionImage from '@/public/assets/images/our-mission-image.png';
import ourValuesImage from '@/public/assets/images/our-values-image.png';

import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import ParallaxImage from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';

const bullet = 'relative pl-6 before:absolute before:left-1 before:top-[0.6em] before:size-2 before:rotate-45 before:rounded-[2px] before:bg-gradient-to-br before:from-brand-bright before:to-cyan';

/* ---------------- Intro with animated skill bars ---------------- */
const skills = [
  { label: 'IT Solution', value: 98 },
  { label: 'Cyber Security', value: 99 },
  { label: 'Cloud Solution', value: 100 },
];

function SkillBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="font-mono text-cyan">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full rounded-full bg-gradient-to-r from-brand via-brand-bright to-cyan"
        >
          <span className="absolute top-1/2 right-0 size-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_#2dd4ff]" />
        </motion.div>
      </div>
    </div>
  );
}

export function AboutIntro() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <ParallaxImage src={endToEndImage} alt="End to end IT solutions" className="aspect-[4/5] rounded-[32px] border border-line" />
        <div>
          <Reveal blur={false} distance={16}>
            <span className="eyebrow mb-5"><span className="h-px w-8 bg-cyan" />Our Purpose</span>
          </Reveal>
          <SplitText
            text="Empowering the Future Through Innovation and Intelligence"
            className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted md:text-lg">
              From Thought to Impact — our journey is built on transforming vision into reality through technology that makes businesses smarter, faster, and more sustainable.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="glass mt-10 space-y-6 rounded-3xl p-6 md:p-8">
            {skills.map((s, i) => <SkillBar key={s.label} {...s} delay={i * 0.15} />)}
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <Button href="/projects" arrow>Explore Our Work</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Story / Vision & Mission / Values chapters ---------------- */
const chapters = [
  {
    key: 'story',
    icon: BookOpen,
    eyebrow: 'Our Story',
    title: 'Where Innovation Meets Purpose',
    image: ourVisionImage,
    body: (
      <>
        <p>
          Smartway Technoway Pvt. Ltd. was founded with a singular mission — to bridge innovation with real-world impact. Born from the legacy of Smartway Group, India&apos;s trusted leader in healthcare and wellness, Technoway represents the evolution of that philosophy into the digital era. We believe technology is more than code — it&apos;s the catalyst that powers transformation. From startups to enterprises, we craft intelligent IT solutions that empower organizations to perform, evolve, and lead.
        </p>
        <ul className="mt-6 space-y-2">
          <li className={bullet}>Established under the vision of Mr. Khilan Ramani, Founder &amp; MD of Smartway Group</li>
          <li className={bullet}>Headquarters in Ahmedabad, Gujarat, India</li>
          <li className={bullet}>Operates as the technology arm of Smartway Wellness Pvt Ltd</li>
          <li className={bullet}>Focused on AI, automation, cloud, and enterprise-grade software</li>
        </ul>
      </>
    ),
  },
  {
    key: 'vision',
    icon: Compass,
    eyebrow: 'Vision & Mission',
    title: 'To Shape a Smarter Digital World',
    image: ourMissionImage,
    body: (
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-display text-lg font-semibold text-fg">Vision</h4>
          <p>To be the catalyst that transforms businesses through intelligent, human-centric technology — creating an ecosystem of innovation, efficiency, and trust.</p>
        </div>
        <div>
          <h4 className="mb-2 font-display text-lg font-semibold text-fg">Mission</h4>
          <p>To deliver next-generation IT solutions that simplify complexities, drive growth, and enhance productivity for every client we serve.</p>
        </div>
        <p>We achieve this through deep technical expertise, design thinking, and a culture of continuous innovation.</p>
      </div>
    ),
  },
  {
    key: 'values',
    icon: Heart,
    eyebrow: 'Our Values',
    title: 'The Core Values That Drive Us',
    image: ourValuesImage,
    body: (
      <>
        <p>At the heart of Smartway Technoway lies a belief that great technology begins with great purpose. Our principles define how we think, build, and grow with every partner.</p>
        <ul className="mt-6 space-y-2">
          <li className={bullet}><b className="text-fg">Innovation</b> — We constantly evolve, explore, and adopt emerging technologies to stay ahead of the curve.</li>
          <li className={bullet}><b className="text-fg">Integrity</b> — Every interaction is rooted in honesty, transparency, and ethical excellence.</li>
          <li className={bullet}><b className="text-fg">Impact</b> — Our success is measured by the real value we deliver to our clients and communities.</li>
          <li className={bullet}><b className="text-fg">Collaboration</b> — We work as an extension of your team, co-creating solutions that drive long-term success.</li>
          <li className={bullet}><b className="text-fg">Excellence</b> — Quality isn&apos;t an option — it&apos;s our standard in every line of code, design, and decision.</li>
        </ul>
      </>
    ),
  },
];

function Chapter({ chapter, index, onActive }: { chapter: (typeof chapters)[number]; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  React.useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  const Icon = chapter.icon;

  return (
    <div ref={ref} className="flex min-h-[70vh] flex-col justify-center py-12 lg:py-0">
      {/* Mobile shows each image inline; desktop uses the sticky frame */}
      <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-3xl border border-line lg:hidden">
        <Image src={chapter.image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -20% 0px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright">
          <Icon className="size-6 text-white" />
        </span>
        <span className="eyebrow mb-4">{String(index + 1).padStart(2, '0')} — {chapter.eyebrow}</span>
        <h3 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold">{chapter.title}</h3>
        <div className="mt-6 text-muted md:text-lg">{chapter.body}</div>
      </motion.div>
    </div>
  );
}

export function AboutChapters() {
  const [active, setActive] = useState(0);
  const onActive = React.useCallback((i: number) => setActive(i), []);

  return (
    <section className="relative py-10 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 h-[calc(100vh-9rem)]">
            <div className="relative h-full overflow-hidden rounded-[36px] border border-line">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={chapters[active].key}
                  initial={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={chapters[active].image} alt={chapters[active].title} fill sizes="50vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex gap-2">
                {chapters.map((c, i) => (
                  <span key={c.key} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-cyan' : 'w-4 bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          {chapters.map((c, i) => (
            <Chapter key={c.key} chapter={c} index={i} onActive={onActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
