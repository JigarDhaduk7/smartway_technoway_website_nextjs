'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { getData } from '../../../lib/api';
import type { Leader } from '@/lib/types';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';

const OurTeams: React.FC = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await getData('leaders');
        if (response?.data) {
          setLeaders([...response.data].reverse());
        }
      } catch (error) {
        console.error('Failed to fetch leaders:', error);
        setLeaders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our People"
          title="Visionary Leadership Guiding Every Innovation"
          description="Smartway Technoway thrives under the leadership of Mr. Khilan Ramani, a visionary entrepreneur known for redefining innovation across industries. His philosophy — “Keep Going, Keep Growing” — fuels every initiative under the Smartway umbrella."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {loading
            ? [1, 2, 3, 4].map((i) => <div key={i} className="aspect-[3/4] animate-pulse rounded-3xl bg-white/5" />)
            : leaders.map((leader, i) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -5% 0px' }}
                  transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="rounded-3xl">
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-surface">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover grayscale-[60%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                        <h3 className="font-display text-base font-semibold text-white md:text-lg">{leader.name}</h3>
                        <p className="text-xs text-cyan md:text-sm">{leader.position}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
