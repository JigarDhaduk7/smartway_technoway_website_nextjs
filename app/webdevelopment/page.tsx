'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';

import './WebDevelopment.scss';

const WebDevelopment: React.FC = () => (

  <div className='smartway-tech-about-us'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src="/assets/images/web-development-services-banner-image.jpg" alt="Web Development Banner" className="w-100" width={1200} height={600} />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Web Development</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li><Link href="/services" className='nav-list-link'>Services</Link> / &nbsp; </li>
                <li> Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='services-solution-wrap pt-100 home-sec-pattern-right'>
      <div className='logo-bg-pattern-right'>
        <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} />
      </div>
      <div className='container'>
        <div className='row align-items-center pb-100' data-aos="fade-up">
          <div className='col-12 text-center'>
            <h2 className="heading-xxxl mb-3">Web Development for High-Impact Digital Solution</h2>
          </div>
          <div className='col-12'>
            <div className='row justify-content-center'>
              <div className='col-12 col-xl-6 text-center'>
                <p className="peragraph-style-1">Native Infotech, India's foremost web development agency, skillfully transforms visions into dynamic website experiences, setting your site apart in a crowded marketplace.</p>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='row justify-content-center'>
              <div className='col-auto'>
                <Link href="/web-development" className='btn btn-primary d-flex align-items-center'> Learn more <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3" data-aos="fade-up">Web Development Services</h2>
          </div>
          <div className='col-lg-5 col-xl-4'>
            <p className="peragraph-style-1" data-aos="fade-up">"Transforming your ideas into powerful digital experiences with custom-built, responsive, and future-ready websites designed to deliver results."</p>
          </div>
        </div>
        <div className='row pb-100'>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-1.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>Custom Web Development</h2>
                <p className='peragraph-style-1 mb-0'>Bitcoding Solution creates unique, tailored websites designed to meet your specific business needs and objectives.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-2.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>Front-end Web Development</h2>
                <p className='peragraph-style-1 mb-0'>We build engaging, responsive interfaces for Bitcoding Solution that provide a seamless user experience on all devices.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-3.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>Open Source Web Development</h2>
                <p className='peragraph-style-1 mb-0'>Utilizing open-source technologies, Bitcoding Solution delivers flexible and cost-effective solutions for your web development needs.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-4.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>Back-end Web Development</h2>
                <p className='peragraph-style-1 mb-0'>Bitcoding Solution ensures robust server-side development for efficient, secure, and scalable website performance.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-5.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>CMS Web Development</h2>
                <p className='peragraph-style-1 mb-0'>We develop intuitive content management systems at Bitcoding Solution for easy site updates and content management.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src="/assets/images/web-development-services-icon-6.svg" alt="Icon" width={55} height={55} />
                </div>
                <h2 className='heading-lg'>User-Friendly Web Development</h2>
                <p className='peragraph-style-1 mb-0'>We design intuitive, accessible websites at Bitcoding Solution that enhance user interaction and overall experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='services-workflow-wrap home-sec-pattern-left'>
      <div className='logo-bg-pattern-left'>
        <Image src="/assets/images/logo-large-bg-patterns.svg" alt="Background Pattern" className="w-100" data-aos="fade-up" width={1200} height={800} />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-12 text-center'>
            <h2 className="heading-xxxl mb-3" data-aos="fade-up">Web Development Workflow</h2>
          </div>
        </div>
        <div className='row pb-100'>
          <div className='services-workflow-main' data-aos="fade-up">
            <div className='services-workflow-inner'>
              <ul>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>1</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-1.svg" alt="Research Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>Research</h6>
                  </div>
                </li>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>2</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-2.svg" alt="UX Design Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>User Experience Design</h6>
                  </div>
                </li>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>3</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-3.svg" alt="UI Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>User Interface</h6>
                  </div>
                </li>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>4</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-4.svg" alt="Branding Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>Branding</h6>
                  </div>
                </li>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>5</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-5.svg" alt="Testing Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>Testing</h6>
                  </div>
                </li>
                <li className='services-workflow-list'>
                  <div className='services-workflow-list-inner'>
                    <div className='services-workflow-number'>
                      <span>6</span>
                    </div>
                    <div className='services-workflow-card-main'>
                      <div className='services-workflow-box'>
                        <Image src="/assets/images/web-development-workflow-icon-6.svg" alt="Deployment Icon" className="services-workflow-icn" width={60} height={60} />
                      </div>
                    </div>
                    <h6 className='fw-semibold text-center mt-4'>Deployment</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section className='frequently-asked-question-wrap home-sec-pattern-right pb-100'>
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

export default WebDevelopment;