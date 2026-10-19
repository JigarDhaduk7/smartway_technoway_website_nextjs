'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import faqImage from '@/public/assets/images/faq-image.png';
import Accordion from '../ui/Accordion';
import SectionHeading from '../ui/SectionHeading';
import ParallaxImage from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';

const bullet = 'relative pl-6 before:absolute before:left-1 before:top-[0.6em] before:size-2 before:rotate-45 before:rounded-[2px] before:bg-gradient-to-br before:from-brand-bright before:to-cyan';

const items = [
  {
    key: 'culture',
    title: 'Where Curiosity Meets Creativity',
    content: (
      <>
        <p className="mb-4">
          Our culture celebrates curiosity, collaboration, and continuous learning. We bring together thinkers, developers, designers, and dreamers who share one purpose — to make technology meaningful. Every member of our team contributes to building products and solutions that not only meet goals but also inspire progress.
        </p>
        <ul className="space-y-2">
          <li className={bullet}>Collaborative, agile, and idea-driven work environment</li>
          <li className={bullet}>Encouragement of innovation and experimentation</li>
          <li className={bullet}>Training and mentorship programs for continuous upskilling</li>
          <li className={bullet}>A shared belief in building “Technology for Good”</li>
        </ul>
      </>
    ),
  },
  {
    key: 'horizons',
    title: 'Expanding Horizons, One Innovation at a Time',
    content: (
      <>
        <p className="mb-4">
          Headquartered in Ahmedabad, with operations extending across India, Smartway Technoway partners with enterprises globally to deliver high-impact IT solutions. From strategic consulting to full-stack development, our footprint continues to expand in healthcare, manufacturing, retail, and technology sectors worldwide.
        </p>
        <Link href="/contactus" className="inline-flex items-center gap-2 font-semibold text-cyan hover:text-white">
          Partner With Us <ArrowRight className="size-4" />
        </Link>
      </>
    ),
  },
  {
    key: 'together',
    title: "Let's Build the Future of Technology — Together",
    content: (
      <>
        <p className="mb-4">
          We&apos;re here to collaborate, innovate, and accelerate your business growth through smart, scalable digital solutions. Join us in creating technology that turns thoughts into lasting impact.
        </p>
        <Link href="/contactus" className="inline-flex items-center gap-2 font-semibold text-cyan hover:text-white">
          Contact Technoway <ArrowRight className="size-4" />
        </Link>
      </>
    ),
  },
];

const FrequentlyAskedQuestion: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow="Culture" title="The Technoway Culture" />
          <Reveal delay={0.1} className="mt-10">
            <Accordion items={items} />
          </Reveal>
        </div>
        <ParallaxImage src={faqImage} alt="The Technoway team at work" className="aspect-[4/5] rounded-[32px] border border-line lg:aspect-[5/6]" />
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
