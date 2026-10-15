import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/technology-documentation-workspace.png';
import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import appDevelopmentIcon from '@/public/assets/images/app-development-icon.svg';
import cloudSolutionsIcon from '@/public/assets/images/cloud-solutions-icon.svg';
import powerfullServerIcon from '@/public/assets/images/powerfull-server-icon.svg';
import itStrategyIcon from '@/public/assets/images/it-strategy-icon.svg';

export const metadata: Metadata = {
  title: 'Documentation & Technology Stack | Engineering Excellence - Smartway Technoway',
  description: 'Explore the robust architecture, modern frameworks, and engineering best practices Smartway Technoway uses to deliver scalable digital solutions — plus our API documentation and handover process.',
  keywords: 'Smartway Technoway technology stack, engineering documentation, React Next.js Flutter, Node.js Python PHP, AWS Azure Vercel, API documentation, software handover',
  openGraph: {
    title: 'Documentation & Technology Stack | Engineering Excellence - Smartway Technoway',
    description: 'Explore the robust architecture, modern frameworks, and engineering best practices Smartway Technoway uses to deliver scalable digital solutions — plus our API documentation and handover process.',
    type: 'website',
  },
};

const techStack = [
  {
    icon: appDevelopmentIcon,
    title: 'Frontend & Mobile',
    stack: 'React.js, Next.js, Flutter, React Native, Vue.js, HTML5/Tailwind CSS.',
  },
  {
    icon: cloudSolutionsIcon,
    title: 'Backend & Cloud',
    stack: 'Node.js, Python/Django, PHP/Laravel, Cloudflare Workers, Vercel, AWS, and Azure.',
  },
  {
    icon: powerfullServerIcon,
    title: 'Databases & Tools',
    stack: 'PostgreSQL, MongoDB, MySQL, GitHub, and Docker.',
  },
];

const Documentation: React.FC = () => (

  <div className='smartway-tech-documentation'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="Documentation & Technology Stack Banner" className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Documentation & Technology Stack</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='documentation-intro-wrap pt-100'>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Engineering Excellence & Technical Standards</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">Explore the robust architecture, modern frameworks, and engineering best practices we utilize to deliver scalable digital solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='documentation-sec-wrap pb-100'>
      <div className='container'>

        <div className='row mb-2' data-aos="fade-up">
          <div className='col-12'>
            <h2 className='heading-lg'>Core Technology Expertise</h2>
          </div>
        </div>

        <div className='row'>
          {techStack.map((item) => (
            <div key={item.title} className='col-md-6 col-xl-4 my-3'>
              <div className='card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70' data-aos="fade-up">
                <div className='card-body card-pad-40'>
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={item.icon} alt={`${item.title} Icon`} />
                  </div>
                  <h2 className='heading-lg'>{item.title}</h2>
                  <p className='peragraph-style-1 mb-0'>{item.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row mt-3'>
          <div className='col-12'>
            <div className='card card-xl card-gray __radius-tr-70 __radius-bl-70' data-aos="fade-up">
              <div className='card-body card-pad-40'>
                <div className='row align-items-center'>
                  <div className='col-auto'>
                    <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150 mb-0'>
                      <Image src={itStrategyIcon} alt="Integration & API Guides Icon" />
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='heading-lg mb-2'>Integration & API Guides</h2>
                    <p className='peragraph-style-1 mb-0'>We provide comprehensive API documentation, Postman collections, and architecture flowcharts upon project handover to ensure your internal teams can easily maintain or extend the software.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <h2 className='fw-bold'>Need the Full Technical Specs?</h2>
            <p>Talk to our engineering team for a deeper look at our architecture, API references, and handover documentation.</p>
            <div className="d-inline-block">
              <Link href="/contactus" className="btn btn-primary d-flex align-items-center">Talk to Our Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden py-100'>
      <div className='logo-bg-pattern-left'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <FormContentSection />
    </section>

  </div>

);

export default Documentation;
