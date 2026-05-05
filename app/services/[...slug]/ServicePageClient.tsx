'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import DynamicDetail from '../../component/serviceDynamicDetailComponent/dynamicdetail';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

interface Skill {
  _id: string;
  title: string;
  slug: string;
  image: string;
  status: boolean;
}

interface ServiceData {
  title: string;
  heroSection: { headline: string; subHeadline: string };
  servicesOverview: {
    title: string;
    description: string;
    services: Array<{ title: string; description: string; icon: string }>;
  };
  processSection: {
    title: string;
    steps: Array<{ step: number; title: string; icon: string }>;
  };
}

interface ServicePageClientProps {
  serviceData: ServiceData | null;
  skills: Skill[];
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ serviceData, skills }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(skill =>
        skill.title.toLowerCase() === activeTab.replace(/-/g, ' ').toLowerCase() ||
        skill.slug === activeTab
      );
  return (
    <div className='smartway-tech-about-us'>
      <DynamicDetail serviceData={serviceData} />

      <section className='home-next-level-solution-wrap pt-100'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-7 col-xl-6'>
              <h2 className="heading-xxxl mb-3" data-aos="fade-up">Technologies & Platforms We Work With</h2>
            </div>
            <div className='col-lg-5 col-xl-4'>
              <p className="peragraph-style-1" data-aos="fade-up">Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity</p>
            </div>
          </div>
          <div className='row pb-100'>
            <div className='col-12 py-4' data-aos="fade-up">
              <ul className="nav nav-tabs button-nav-tab" role="tablist">
                {['all', 'frontend', 'backend', 'frameworks', 'mobile-app', 'data base', 'google', 'data-science', 'machine learning', 'devops', 'cms', 'ecommerce', 'security'].map((tab) => (
                  <li key={tab} className="nav-item col" role="presentation">
                    <button
                      className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                      type="button"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-12'>
              <div className='row'>
                {filteredSkills.length > 0 ? (
                  filteredSkills.map((skill) => (
                    <div key={skill._id} className='col-6 col-md-4 col-lg-3 col-xl-2' data-aos="fade-up">
                      <div className='tech-platforms-box'>
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="tech-platforms-imgs"
                          width={80}
                          height={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='col-12 text-center py-5'>
                    <p>No technologies available for this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='frequently-asked-question-wrap home-sec-pattern-right home-sec-pattern-right-added pb-100'>
        <div className='logo-bg-pattern-right'>
          <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} />
        </div>
        <FrequentlyAskedQuestion />
      </section>

      <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden'>
        <div className='logo-bg-pattern-left'>
          <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} />
        </div>
        <FormContentSection />
      </section>
    </div>
  );
};

export default ServicePageClient;