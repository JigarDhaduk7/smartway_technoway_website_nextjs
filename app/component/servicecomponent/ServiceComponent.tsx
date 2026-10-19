'use client';

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { getData } from '../../../lib/api';
import type { ServiceCard as Service } from '@/lib/types';
import { ServiceIcon } from './ServiceCard';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

// Home: admin services in a pinned, horizontally scrubbed track (desktop) / swipe row (mobile).
const ServiceComponent: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getData('services');
        if (response?.data) {
          setServices(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useLayoutEffect(() => {
    if (loading || !services.length || !section.current || !track.current) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const el = track.current!;
      const distance = () => el.scrollWidth - window.innerWidth + 64;
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
    });
    return () => mm.revert();
  }, [loading, services.length]);

  return (
    <section ref={section} className="relative overflow-hidden py-20 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-radial" />
      <div className="container-x relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5"><span className="h-px w-8 bg-cyan" />Our Services</span>
          <SplitText
            text="Building Smart Solutions for a Digital World"
            className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold"
          />
        </div>
        <div className="max-w-md lg:pb-2">
          <p className="text-muted md:text-lg">
            From concept to execution, Smartway Technoway offers a comprehensive suite of technology services designed to make your business future-ready.
          </p>
          <div className="mt-6">
            <Button href="/services" variant="ghost" arrow>View All Services</Button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="relative mt-12 flex gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 lg:mt-14 lg:overflow-visible lg:pr-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {loading
          ? [1, 2, 3].map((i) => <div key={i} className="h-[380px] w-[85vw] shrink-0 animate-pulse rounded-[28px] bg-white/5 sm:w-[420px]" />)
          : services.map((service, i) => (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                data-cursor="Explore"
                className="group spotlight-card relative flex h-[380px] w-[85vw] shrink-0 flex-col overflow-hidden rounded-[28px] border border-line bg-surface/80 p-8 backdrop-blur transition-colors duration-500 hover:bg-surface-2 sm:w-[420px]"
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}
              >
                <span className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[10rem] leading-none font-bold text-white/[0.04] transition-colors duration-500 group-hover:text-brand-bright/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ServiceIcon src={service.card.icon} />
                <h3 className="mt-auto font-display text-2xl font-semibold md:text-3xl">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-muted">{service.card.shortDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                  Explore service
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
      </div>

      <div className="container-x relative mt-10 hidden lg:block">
        <div className="h-px w-full bg-line">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-gradient-to-r from-brand-bright to-cyan" />
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
