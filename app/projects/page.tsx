import { Metadata } from 'next';
import React from 'react';

import { getData } from '@/lib/api';
import type { Project } from '@/lib/types';
import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import ProjectCard from '../component/ProjectCard/ProjectCard';
import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/our-work-banner-image.png';

export const metadata: Metadata = {
  title: 'Smartway Technoway Case Studies | Proven Digital Transformation Success Stories',
  description: "Explore Smartway Technoway's success stories — from AI automation and cloud migrations to enterprise software solutions. Discover how we help organizations transform ideas into measurable impact.",
  keywords: 'Smartway Technoway projects, IT case studies, digital transformation success, AI automation projects, cloud migration company, software development results',
  openGraph: {
    title: 'Smartway Technoway Case Studies | Proven Digital Transformation Success Stories',
    description: "Explore Smartway Technoway's success stories — from AI automation and cloud migrations to enterprise software solutions. Discover how we help organizations transform ideas into measurable impact.",
    type: 'website',
  },
};

const Projects: React.FC = async () => {
  let projects: Project[] = [];

  try {
    const response = await getData('projects');
    projects = response.data?.filter((p: Project) => p.isPublished) || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }

  return (
    <>
      <PageHero
        title="Our Work"
        eyebrow="Case Studies"
        description="Every project we deliver begins with a vision and ends with measurable success."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        image={innerHeroBannerImage}
        imageAlt="Our Work Banner"
      />

      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Portfolio"
            title="From Thought to Impact — Proven Through Results"
            description="Here's how Smartway Technoway has helped organizations reimagine what's possible through intelligent, scalable, and secure digital solutions."
          />
          {projects.length > 0 ? (
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {projects.map((project, idx) => (
                <div key={project._id} className={idx === 0 ? 'md:col-span-2' : ''}>
                  <ProjectCard project={project} index={idx} featured={idx === 0} />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-14 text-muted">No projects published yet.</p>
          )}
        </div>
      </section>

      <OurCompanyValuesSection />
      <FormContentSection />
    </>
  );
};

export default Projects;
