'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import DynamicDetail from '../../component/serviceDynamicDetailComponent/dynamicdetail';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

import './WebDevelopment.scss';

const ServicePage: React.FC = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

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
                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab" aria-controls="all-tab-pane" aria-selected="true">All</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms1-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms1-tab-pane" type="button" role="tab" aria-controls="tech-platforms1-tab-pane" aria-selected="false">Frontend</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms2-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms2-tab-pane" type="button" role="tab" aria-controls="tech-platforms2-tab-pane" aria-selected="false">Backend</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms3-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms3-tab-pane" type="button" role="tab" aria-controls="tech-platforms3-tab-pane" aria-selected="false">Frameworks</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms4-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms4-tab-pane" type="button" role="tab" aria-controls="tech-platforms4-tab-pane" aria-selected="false">Mobile App</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms5-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms5-tab-pane" type="button" role="tab" aria-controls="tech-platforms5-tab-pane" aria-selected="false">Data Base</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms6-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms6-tab-pane" type="button" role="tab" aria-controls="tech-platforms6-tab-pane" aria-selected="false">Google</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms7-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms7-tab-pane" type="button" role="tab" aria-controls="tech-platforms7-tab-pane" aria-selected="false">Data Science</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms8-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms8-tab-pane" type="button" role="tab" aria-controls="tech-platforms8-tab-pane" aria-selected="false">Machine Learning</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms9-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms9-tab-pane" type="button" role="tab" aria-controls="tech-platforms9-tab-pane" aria-selected="false">DevOps</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms10-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms10-tab-pane" type="button" role="tab" aria-controls="tech-platforms10-tab-pane" aria-selected="false">CMS</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms11-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms11-tab-pane" type="button" role="tab" aria-controls="tech-platforms11-tab-pane" aria-selected="false">ECommerce</button>
              </li>
              <li className="nav-item col" role="presentation">
                <button className="nav-link" id="tech-platforms12-tab" data-bs-toggle="tab" data-bs-target="#tech-platforms12-tab-pane" type="button" role="tab" aria-controls="tech-platforms12-tab-pane" aria-selected="false">Security</button>
              </li>
            </ul>
          </div>
          <div className='col-12'>
            <div className='row'>
              {Array.from({ length: 36 }, (_, i) => (
                <div key={i} className='col-6 col-md-4 col-lg-3 col-xl-2' data-aos="fade-up">
                  <div className='tech-platforms-box'>
                    <Image src={`/assets/images/technologies-icon-${i + 1}.png`} alt={`Technology ${i + 1}`} className="tech-platforms-imgs" width={80} height={80} />
                  </div>
                </div>
              ))}
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

export default ServicePage;