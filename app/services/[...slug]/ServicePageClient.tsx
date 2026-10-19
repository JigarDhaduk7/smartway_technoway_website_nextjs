'use client';

import React from 'react';
import Image from 'next/image';

import type { ServiceData, Skill } from '@/lib/types';
import DynamicDetail from '../../component/serviceDynamicDetailComponent/dynamicdetail';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import SectionHeading from '../../component/ui/SectionHeading';
import Marquee from '../../component/ui/Marquee';

interface ServicePageClientProps {
  serviceData: ServiceData | null;
  skills: Skill[];
}

const SkillChip = ({ skill }: { skill: Skill }) => (
  <div className="group mx-2.5 flex h-28 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-white/95 p-3 transition-transform duration-300 hover:-translate-y-1 md:w-40">
    <Image src={skill.image} alt={skill.title} width={56} height={56} className="size-12 object-contain" loading="lazy" />
    <span className="line-clamp-1 text-xs font-semibold text-ink/70">{skill.title}</span>
  </div>
);

const ServicePageClient: React.FC<ServicePageClientProps> = ({ serviceData, skills }) => {
  const ordered = [...skills].reverse();
  const half = Math.ceil(ordered.length / 2);

  return (
    <>
      <DynamicDetail serviceData={serviceData} />

      {serviceData && (
        <>
          <section className="relative py-20 md:py-28">
            <div className="container-x">
              <SectionHeading
                eyebrow="Tech Stack"
                title="Technologies & Platforms We Work With"
                description="Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity."
              />
            </div>
            {ordered.length > 0 ? (
              <div className="mt-14 space-y-5">
                <Marquee duration={Math.max(half * 3, 30)}>
                  {ordered.slice(0, half).map((skill) => <SkillChip key={skill._id} skill={skill} />)}
                </Marquee>
                {ordered.length > 1 && (
                  <Marquee reverse duration={Math.max(half * 3, 30)}>
                    {ordered.slice(half).map((skill) => <SkillChip key={skill._id} skill={skill} />)}
                  </Marquee>
                )}
              </div>
            ) : (
              <p className="container-x mt-10 text-muted">No technologies available for this category.</p>
            )}
          </section>

          <FrequentlyAskedQuestion />
          <FormContentSection />
        </>
      )}
    </>
  );
};

export default ServicePageClient;
