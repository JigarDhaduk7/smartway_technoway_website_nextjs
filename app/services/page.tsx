import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import SuccessStoriesSection from '../component/SuccessStoriesSection/SuccessStoriesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

export const metadata: Metadata = {
  title: 'Our Services - Smartway Technoway | Web Development & IT Solutions',
  description: 'Explore our comprehensive IT services including web development, cloud solutions, mobile app development, UI/UX design, IT consulting, and email marketing. Custom solutions for your business needs.',
  keywords: 'web development services, IT consulting, cloud solutions, mobile app development, UI UX design, email marketing, custom software development, digital solutions',
  openGraph: {
    title: 'Our Services - Smartway Technoway | Web Development & IT Solutions',
    description: 'Comprehensive IT services including web development, cloud solutions, and mobile app development. Custom solutions for your business.',
    type: 'website',
  },
};

import innerHeroBannerImage from '@/public/assets/images/our-services-banner-image.jpg';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import servicesWebDevIcon from '@/public/assets/images/web-development-icon.svg';
import servicesCloudSolutionsIcon from '@/public/assets/images/cloud-solutions-icon.svg';
import servicesITConsultingIcon from '@/public/assets/images/it-consulting-icon.svg';
import servicesITUIUXDesignIcon from '@/public/assets/images/ui-ux-design-icon.svg';
import servicesITAppDevelopmentIcon from '@/public/assets/images/app-development-icon.svg';
import servicesITEmailMarketingIcon from '@/public/assets/images/email-marketing-icon.svg';

import bestSolutionsBannerImage from '@/public/assets/images/best-solutions-banner-image.png';

import bestSolutionsTailoredIcon from '@/public/assets/images/tailored-solutions-icon.svg';
import bestSolutionsGuaranteedSecurityIcon from '@/public/assets/images/guaranteed-security-icon.svg';
import bestSolutionsCompetitivePricingIcon from '@/public/assets/images/competitive-pricing-icon.svg';
import bestSolutionsFastServiceSupportIcon from '@/public/assets/images/fast-service-support-icon.svg';

import './Services.scss';
import NextLevelServices from '../component/NextLevelServices/nextlevelservices';

const Services: React.FC = () => {
  return (
    <div className="smartway-tech-about-us">

      {/* HERO SECTION */}
      <section className="inner-hero-sec-wrap">
        <div className="inner-hero-banner">
          <Image src={innerHeroBannerImage} alt="" className="w-100" />
        </div>

        <div className="inner-hero-sec-top-text">
          <div className="container">
            <div className="row">
              <div className="col-12 inner-hero-sec-txt">
                <h2 className="fw-semibold">Our Services</h2>

                <ul className="d-flex justify-content-center">
                  <li>
                    <Link href="/" className="nav-list-link">Home</Link> / &nbsp;
                  </li>
                  <li>Services</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT LEVEL SERVICES */}
     
     <NextLevelServices/>

      <CompanySuccessHighlights />

      {/* BEST SOLUTIONS SECTION */}
      <section className="home-next-level-solution-wrap home-sec-pattern-right pt-100">
        <div className="logo-bg-pattern-right">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-between mb-4" data-aos="fade-up">
            <div className="col-lg-7 col-xl-6">
              <h2 className="heading-xxxl mb-3">The Best Solutions for Your Business</h2>
            </div>
            <div className="col-lg-5 col-xl-4">
              <p className="peragraph-style-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>

          <div className="row">

            {/* LEFT FEATURES */}
            <div className="col-xl-4">
              <div className="row">

                <div className="col-12 col-md-6 col-lg-6 col-xl-12 mb-4">
                  <div className="card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70">
                    <div className="card-body card-pad-40">
                      <div className="card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150">
                        <Image src={bestSolutionsTailoredIcon} alt="Icon" />
                      </div>
                      <h2 className="heading-lg">Tailored Solutions</h2>
                      <p className="peragraph-style-1 mb-0">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-12 mb-4">
                  <div className="card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70">
                    <div className="card-body card-pad-40">
                      <div className="card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150">
                        <Image src={bestSolutionsGuaranteedSecurityIcon} alt="Icon" />
                      </div>
                      <h2 className="heading-lg">Guaranteed Security</h2>
                      <p className="peragraph-style-1 mb-0">High-quality secure systems</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-xl-4 mb-4">
              <div className="card card-xxxl __radius-tl-150 __radius-br-150 h-100">
                <Image src={bestSolutionsBannerImage} alt="" className="w-100 best-solutions-img object-cover" />
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="col-xl-4">
              <div className="row">

                <div className="col-12 col-md-6 col-lg-6 col-xl-12 mb-4">
                  <div className="card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70">
                    <div className="card-body card-pad-40">
                      <div className="card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150">
                        <Image src={bestSolutionsCompetitivePricingIcon} alt="Icon" />
                      </div>
                      <h2 className="heading-lg">Competitive Pricing</h2>
                      <p className="peragraph-style-1 mb-0">Affordable and reliable</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6 col-xl-12 mb-4">
                  <div className="card card-xl card-gray h-100 __hover-blue __radius-tr-70 __radius-bl-70">
                    <div className="card-body card-pad-40">
                      <div className="card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150">
                        <Image src={bestSolutionsFastServiceSupportIcon} alt="Icon" />
                      </div>
                      <h2 className="heading-lg">Fast Service & Support</h2>
                      <p className="peragraph-style-1 mb-0">Always available for help</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <div className="pt-100 home-sec-pattern-left">
        <div className="logo-bg-pattern-left">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>
        <SuccessStoriesSection />
      </div>

      {/* FAQ */}
      <section className="frequently-asked-question-wrap home-sec-pattern-right pb-100">
        <div className="logo-bg-pattern-right">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>
        <FrequentlyAskedQuestion />
      </section>

      {/* CONTACT */}
      <section className="contact-sec-wrap home-sec-pattern-left overflow-hidden">
        <div className="logo-bg-pattern-left">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>
        <FormContentSection />
      </section>

    </div>
  );
};

export default Services;
