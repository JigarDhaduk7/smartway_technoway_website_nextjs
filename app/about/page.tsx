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
  title: 'About Smartway Technoway | Empowering the Future Through Innovation and Technology',
  description: 'Smartway Technoway, a Smartway Group company, is redefining digital transformation with AI, automation, and cloud solutions. Learn about our story, values, and vision — From Thought to Impact.',
  keywords: 'Smartway Technoway, About Smartway, IT company in India, AI and automation experts, digital transformation, Smartway Group technology',
  openGraph: {
    title: 'About Smartway Technoway | Empowering the Future Through Innovation and Technology',
    description: 'Smartway Technoway, a Smartway Group company, is redefining digital transformation with AI, automation, and cloud solutions. Learn about our story, values, and vision — From Thought to Impact.',
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
              <h2 className='heading-xxxl'>Empowering the Future Through Innovation and Intelligence</h2>
              <div className='col-xl-12'>
                <p className='peragraph-style-1'>From Thought to Impact — our journey is built on transforming vision into reality through technology that makes businesses smarter, faster, and more sustainable.</p>
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
              <Link href='' className='btn btn-primary'>Explore Our Work</Link>
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
              <Image src="/assets/images/our-vision-image.jpg" alt="Our Vision" className="w-100 img-h-500 object-cover" width={600} height={400} />
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
                <h2 className='fw-bold mb-3'>OUR STORY</h2>
                <p className='peragraph-style-1 lh-base mb-2'>Where Innovation Meets Purpose</p>
                <p className='peragraph-style-1 lh-base mb-3'>Smartway Technoway Pvt. Ltd. was founded with a singular mission — to bridge innovation with real-world impact. Born from the legacy of Smartway Group, India's trusted leader in healthcare and wellness, Technoway represents the evolution of that philosophy into the digital era. We believe technology is more than code — it's the catalyst that powers transformation. From startups to enterprises, we craft intelligent IT solutions that empower organizations to perform, evolve, and lead.</p>
                <ul className='peragraph-style-1'>
                  <li>•	Established under the vision of Mr. Khilan Ramani, Founder & MD of Smartway Group</li>
                  <li>•	Headquarters in Ahmedabad, Gujarat, India</li>
                  <li>•	Operates as the technology arm of Smartway Wellness Pvt Ltd</li>
                  <li>•	Focused on AI, automation, cloud, and enterprise-grade software</li>
                </ul>
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
              <Image src="/assets/images/our-mission-image.jpg" alt="Our Mission" className="w-100 img-h-500 object-cover" width={600} height={400} />
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
                <h2 className='fw-bold mb-3'>VISION & MISSION</h2>
                <p className='peragraph-style-1 lh-base mb-3'>Our Vision: To Shape a Smarter Digital World</p>
                <p className='peragraph-style-1 lh-base mb-2 fw-semibold font-16'>Vision </p>
                <p className='peragraph-style-1 lh-base mb-3'>To be the catalyst that transforms businesses through intelligent, human-centric technology — creating an ecosystem of innovation, efficiency, and trust.</p>
                <p className='peragraph-style-1 lh-base mb-2 fw-semibold font-16'>Mission</p>
                <p className='peragraph-style-1 lh-base mb-3'>To deliver next-generation IT solutions that simplify complexities, drive growth, and enhance productivity for every client we serve.</p>
                <p className='peragraph-style-1 lh-base mb-3'>We achieve this through deep technical expertise, design thinking, and a culture of continuous innovation.</p>
              </div>
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
              <Image src="/assets/images/our-vision-image.jpg" alt="Our Vision" className="w-100 img-h-500 object-cover" width={600} height={400} />
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
                <h2 className='fw-bold mb-3'>OUR VALUES</h2>
                <p className='peragraph-style-1 lh-base mb-2'>The Core Values That Drive Us</p>
                <p className='peragraph-style-1 lh-base mb-3'>At the heart of Smartway Technoway lies a belief that great technology begins with great purpose.
                  Our principles define how we think, build, and grow with every partner.
                </p>
                <ul className='peragraph-style-1'>
                  <li>• <b>Innovation </b>-	We constantly evolve, explore, and adopt emerging technologies to stay ahead of the curve.</li>
                  <li>•	<b>Integrity </b>- Integrity	Every interaction is rooted in honesty, transparency, and ethical excellence.</li>
                  <li>•	<b>Impact </b>- Our success is measured by the real value we deliver to our clients and communities.</li>
                  <li>•	<b>Collaboration </b>- We work as an extension of your team, co-creating solutions that drive long-term success.</li>
                  <li>•	<b>Excellence </b>- Quality isn’t an option — it’s our standard in every line of code, design, and decision.</li>
                </ul>
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
