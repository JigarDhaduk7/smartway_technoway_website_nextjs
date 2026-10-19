import { Metadata } from 'next';
import React from 'react';
import { CalendarClock, Check, Target, Users } from 'lucide-react';

import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import TiltCard from '../component/ui/TiltCard';
import CtaBand from '../component/ui/CtaBand';
import Button from '../component/ui/Button';
import { Stagger, StaggerItem } from '../component/ui/Reveal';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/pricing-plans-banner-image.png';

export const metadata: Metadata = {
  title: 'Pricing Plans | Flexible Engagement Models - Smartway Technoway',
  description: 'Explore Smartway Technoway\'s flexible engagement models — Dedicated Development Team, Time & Materials, and Fixed-Price Projects. Transparent pricing built to scale with your business.',
  keywords: 'Smartway Technoway pricing, engagement models, dedicated development team, time and materials, fixed price project, IT outsourcing pricing',
  openGraph: {
    title: 'Pricing Plans | Flexible Engagement Models - Smartway Technoway',
    description: 'Explore Smartway Technoway\'s flexible engagement models — Dedicated Development Team, Time & Materials, and Fixed-Price Projects. Transparent pricing built to scale with your business.',
    type: 'website',
  },
};

const engagementModels = [
  {
    icon: Users,
    title: 'Dedicated Development Team',
    badge: 'Monthly Retainer',
    bestFor: 'Long-term projects, product development, and scaling engineering capacity.',
    included: ['Full-time senior/mid-level developers', 'Dedicated project management', 'Direct communication channels', 'Complete control over the workflow'],
    popular: true,
  },
  {
    icon: CalendarClock,
    title: 'Time & Materials',
    badge: 'Hourly / Weekly',
    bestFor: 'Evolving projects with changing requirements, MVP development, and ongoing maintenance.',
    included: ['Pay strictly for the hours worked', 'Flexible scope adjustments', 'Transparent milestone tracking'],
    popular: false,
  },
  {
    icon: Target,
    title: 'Fixed-Price Project',
    badge: 'Fixed Budget',
    bestFor: 'Well-defined scopes, specific deliverables, and clear timelines.',
    included: ['Detailed project roadmap', 'Milestone-based invoicing', 'Guaranteed delivery within budget'],
    popular: false,
  },
];

const Pricing: React.FC = () => (
  <>
    <PageHero
      title="Pricing Plans"
      eyebrow="Engagement Models"
      description="Transparent, flexible partnership models designed to scale with your project requirements."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      image={innerHeroBannerImage}
      imageAlt="Pricing Plans Banner"
    />

    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Engage"
          title="Flexible Engagement Models Built for Your Business"
          description="At Smartway Technoway, we believe in transparent, flexible partnership models designed to scale with your project requirements — whether you need a full dedicated development team or specific technical expertise."
        />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.12}>
          {engagementModels.map((model) => (
            <StaggerItem key={model.title} className="h-full">
              <TiltCard max={5} className="rounded-[28px]">
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-8 backdrop-blur ${
                    model.popular ? 'border-brand-bright/60 bg-gradient-to-b from-brand/30 to-surface' : 'border-line bg-surface/70'
                  }`}
                >
                  {model.popular && (
                    <span className="absolute top-6 right-6 rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">Most popular</span>
                  )}
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright">
                    <model.icon className="size-6 text-white" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{model.title}</h3>
                  <span className="mt-3 inline-flex w-fit rounded-full border border-line-strong px-3 py-1 font-mono text-xs tracking-wider text-fg/80 uppercase">{model.badge}</span>
                  <p className="mt-6 font-mono text-xs tracking-widest text-subtle uppercase">Best For</p>
                  <p className="mt-2 text-muted">{model.bestFor}</p>
                  <p className="mt-6 font-mono text-xs tracking-widest text-subtle uppercase">What&apos;s Included</p>
                  <ul className="mt-3 flex-1 space-y-2.5">
                    {model.included.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-fg/85">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/contactus" variant={model.popular ? 'primary' : 'ghost'} arrow className="w-full">Get a quote</Button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <CompanySuccessHighlights />

    <CtaBand
      title="Not Sure Which Model Fits Your Project?"
      description="Tell us about your goals and timeline — we'll help you choose the right engagement model, no obligation required."
      cta={{ label: 'Talk to Our Team', href: '/contactus' }}
    />

    <FrequentlyAskedQuestion />
    <FormContentSection />
  </>
);

export default Pricing;
