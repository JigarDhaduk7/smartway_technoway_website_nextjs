import { Metadata } from 'next';
import React from 'react';

import PageHero from '../component/ui/PageHero';
import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import FindYouAnOpenPosition from '../component/findyouanopenposition/findyouanopenposition';
import CareerCta from './CareerCta';
import CareerForm from './CareerForm';

import innerHeroBannerImage from '../../public/assets/images/career-banner-image.png';

export const metadata: Metadata = {
  title: 'Careers at Smartway Technoway | Build the Future of Technology With Us',
  description: 'Explore open positions at Smartway Technoway in Ahmedabad. Join a collaborative, idea-driven team building AI, cloud, and enterprise software — From Thought to Impact.',
  keywords: 'Smartway Technoway careers, IT jobs Ahmedabad, software developer jobs, Smartway Group careers, tech jobs Gujarat',
  openGraph: {
    title: 'Careers at Smartway Technoway | Build the Future of Technology With Us',
    description: 'Explore open positions at Smartway Technoway in Ahmedabad. Join a collaborative, idea-driven team building AI, cloud, and enterprise software.',
    type: 'website',
  },
};

const Career = () => (
  <>
    <PageHero
      title="Career"
      eyebrow="Join the Team"
      description="Curious minds, bold ideas, and a shared belief in building technology for good."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Career' }]}
      image={innerHeroBannerImage}
      imageAlt="Career Banner"
    />
    <OurCompanyValuesSection />
    <FindYouAnOpenPosition />
    <CareerCta />
    <CareerForm />
  </>
);

export default Career;
