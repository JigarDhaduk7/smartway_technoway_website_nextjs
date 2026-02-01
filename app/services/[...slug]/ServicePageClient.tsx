'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getData } from '../../../lib/api';

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

interface ServicePageClientProps {
  slug: string;
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ slug }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getData('skills');
        const activeSkills = response.data.filter((skill: Skill) => skill.status);
        setSkills(activeSkills);
        setFilteredSkills(activeSkills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const handleTabChange = (tabSlug: string) => {
    setActiveTab(tabSlug);
    if (tabSlug === 'all') {
      setFilteredSkills(skills);
    } else {
      const tabTitle = tabSlug.replace(/-/g, ' ');
      setFilteredSkills(skills.filter(skill => 
        skill.title.toLowerCase() === tabTitle.toLowerCase() ||
        skill.slug === tabSlug
      ));
    }
  };
  return (
    <div className='smartway-tech-about-us'>
      <DynamicDetail serviceSlug={slug} />

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
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'all' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('all')}
                    type="button"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'frontend' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('frontend')}
                    type="button"
                  >
                    Frontend
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'backend' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('backend')}
                    type="button"
                  >
                    Backend
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'frameworks' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('frameworks')}
                    type="button"
                  >
                    Frameworks
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'mobile-app' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('mobile-app')}
                    type="button"
                  >
                    Mobile App
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'database' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('database')}
                    type="button"
                  >
                    Data Base
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'google' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('google')}
                    type="button"
                  >
                    Google
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'data-science' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('data-science')}
                    type="button"
                  >
                    Data Science
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'machine-learning' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('machine-learning')}
                    type="button"
                  >
                    Machine Learning
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'devops' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('devops')}
                    type="button"
                  >
                    DevOps
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'cms' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('cms')}
                    type="button"
                  >
                    CMS
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'ecommerce' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('ecommerce')}
                    type="button"
                  >
                    ECommerce
                  </button>
                </li>
                <li className="nav-item col" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'security' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('security')}
                    type="button"
                  >
                    Security
                  </button>
                </li>
              </ul>
            </div>
            <div className='col-12'>
              <div className='row'>
                {loading ? (
                  Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className='col-6 col-md-4 col-lg-3 col-xl-2' data-aos="fade-up">
                      <div className='tech-platforms-box placeholder-glow'>
                        <span className="placeholder" style={{width: '80px', height: '80px', display: 'block'}}></span>
                      </div>
                    </div>
                  ))
                ) : filteredSkills.length > 0 ? (
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