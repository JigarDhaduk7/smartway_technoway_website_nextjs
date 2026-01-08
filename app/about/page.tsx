import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import SuccessStoriesSection from '../component/SuccessStoriesSection/SuccessStoriesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import OurTeams from '../component/OurTeams/OurTeams';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

import './About.scss';

export const metadata: Metadata = {
  title: 'About Us - Smartway Technoway | Leading IT Solutions Company',
  description: 'Learn about Smartway Technoway - a leading IT consulting and web development company. Discover our vision, mission, and commitment to delivering innovative technology solutions for businesses worldwide.',
  keywords: 'about smartway technoway, IT company, technology solutions, web development company, software development team, digital transformation experts',
  openGraph: {
    title: 'About Us - Smartway Technoway | Leading IT Solutions Company',
    description: 'Learn about Smartway Technoway - a leading IT consulting and web development company with expert team delivering innovative solutions.',
    type: 'website',
  },
};

const About: React.FC = () => (

  <div className='smartway-tech-about-us'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src="/assets/images/about-us-banner-image.jpg" alt="About Us Banner" className="w-100" width={1200} height={600} />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>About Us</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='end-to-end-it-solutions-sec-wrap'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-6 home-sec-padding'>
            <div className='card card-xxxl card-blue-overlay __radius-tl-150 __radius-br-150' data-aos="fade-up">
              <Image src="/assets/images/end-to-end-solutions-section-image.jpg" alt="End to End Solutions" className="w-100 img-h-500 object-cover" width={600} height={500} />
            </div>
          </div>
          <div className='col-lg-6 ps-xl-5 pb-3'>
            <div className='' data-aos="fade-up">
              <h2 className='heading-xxxl'>End-to End IT Solutions for Growing Businesses</h2>
              <div className='col-xl-9'>
                <p className='peragraph-style-1'>We provide comprehensive, end-to-end IT solutions of designed to support businesses at stage of growing.</p>
              </div>
              <div className='row my-4'>
                <div className='col-12'>
                  <div className='card card-xl card-gray h-100 __radius-tl-50 __radius-br-50'>
                    <div className='card-body card-pad-30'>
                      <div className='pb-4'>
                        <div className='row justify-content-between'>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>It Solution</h6>
                          </div>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>98%</h6>
                          </div>
                        </div>
                        <div className="progress progress-custom" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                          <div className="progress-bar" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                      <div className='pb-4'>
                        <div className='row justify-content-between'>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>Cyber Security</h6>
                          </div>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>99%</h6>
                          </div>
                        </div>
                        <div className="progress progress-custom" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                          <div className="progress-bar" style={{ width: "99%" }}></div>
                        </div>
                      </div>
                      <div className='pb-0'>
                        <div className='row justify-content-between'>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>Cloud Solution</h6>
                          </div>
                          <div className='col-auto'>
                            <h6 className='fw-medium'>100%</h6>
                          </div>
                        </div>
                        <div className="progress progress-custom" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                          <div className="progress-bar" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href='' className='btn btn-primary'>Discover our Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='our-vision-sec-wrap'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 order-lg-2 home-sec-padding'>
            <div className='card card-xxxl card-blue-overlay __radius-tl-150 __radius-br-150' data-aos="fade-up">
              <Image src="/assets/images/our-vision-image.jpg" alt="Our Vision" className="w-100 img-h-400 object-cover" width={600} height={400} />
            </div>
          </div>
          <div className='col-lg-6 order-lg-1' data-aos="fade-up">
            <div className='row justify-content-start'>
              <div className='col-12 col-lg-11'>
                <div className='icn-bg-blue card-icn-wrap icn-70 card card-xxl __radius-tl-110 __radius-br-110 __radius-tr-110 mb-4'>
                  <Image src="/assets/images/our-vision-icon.svg" alt='Our Vision Icon' className='img-fluid' width={70} height={70} />
                </div>
              </div>
              <div className='col-12 col-lg-11'>
                <h2 className='fw-bold mb-3'>Our Vision</h2>
                <p className='peragraph-style-1 lh-base mb-3'>To be the leading provider of AI-powered digital solutions, enabling businesses worldwide to unlock their full potential through innovative technology.</p>
                <p className='peragraph-style-1 lh-base mb-3'>At TechXen, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='our-mission-sec-wrap'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 home-sec-padding'>
            <div className='card card-xxxl card-blue-overlay __radius-tl-150 __radius-br-150' data-aos="fade-up">
              <Image src="/assets/images/our-mission-image.jpg" alt="Our Mission" className="w-100 img-h-400 object-cover" width={600} height={400} />
            </div>
          </div>
          <div className='col-lg-6' data-aos="fade-up">
            <div className='row justify-content-end'>
              <div className='col-12 col-lg-11'>
                <div className='icn-bg-blue card-icn-wrap icn-70 card card-xxl __radius-tl-110 __radius-br-110 __radius-tr-110 mb-4'>
                  <Image src="/assets/images/our-mission-icon.svg" alt='Our Mission Icon' className='img-fluid' width={70} height={70} />
                </div>
              </div>
              <div className='col-12 col-lg-11'>
                <h2 className='fw-bold mb-3'>Our Mission</h2>
                <p className='peragraph-style-1 lh-base mb-3'>At TechXen, our mission is simple: to revolutionize the digital landscape by delivering top-notch technology solutions that drive growth, efficiency, and sustainability for our clients. We strive to be the trusted partner that businesses can rely on to navigate the complexities of the digital world.</p>
                <p className='peragraph-style-1 lh-base mb-3'>To deliver exceptional digital experiences by combining cutting-edge AI technology with expert development skills, helping our clients achieve measurable business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CompanySuccessHighlights />

    <section className='company-values-wrap home-sec-pattern-right py-100'>
      <div className='logo-bg-pattern-right'>
        {/* <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} /> */}
      </div>
      <OurCompanyValuesSection />
    </section>

    <div className='pt-100 home-sec-pattern-left'>
      <div className='logo-bg-pattern-left'>
        {/* <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} /> */}
      </div>
      <SuccessStoriesSection />
    </div>

    <OurTeams />

    <section className='frequently-asked-question-wrap home-sec-pattern-right pb-100'>
      <div className='logo-bg-pattern-right'>
        {/* <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} /> */}
      </div>
      <FrequentlyAskedQuestion />
    </section>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden'>
      <div className='logo-bg-pattern-left'>
        {/* <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} /> */}
      </div>
      <FormContentSection />
    </section>

  </div>

);

export default About;
