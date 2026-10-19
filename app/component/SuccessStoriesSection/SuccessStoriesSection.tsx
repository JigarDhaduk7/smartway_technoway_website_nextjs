'use client';

import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { getData } from '../../../lib/api';
import type { Testimonial } from '@/lib/types';
import SectionHeading from '../ui/SectionHeading';
import Marquee from '../ui/Marquee';

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <figure className="glass mx-3 flex w-[320px] shrink-0 flex-col rounded-3xl p-7 transition-colors duration-300 hover:border-brand-bright/50 md:w-[400px]">
    <div className="mb-5 flex items-center justify-between">
      <Quote className="size-8 text-brand-bright" aria-hidden />
      {t.rating > 0 && (
        <div className="flex gap-0.5" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`size-4 ${i < Math.round(t.rating) ? 'fill-cyan text-cyan' : 'text-subtle'}`} aria-hidden />
          ))}
        </div>
      )}
    </div>
    <blockquote className="flex-1 text-[15px] leading-relaxed text-fg/85">{t.message}</blockquote>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-cyan font-display font-semibold text-white">
        {t.name.replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, '').charAt(0)}
      </span>
      <span>
        <span className="block font-semibold text-fg">{t.name}</span>
        <span className="block text-sm text-muted">{t.designation}</span>
      </span>
    </figcaption>
  </figure>
);

const SuccessStoriesSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getData('testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of Trust and Transformation"
          description="Discover how businesses across industries have achieved growth and efficiency with our IT solutions. These success stories highlight the real impact."
        />
      </div>

      <div className="mt-14 space-y-6">
        {loading ? (
          <div className="flex gap-6 overflow-hidden px-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 w-[400px] shrink-0 animate-pulse rounded-3xl bg-white/5" />
            ))}
          </div>
        ) : (
          <>
            {rowA.length > 0 && (
              <Marquee duration={Math.max(rowA.length * 9, 30)}>
                {rowA.map((t) => <TestimonialCard key={t._id} t={t} />)}
              </Marquee>
            )}
            {rowB.length > 0 && (
              <Marquee reverse duration={Math.max(rowB.length * 9, 30)}>
                {rowB.map((t) => <TestimonialCard key={t._id} t={t} />)}
              </Marquee>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
