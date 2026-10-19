import React from 'react';
import { getData } from '@/lib/api';
import type { Project } from '@/lib/types';

import HomeHero from './component/home/HomeHero';
import { HomeAbout, HomeBrands, HomePillars, HomeProjects } from './component/home/HomeSections';
import ServiceComponent from './component/servicecomponent/ServiceComponent';
import CompanySuccessHighlights from './component/CompanySuccessHighlights/CompanySuccessHighlights';
import SuccessStoriesSection from './component/SuccessStoriesSection/SuccessStoriesSection';
import BlogComponent from './component/BlogForHome/blogcomponent';
import FormContentSection from './component/FormAndContentSection/FormContentSection';

const Home = async () => {
  let recentProjects: Project[] = [];
  try {
    const response = await getData('projects');
    const allProjects = response.data?.filter((p: Project) => p.isPublished) || [];
    recentProjects = allProjects.slice(0, 3);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <ServiceComponent />
      <CompanySuccessHighlights />
      <HomePillars />
      <HomeProjects projects={recentProjects} />
      <HomeBrands />
      <SuccessStoriesSection />
      <BlogComponent />
      <FormContentSection />
    </>
  );
};

export default Home;
