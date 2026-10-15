import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/pricing-plans-banner-image.png';
import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import workforceIcon from '@/public/assets/images/workforce-icon.svg';
import fastServiceSupportIcon from '@/public/assets/images/fast-service-support-icon.svg';
import itStrategyIcon from '@/public/assets/images/it-strategy-icon.svg';

import './Pricing.scss';

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
    icon: workforceIcon,
    title: 'Dedicated Development Team',
    badge: 'Monthly Retainer',
    bestFor: 'Long-term projects, product development, and scaling engineering capacity.',
    included: 'Full-time senior/mid-level developers, dedicated project management, direct communication channels, and complete control over the workflow.',
  },
  {
    icon: fastServiceSupportIcon,
    title: 'Time & Materials',
    badge: 'Hourly / Weekly',
    bestFor: 'Evolving projects with changing requirements, MVP development, and ongoing maintenance.',
    included: 'Pay strictly for the hours worked, flexible scope adjustments, and transparent milestone tracking.',
  },
  {
    icon: itStrategyIcon,
    title: 'Fixed-Price Project',
    badge: 'Fixed Budget',
    bestFor: 'Well-defined scopes, specific deliverables, and clear timelines.',
    included: 'Detailed project roadmap, milestone-based invoicing, and guaranteed delivery within budget.',
  },
];

const Pricing: React.FC = () => (

  <div className='smartway-tech-pricing'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="Pricing Plans Banner" className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Pricing Plans</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='engagement-models-intro-wrap pt-100'>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Flexible Engagement Models Built for Your Business</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">At Smartway Technoway, we believe in transparent, flexible partnership models designed to scale with your project requirements — whether you need a full dedicated development team or specific technical expertise.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='engagement-models-sec-wrap pb-100'>
      <div className='container'>
        <div className='row'>
          {engagementModels.map((model) => (
            <div key={model.title} className='col-md-6 col-xl-4 my-3'>
              <div className='card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70' data-aos="fade-up">
                <div className='card-body card-pad-40'>
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={model.icon} alt={`${model.title} Icon`} />
                  </div>
                  <h2 className='heading-lg mb-2'>{model.title}</h2>
                  <span className='badge badge-numbers b-blue-800 mb-3 d-inline-block'>{model.badge}</span>
                  <p className='peragraph-style-1 mb-1 fw-bold font-14'>Best For</p>
                  <p className='peragraph-style-1 mb-3'>{model.bestFor}</p>
                  <p className='peragraph-style-1 mb-1 fw-bold font-14'>What's Included</p>
                  <p className='peragraph-style-1 mb-0'>{model.included}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CompanySuccessHighlights />

    <div className='ready-for-project-wrap home-sec-pattern-right home-sec-pattern-left'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <div className="logo-bg-pattern-left">
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <div className='container ready-for-project-container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='fw-bold'>Not Sure Which Model Fits Your Project?</h2>
            <p>Tell us about your goals and timeline — we'll help you choose the right engagement model, no obligation required.</p>
            <div className="d-inline-block">
              <Link href="/contactus" className="btn btn-primary d-flex align-items-center">Talk to Our Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className='frequently-asked-question-wrap home-sec-pattern-right py-100'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <FrequentlyAskedQuestion />
    </section>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden'>
      <div className='logo-bg-pattern-left'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <FormContentSection />
    </section>

  </div>

);

export default Pricing;
