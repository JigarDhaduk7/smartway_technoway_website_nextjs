import { Metadata } from 'next';
import React from 'react';

import PageHero from '../component/ui/PageHero';
import { AboutChapters, AboutIntro } from '../component/about/AboutSections';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import SuccessStoriesSection from '../component/SuccessStoriesSection/SuccessStoriesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import OurTeams from '../component/OurTeams/OurTeams';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

import aboutBanner from '@/public/assets/images/about-us-banner-image.png';

export const metadata: Metadata = {
  title: 'About Smartway Technoway | Empowering the Future Through Innovation and Technology',
  description: 'Smartway Technoway, a Smartway Group company, is redefining digital transformation with AI, automation, and cloud solutions. Learn about our story, values, and vision — From Thought to Impact.',
  keywords: 'Smartway Technoway, About Smartway, IT company in India, AI and automation experts, digital transformation, Smartway Group technology',
  openGraph: {
    title: 'About Smartway Technoway | Empowering the Future Through Innovation and Technology',
    description: 'Smartway Technoway, a Smartway Group company, is redefining digital transformation with AI, automation, and cloud solutions. Learn about our story, values, and vision — From Thought to Impact.',
    type: 'website',
  },
};

const About: React.FC = () => (
  <>
    <PageHero
      title="About Us"
      eyebrow="From Thought to Impact"
      description="The technology arm of the Smartway Group — turning vision into reality with technology that makes businesses smarter, faster, and more sustainable."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      image={aboutBanner}
      imageAlt="About Us Banner"
    />
    <AboutIntro />
    <AboutChapters />
    <CompanySuccessHighlights />
    <OurCompanyValuesSection />
    <SuccessStoriesSection />
    <OurTeams />
    <FrequentlyAskedQuestion />
    <FormContentSection />
  </>
);

export default About;
