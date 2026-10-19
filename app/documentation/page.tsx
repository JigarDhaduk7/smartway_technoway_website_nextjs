import { Metadata } from 'next';
import React from 'react';
import { Database, FileCode2, MonitorSmartphone, ServerCog } from 'lucide-react';

import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import TiltCard from '../component/ui/TiltCard';
import CtaBand from '../component/ui/CtaBand';
import { Reveal, Stagger, StaggerItem } from '../component/ui/Reveal';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/technology-documentation-workspace.png';

export const metadata: Metadata = {
  title: 'Documentation & Technology Stack | Engineering Excellence - Smartway Technoway',
  description: 'Explore the robust architecture, modern frameworks, and engineering best practices Smartway Technoway uses to deliver scalable digital solutions — plus our API documentation and handover process.',
  keywords: 'Smartway Technoway technology stack, engineering documentation, React Next.js Flutter, Node.js Python PHP, AWS Azure Vercel, API documentation, software handover',
  openGraph: {
    title: 'Documentation & Technology Stack | Engineering Excellence - Smartway Technoway',
    description: 'Explore the robust architecture, modern frameworks, and engineering best practices Smartway Technoway uses to deliver scalable digital solutions — plus our API documentation and handover process.',
    type: 'website',
  },
};

const techStack = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend & Mobile',
    stack: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Vue.js', 'HTML5/Tailwind CSS'],
  },
  {
    icon: ServerCog,
    title: 'Backend & Cloud',
    stack: ['Node.js', 'Python/Django', 'PHP/Laravel', 'Cloudflare Workers', 'Vercel', 'AWS', 'Azure'],
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    stack: ['PostgreSQL', 'MongoDB', 'MySQL', 'GitHub', 'Docker'],
  },
];

const Documentation: React.FC = () => (
  <>
    <PageHero
      title="Documentation & Technology Stack"
      eyebrow="Engineering"
      description="The architecture, frameworks, and engineering practices behind every Smartway Technoway build."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Documentation' }]}
      image={innerHeroBannerImage}
      imageAlt="Documentation & Technology Stack Banner"
    />

    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Core Technology Expertise"
          title="Engineering Excellence & Technical Standards"
          description="Explore the robust architecture, modern frameworks, and engineering best practices we utilize to deliver scalable digital solutions."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <TiltCard className="rounded-3xl">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/70 p-8 backdrop-blur">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright">
                    <item.icon className="size-6 text-white" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{item.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span key={t} className="rounded-full border border-line-strong bg-white/[0.03] px-3 py-1 font-mono text-xs text-fg/80">{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-5">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-brand/25 via-surface to-surface p-8 md:flex md:items-center md:gap-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-radial" />
            <span className="relative grid size-16 shrink-0 place-items-center rounded-2xl border border-line-strong bg-ink/60">
              <FileCode2 className="size-7 text-cyan" />
            </span>
            <div className="relative mt-6 md:mt-0">
              <h3 className="font-display text-2xl font-semibold">Integration & API Guides</h3>
              <p className="mt-2 max-w-3xl text-muted">We provide comprehensive API documentation, Postman collections, and architecture flowcharts upon project handover to ensure your internal teams can easily maintain or extend the software.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <CompanySuccessHighlights />

    <CtaBand
      title="Need the Full Technical Specs?"
      description="Talk to our engineering team for a deeper look at our architecture, API references, and handover documentation."
      cta={{ label: 'Talk to Our Team', href: '/contactus' }}
    />

    <FormContentSection />
  </>
);

export default Documentation;
