'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceCard as Service } from '@/lib/types';
import TiltCard from '../ui/TiltCard';

export const ServiceIcon = ({ src, size = 'size-14' }: { src: string; size?: string }) => (
  <span className={`relative grid ${size} shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright shadow-[0_10px_30px_-10px_rgba(61,123,255,0.8)]`}>
    {/* Admin-uploaded SVG/PNG icons; plain img keeps SVGs crisp and supports the fallback */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt=""
      className="size-1/2 object-contain brightness-0 invert"
      onError={(e) => {
        e.currentTarget.src = '/assets/images/web-development-icon.svg';
      }}
    />
  </span>
);

// Admin service teaser used on the Services page grid.
export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard className="rounded-3xl">
        <Link
          href={`/services/${service.slug}`}
          className="group flex h-full flex-col rounded-3xl border border-line bg-surface/70 p-8 backdrop-blur transition-colors duration-300 hover:bg-surface-2/80"
        >
          <div className="flex items-start justify-between">
            <ServiceIcon src={service.card.icon} />
            <span className="font-mono text-sm text-subtle">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="mt-8 font-display text-2xl font-semibold text-fg">{service.title}</h3>
          <p className="mt-3 flex-1 text-muted">{service.card.shortDescription}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
            Learn more
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
