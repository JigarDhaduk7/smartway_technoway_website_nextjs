'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Check, Headphones, Layers, TrendingUp, Wifi } from 'lucide-react';

import homeSecondSectionImage from '@/public/assets/images/home-second-sec-image.png';
import heroImage1 from '@/public/assets/images/hero-section-image-1.png';
import heroImage3 from '@/public/assets/images/hero-section-image-3.png';
import bigBrandLogo1 from '@/public/assets/images/big-brands-logo-1.png';
import bigBrandLogo2 from '@/public/assets/images/big-brands-logo-2.png';
import bigBrandLogo3 from '@/public/assets/images/big-brands-logo-3.png';
import bigBrandLogo4 from '@/public/assets/images/big-brands-logo-4.png';
import bigBrandLogo5 from '@/public/assets/images/big-brands-logo-5.png';
import bigBrandLogo6 from '@/public/assets/images/big-brands-logo-6.png';

import type { Project } from '@/lib/types';
import ScrollTextReveal from '../ui/ScrollTextReveal';
import SectionHeading from '../ui/SectionHeading';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import Marquee from '../ui/Marquee';
import { Reveal, Stagger, StaggerItem } from '../ui/Reveal';
import ProjectCard from '../ProjectCard/ProjectCard';

/* ---------------- About / intro ---------------- */
export function HomeAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const yFast = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);
  const ySlow = useTransform(scrollYProgress, [0, 1], ['-20%', '25%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section className="relative py-24 md:py-36">
      <div className="container-x">
        <ScrollTextReveal
          className="max-w-6xl font-display text-[clamp(1.75rem,4.2vw,3.6rem)] leading-[1.15] font-medium tracking-tight"
          text="We blend business intelligence with digital engineering to build technology that simplifies, accelerates, and inspires growth — for organizations of every scale."
          highlight={['intelligence', 'engineering', 'growth']}
        />

        <div ref={ref} className="mt-24 grid items-center gap-16 lg:mt-32 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl">
            <motion.div style={{ y: yMain }} className="relative aspect-square overflow-hidden rounded-[40px] border border-line">
              <Image src={homeSecondSectionImage} alt="Smartway Technoway engineers collaborating" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/50 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>

            <motion.div style={{ y: yFast, rotate }} className="absolute -top-8 -right-4 hidden size-32 overflow-hidden rounded-3xl border border-line-strong shadow-2xl md:block lg:-right-10 lg:size-40">
              <Image src={heroImage1} alt="" fill sizes="160px" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: ySlow }} className="absolute -bottom-10 -left-6 hidden size-28 overflow-hidden rounded-full border-4 border-ink shadow-2xl md:block lg:size-36">
              <Image src={heroImage3} alt="" fill sizes="144px" className="object-cover" />
            </motion.div>

            <Reveal delay={0.3} className="absolute right-4 bottom-6 left-4 md:right-auto md:left-10 md:max-w-sm">
              <div className="glass flex items-center gap-4 rounded-2xl p-4 shadow-2xl">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-bright">
                  <Wifi className="size-5 text-white" />
                </span>
                <div>
                  <p className="font-display font-semibold">About Smartway Technoway</p>
                  <p className="text-sm">Next-Gen Server Solutions for Modern IT Demands.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal blur={false} distance={16}>
              <span className="eyebrow mb-5"><span className="h-px w-8 bg-cyan" />Who We Are</span>
            </Reveal>
            <SplitText
              text="A Smartway Initiative Powering Tomorrow's Technology"
              className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted md:text-lg">
                Smartway Technoway Pvt Ltd is a division of the Smartway Group — India&apos;s leading conglomerate of innovation spanning pharmaceuticals, wellness, exports, and technology. We deliver customized solutions for organizations of every scale. Our mission is simple — to empower industries through tech that simplifies, accelerates, and inspires growth.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'End-to-End IT & Digital Solutions',
                'AI, Automation & Analytics Expertise',
                'Cloud-Native and Secure Architectures',
                '24*7 Dedicated Support',
              ].map((t) => (
                <StaggerItem key={t} className="flex items-start gap-3 rounded-2xl border border-line bg-surface/50 p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-cyan/15">
                    <Check className="size-3.5 text-cyan" />
                  </span>
                  <span className="text-sm font-medium text-fg/90">{t}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/about" arrow>Discover Our Story</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pillars ---------------- */
const pillars = [
  { icon: Award, title: 'Certified Experts', text: 'Experienced team of certified developers & engineers' },
  { icon: Headphones, title: '24/7 Support', text: 'Backed by the trust of the Smartway Group' },
  { icon: Layers, title: 'Scalable Solutions', text: 'Global delivery capability with local support' },
  { icon: TrendingUp, title: 'Scaling Towards Success', text: 'Agile and transparent project management' },
];

export function HomePillars() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Technoway"
          title="Innovation Driven by Integrity and Impact"
          description="What sets us apart is not just technology — it's our approach. We listen, collaborate, and co-create solutions that fit your business goals while adapting to the speed of change. From strategic planning to hands-on execution, our team ensures precision, security, and scalability at every step."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '0px 0px -5% 0px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 900 }}
            >
              <TiltCard className="rounded-3xl">
                <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 p-7 backdrop-blur">
                  <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[7rem] leading-none font-bold text-white/[0.04]">0{i + 1}</span>
                  <span className="grid size-12 place-items-center rounded-2xl border border-line-strong bg-white/5">
                    <p.icon className="size-6 text-cyan" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-auto pt-10 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Brands ---------------- */
const brandLogos = [bigBrandLogo1, bigBrandLogo2, bigBrandLogo3, bigBrandLogo4, bigBrandLogo5, bigBrandLogo6];

export function HomeBrands() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-x mb-10 text-center">
        <SplitText text="Big brands trust us" className="font-display text-2xl font-semibold text-fg/90 md:text-3xl" />
      </div>
      <Marquee duration={30}>
        {brandLogos.map((logo, i) => (
          <div key={i} className="mx-3 grid h-30 w-44 place-items-center rounded-2xl bg-white/95 p-3 transition-transform duration-300 hover:-translate-y-1 md:h-38 md:w-52">
            <Image src={logo} alt={`Client brand ${i + 1}`} className="h-full w-auto object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- Projects (admin data) ---------------- */
export function HomeProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  const [first, ...rest] = projects;

  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/4 right-0 size-[500px] rounded-full bg-brand/20 blur-[150px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Selected Work"
          title="Transforming Challenges into Success Stories"
          description="We provide intelligent IT solutions tailored to meet the unique challenges of every business — from startups to large enterprises."
        />
        {/* Wide banner images: first project full width, the rest two per row */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <ProjectCard project={first} index={0} featured />
          </div>
          {rest.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i + 1} />
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/projects" variant="ghost" arrow>View All Projects</Button>
        </Reveal>
      </div>
    </section>
  );
}
