import { Metadata } from 'next';
import React from 'react';
import { BadgeIndianRupee, Headphones, ShieldCheck, Wand2 } from 'lucide-react';

import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import ParallaxImage from '../component/ui/ParallaxImage';
import TiltCard from '../component/ui/TiltCard';
import { Stagger, StaggerItem } from '../component/ui/Reveal';
import NextLevelServices from '../component/NextLevelServices/nextlevelservices';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import SuccessStoriesSection from '../component/SuccessStoriesSection/SuccessStoriesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

import innerHeroBannerImage from '@/public/assets/images/our-services-banner-image.png';
import bestSolutionsBannerImage from '@/public/assets/images/best-solutions-banner-image.png';

export const metadata: Metadata = {
  title: 'Smartway Technoway Services | AI, Cloud, Automation & Software Solutions for Modern Businesses',
  description: "Explore Smartway Technoway's full range of IT services — from custom software development to AI automation and cloud infrastructure management. We build scalable, intelligent, and future-ready solutions for every enterprise.",
  keywords: 'Smartway Technoway services, AI automation, cloud solutions, software development, IT management, digital transformation company',
  openGraph: {
    title: 'Smartway Technoway Services | AI, Cloud, Automation & Software Solutions for Modern Businesses',
    description: "Explore Smartway Technoway's full range of IT services — from custom software development to AI automation and cloud infrastructure management. We build scalable, intelligent, and future-ready solutions for every enterprise.",
    type: 'website',
  },
};

const features = [
  { icon: Wand2, title: 'Tailored Solutions', text: 'Personalized solutions built around your needs.' },
  { icon: ShieldCheck, title: 'Guaranteed Security', text: 'High-quality secure systems' },
  { icon: BadgeIndianRupee, title: 'Competitive Pricing', text: 'Affordable and reliable' },
  { icon: Headphones, title: 'Fast Service & Support', text: 'Always available for help' },
];

const FeatureCard = ({ f }: { f: (typeof features)[number] }) => (
  <StaggerItem className="h-full">
    <TiltCard className="rounded-3xl">
      <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/70 p-7 backdrop-blur">
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright">
          <f.icon className="size-6 text-white" />
        </span>
        <h3 className="mt-8 font-display text-xl font-semibold">{f.title}</h3>
        <p className="mt-2 text-muted">{f.text}</p>
      </div>
    </TiltCard>
  </StaggerItem>
);

const Services: React.FC = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        eyebrow="What We Build"
        description="From concept to execution — a comprehensive suite of technology services designed to make your business future-ready."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        image={innerHeroBannerImage}
        imageAlt="Our Services Banner"
      />

      <NextLevelServices />

      <CompanySuccessHighlights />

      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Best Solutions for Your Business"
            description="Innovative and reliable solutions tailored to support your business goals and drive long-term success."
          />
          <Stagger className="mt-14 grid grid-flow-dense gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
            <FeatureCard f={features[0]} />
            <StaggerItem className="md:col-span-2 xl:col-span-1 xl:row-span-2">
              <ParallaxImage src={bestSolutionsBannerImage} alt="The best solutions for your business" className="h-full min-h-[320px] rounded-[32px] border border-line" />
            </StaggerItem>
            <FeatureCard f={features[1]} />
            <FeatureCard f={features[2]} />
            <FeatureCard f={features[3]} />
          </Stagger>
        </div>
      </section>

      <SuccessStoriesSection />
      <FrequentlyAskedQuestion />
      <FormContentSection />
    </>
  );
};

export default Services;
