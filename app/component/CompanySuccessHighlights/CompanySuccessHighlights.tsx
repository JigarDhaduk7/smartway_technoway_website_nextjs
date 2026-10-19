'use client';

import React from 'react';
import CountUp from '../ui/CountUp';
import { Stagger, StaggerItem } from '../ui/Reveal';

const stats = [
  { value: 12, suffix: '+', label: 'Successful Projects' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Industries Served' },
];

const CompanySuccessHighlights: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-line bg-surface/60 backdrop-blur lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`relative p-6 text-center md:p-10 ${i % 2 === 0 ? 'border-r border-line' : ''} ${i < 2 ? 'border-b border-line lg:border-b-0' : ''} ${i === 1 ? 'lg:border-r' : ''}`}
            >
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="text-gradient block font-display text-5xl font-semibold tracking-tight md:text-6xl"
              />
              <p className="mt-2 text-sm text-muted md:text-base">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default CompanySuccessHighlights;
