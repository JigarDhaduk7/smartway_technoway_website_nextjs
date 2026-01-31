'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import FormContentSection from './component/FormAndContentSection/FormContentSection';
import SuccessStoriesSection from './component/SuccessStoriesSection/SuccessStoriesSection';

import heroImage1 from "../public/assets/images/hero-section-image-1.png";
import heroImage2 from "../public/assets/images/hero-section-image-2.png";
import heroImage3 from "../public/assets/images/hero-section-image-3.png";
import heroImage4 from "../public/assets/images/hero-section-image-4.png";

import heroBgPatterns from "../public/assets/images/home-hero-bg-patterns.png";
import logoBgPattern from "../public/assets/images/logo-large-bg-patterns.svg";
import homeSecondSectionImage from "../public/assets/images/home-second-sec-image.jpg";

import servicesWebDevIcon from "../public/assets/images/web-development-icon.svg";
import servicesCloudSolutionsIcon from "../public/assets/images/cloud-solutions-icon.svg";
import servicesITConsultingIcon from "../public/assets/images/it-consulting-icon.svg";

import boostSpeedCertifiedExpertsIcon from "../public/assets/images/boost-speed-certified-experts.svg";
import boostSpeedSupportIcon from "../public/assets/images/boost-speed-support.svg";
import boostSpeedScalableSolutionsIcon from "../public/assets/images/boost-speed-scalable-solutions.svg";
import boostSpeedScalingTowardsSuccessIcon from "../public/assets/images/boost-speed-scaling-towards-success.svg";

import smartSolutionsImage1 from "../public/assets/images/smart-solutions-image-1.jpg";
import smartSolutionsImage2 from "../public/assets/images/smart-solutions-image-2.jpg";
import smartSolutionsImage3 from "../public/assets/images/smart-solutions-image-3.jpg";

import smartSolutionsIcon1 from "../public/assets/images/smart-solutions-icon-1.svg";
import smartSolutionsIcon2 from "../public/assets/images/smart-solutions-icon-2.svg";
import smartSolutionsIcon3 from "../public/assets/images/smart-solutions-icon-3.svg";

import bigBrandLogo1 from "../public/assets/images/big-brands-logo-1.png";
import bigBrandLogo2 from "../public/assets/images/big-brands-logo-2.png";
import bigBrandLogo3 from "../public/assets/images/big-brands-logo-3.png";
import bigBrandLogo4 from "../public/assets/images/big-brands-logo-4.png";
import bigBrandLogo5 from "../public/assets/images/big-brands-logo-5.png";
import bigBrandLogo6 from "../public/assets/images/big-brands-logo-6.png";

import successStories1 from "../public/assets/images/success-stories-img-1.jpg";
import successStories2 from "../public/assets/images/success-stories-img-2.jpg";
import successStories3 from "../public/assets/images/success-stories-img-3.jpg";

import './Home.scss';

const Home: React.FC = () => (
  <div className="smartway-tech-home">
    <section className='home-hero-sec-wrap'>
      <div className='container'>
        <div className='row mx-md-0 align-items-center'>
          <div className='col-12 col-lg-6 order-lg-2'>
            <div className='hero-section-right-img-wrap' data-aos="zoom-in">
              <div className='row'>
                <div className='col-6 p-1'>
                  <div className='hero-section-img-shape-1'>
                    <Image src={heroImage1} className="w-100" alt="Hero" />
                  </div>
                </div>
                <div className='col-6 p-1'>
                  <div className='hero-section-img-shape-2'>
                    <Image src={heroImage2} className="w-100" alt="Hero" />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6 p-1'>
                  <div className='hero-section-img-shape-3'>
                    <Image src={heroImage3} className="w-100" alt="Hero" />
                  </div>
                </div>
                <div className='col-6 p-1'>
                  <div className='hero-section-img-shape-4'>
                    <Image src={heroImage4} className="w-100" alt="Hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 order-lg-1 position-relative' data-aos="zoom-in">
            <div className='hero-bg-round-pattern fa-spin'>
              <Image src={heroBgPatterns} alt="Pattern" />
            </div>
            <div className='row'>
              <div className='col-12 pb-4'>
                <span className="badge badge-numbers b-midnight-100 mb-0">
                  <div className="badge-inner-num">
                    <i className="fas fa-circle badge-left-round"></i>
                    <span className="badge-num-text">From Thought to Impact</span>
                  </div>
                </span>
              </div>
            </div>
            <div className='smartway-tech-hero-section' data-aos="fade-up">
              <h1 className='hero-sec-heading fw-extrabold'>Transforming Ideas <br /> Into Intelligent <br /> Technology</h1>
              <p className='hero-sec-peragraph'>At Smartway Technoway, we turn innovation into impact. As the technology arm of the Smartway Group, we create smart, scalable, and secure digital solutions that help businesses grow faster in a connected world. From AI and automation to cloud architecture and enterprise software — we design systems that empower you to lead the future.</p>
              <div className='pt-3'>
                <Link href='' className='btn btn-primary'>Explore Technoway</Link>
                <Link href='' className='btn btn-outline-primary'>Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-second-sec-wrap'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-6 home-sec-padding'>
            <div className='card card-xxxl __radius-tl-150 __radius-br-150' data-aos="fade-up">
              <Image src={homeSecondSectionImage} className="w-100 img-h-500 object-cover" alt="Section" />
              <div className='powerfull-server-inner-card'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='wifi-signal-wrap'>
                      <svg className="wifi-signal" width="30" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9439 19.9441C17.7345 19.9441 15.9438 21.7354 15.9438 23.9448C15.9438 26.1542 17.7351 27.9455 19.9439 27.9455C22.1527 27.9455 23.9439 26.1542 23.9439 23.9448C23.9439 21.7354 22.2064 19.9441 19.9439 19.9441ZM20.0001 9.94392C15.6094 9.94392 11.3812 11.544 8.09366 14.4459C7.26865 15.2315 7.1874 16.494 7.91866 17.3253C8.65617 18.1503 9.91869 18.2316 10.7437 17.5003C13.3 15.244 16.5876 14.0002 20.0001 14.0002C23.4127 14.0002 26.7065 15.2428 29.2565 17.5003C29.6378 17.8378 30.1128 18.0003 30.5816 18.0003C30.8652 18.0005 31.1457 17.9404 31.4043 17.8239C31.6629 17.7074 31.8938 17.5373 32.0816 17.3247C32.8128 16.494 32.7378 15.2315 31.9066 14.5003C28.619 11.6002 24.3939 9.94392 20.0001 9.94392ZM39.388 7.79389C34.1441 2.76755 27.2627 0 20.0001 0C12.7375 0 5.8555 2.76755 0.615031 7.79389C-0.181858 8.55952 -0.207484 9.82517 0.556405 10.6221C1.32017 11.4208 2.58581 11.4421 3.38458 10.6807C7.81866 6.31886 13.775 4.00007 20.0001 4.00007C26.2252 4.00007 32.0691 6.37324 36.6129 10.6814C37.0067 11.0502 37.5004 11.2377 38.0004 11.2377C38.5258 11.2377 39.0511 11.0326 39.4436 10.6224C40.2067 9.82517 40.1817 8.5064 39.388 7.79389Z" fill="#265CAA" />
                      </svg>
                    </div>
                  </div>
                  <div className='col'>
                    <h5>About Smartway Technoway</h5>
                    <p className='mb-0'>Next-Gen Server Solutions for Modern IT Demands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 ps-xl-5 pb-3'>
            <div className='' data-aos="fade-up">
              <h2 className='heading-xxxl'>A Smartway Initiative Powering Tomorrow's Technology</h2>
              <div className='col-xl-12 pb-3'>
                <p className='peragraph-style-1'>Smartway Technoway Pvt Ltd is a division of the Smartway Group — India's leading conglomerate of innovation spanning pharmaceuticals, wellness, exports, and technology. We blend business intelligence with digital engineering to deliver customized solutions for organizations of every scale. Our mission is simple — to empower industries through tech that simplifies, accelerates, and inspires growth.</p>
                <ul>
                  <li className='peragraph-style-1 mb-1'>•	End-to-End IT & Digital Solutions</li>
                  <li className='peragraph-style-1 mb-1'>•	AI, Automation & Analytics Expertise</li>
                  <li className='peragraph-style-1 mb-1'>•	Cloud-Native and Secure Architectures</li>
                  <li className='peragraph-style-1 mb-1'>•	24*7 Dedicated Support</li>
                </ul>
              </div>
              <Link href='' className='btn btn-primary'>Discover Our Story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-next-level-solution-wrap home-sec-pattern-right pt-5 pt-lg-0'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Building Smart Solutions for a Digital World</h2>
          </div>
          <div className='col-lg-5 col-xl-4'>
            <p className="peragraph-style-1">From concept to execution, Smartway Technoway offers a comprehensive suite of technology services designed to make your business future-ready.</p>
          </div>
        </div>
        <div className='row pb-100'>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src={servicesWebDevIcon} alt="Icon" />
                </div>
                <h2 className='heading-lg'>Software & Web Development</h2>
                <p className='peragraph-style-1'>Custom enterprise applications and responsive web solutions crafted to deliver seamless performance and superior UX.</p>
                <div className='d-inline-block'>
                  <Link href='' className='btn btn-link d-flex align-items-center'>View All Services <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src={servicesCloudSolutionsIcon} alt="Icon" />
                </div>
                <h2 className='heading-lg'>AI & Automation Solutions</h2>
                <p className='peragraph-style-1'>Transform operations with data-driven intelligence, predictive analytics, and workflow automation that maximizes efficiency.</p>
                <div className='d-inline-block'>
                  <Link href='' className='btn btn-link d-flex align-items-center'>View All Services <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3'>
            <div className='card card-xxl h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
              <div className='card-body card-pad-50'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src={servicesITConsultingIcon} alt="Icon" />
                </div>
                <h2 className='heading-lg'>Cloud Infrastructure & Security</h2>
                <p className='peragraph-style-1'>Scalable and secure cloud deployments that optimize cost and enhance resilience — from migration to management.</p>
                <div className='d-inline-block'>
                  <Link href='' className='btn btn-link d-flex align-items-center'>View All Services <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-boost-hosting-speed-wrap home-sec-pattern-left'>
      <div className='logo-bg-pattern-left'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Innovation Driven by Integrity and Impact</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">What sets us apart is not just technology — it's our approach. We listen, collaborate, and co-create solutions that fit your business goals while adapting to the speed of change. From strategic planning to hands-on execution, our team ensures precision, security, and scalability at every step.</p>
          </div>
        </div>
        <div className='row pb-100'>
          <div className='col-md-6 col-xl-3 my-3'>
            <div className='card card-xl __radius-tl-50 __radius-br-50 h-100' data-aos="fade-up">
              <div className='card-head-pattern'>
                <div className='card-head-pattern-line'></div>
                <div className='card-head-pattern-cricle'></div>
              </div>
              <div className='card-body card-pad-20'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='card-icn-wrap icn-bg-gray icn-43 __radius-tl-150 __radius-br-150 __radius-tr-150'>
                      <Image src={boostSpeedCertifiedExpertsIcon} alt="Icon" />
                    </div>
                  </div>
                  <div className='col ps-0'>
                    <h4 className='heading-md my-2'>Certified Experts</h4>
                    <p className='peragraph-style-2 mb-0'>Backed by the trust of the Smartway Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-3 my-3'>
            <div className='card card-xl __radius-tl-50 __radius-br-50 h-100' data-aos="fade-up">
              <div className='card-head-pattern'>
                <div className='card-head-pattern-line'></div>
                <div className='card-head-pattern-cricle'></div>
              </div>
              <div className='card-body card-pad-20'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='card-icn-wrap icn-bg-gray icn-43 __radius-tl-150 __radius-br-150 __radius-tr-150'>
                      <Image src={boostSpeedSupportIcon} alt="Icon" />
                    </div>
                  </div>
                  <div className='col ps-0'>
                    <h4 className='heading-md my-2'>24/7 Support</h4>
                    <p className='peragraph-style-2 mb-0'>Experienced team of certified developers & engineers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-3 my-3'>
            <div className='card card-xl __radius-tl-50 __radius-br-50 h-100' data-aos="fade-up">
              <div className='card-head-pattern'>
                <div className='card-head-pattern-line'></div>
                <div className='card-head-pattern-cricle'></div>
              </div>
              <div className='card-body card-pad-20'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='card-icn-wrap icn-bg-gray icn-43 __radius-tl-150 __radius-br-150 __radius-tr-150'>
                      <Image src={boostSpeedScalableSolutionsIcon} alt="Icon" />
                    </div>
                  </div>
                  <div className='col ps-0'>
                    <h4 className='heading-md my-2'>Scalable Solutions</h4>
                    <p className='peragraph-style-2 mb-0'>Agile and transparent project management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-3 my-3'>
            <div className='card card-xl __radius-tl-50 __radius-br-50 h-100' data-aos="fade-up">
              <div className='card-head-pattern'>
                <div className='card-head-pattern-line'></div>
                <div className='card-head-pattern-cricle'></div>
              </div>
              <div className='card-body card-pad-20'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='card-icn-wrap icn-bg-gray icn-43 __radius-tl-150 __radius-br-150 __radius-tr-150'>
                      <Image src={boostSpeedScalingTowardsSuccessIcon} alt="Icon" />
                    </div>
                  </div>
                  <div className='col ps-0'>
                    <h4 className='heading-md my-2'>Scaling Towards Success</h4>
                    <p className='peragraph-style-2 mb-0'>Global delivery capability with local support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-smart-solutions-business-wrap'>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Transforming Challenges into Success Stories</h2>
          </div>
          <div className='col-lg-5 col-xl-4'>
            <p className="peragraph-style-1">We provide intelligent IT solutions tailored to meet the unique challenges of every business. From startups to large enterprises, our technology-driven</p>
          </div>
        </div>
        <div className='row pb-100'>
          <div className='col-md-6 col-xl-4 my-3 position-relative  __card-parent-hover-blue'>
            <div data-aos="fade-up">
              <div className='card card-xl __radius-tr-50 __radius-bl-50'>
                <div className='smart-solutions-card-img'>
                  <Image src={smartSolutionsImage1} className="w-100 object-cover img-h-250" alt="Solution" />
                </div>
              </div>
              <div className='icn-bg-blue card-icn-wrap icn-80 smart-solutions-img-icon '>
                <Image src={smartSolutionsIcon1} className="img-fluid" alt="Icon" />
              </div>
              <div className='card card-xl __hover-blue __radius-tr-70 __radius-bl-70 mt-3'>
                <div className='card-body card-pad-40'>
                  <h2 className='heading-xl mb-4'>AI-Powered Sales Automation for Pharma Distribution </h2>
                  <p className='peragraph-style-1'>Improved order accuracy by 38% and reduced manual tasks by 70%.</p>
                  <div className='d-inline-block'>
                    <Link href='' className='btn btn-primary d-flex align-items-center'>View All Projects <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3 position-relative  __card-parent-hover-blue'>
            <div data-aos="fade-up">
              <div className='card card-xl __radius-tr-50 __radius-bl-50'>
                <div className='smart-solutions-card-img'>
                  <Image src={smartSolutionsImage2} className="w-100 object-cover img-h-250" alt="Solution" />
                </div>
              </div>
              <div className='icn-bg-blue card-icn-wrap icn-80 smart-solutions-img-icon '>
                <Image src={smartSolutionsIcon2} className="img-fluid" alt="Icon" />
              </div>
              <div className='card card-xl __hover-blue __radius-tr-70 __radius-bl-70 mt-3'>
                <div className='card-body card-pad-40'>
                  <h2 className='heading-xl mb-4'>Cloud Migration for Healthcare Client </h2>
                  <p className='peragraph-style-1'>Delivered faster deployment and 30% infrastructure cost savings.</p>
                  <div className='d-inline-block'>
                    <Link href='' className='btn btn-primary d-flex align-items-center'>View All Projects <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-xl-4 my-3 position-relative  __card-parent-hover-blue'>
            <div data-aos="fade-up">
              <div className='card card-xl __radius-tr-50 __radius-bl-50'>
                <div className='smart-solutions-card-img'>
                  <Image src={smartSolutionsImage3} className="w-100 object-cover img-h-250" alt="Solution" />
                </div>
              </div>
              <div className='icn-bg-blue card-icn-wrap icn-80 smart-solutions-img-icon '>
                <Image src={smartSolutionsIcon3} className="img-fluid" alt="Icon" />
              </div>
              <div className='card card-xl __hover-blue __radius-tr-70 __radius-bl-70 mt-3'>
                <div className='card-body card-pad-40'>
                  <h2 className='heading-xl mb-4'>Smart Portal Development for Smartway Wellness</h2>
                  <p className='peragraph-style-1'>Integrated 360° analytics and secure data flow across India's network.</p>
                  <div className='d-inline-block'>
                    <Link href='' className='btn btn-primary d-flex align-items-center'>View All Projects <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-big-brands-wrap'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='heading-xxxl mb-5 text-center' data-aos="fade-up">1300+ Big brands trust us</h2>
          </div>
          <div className='col-12'>
            <div data-aos="fade-up">
              <Swiper className='swiper-free-mode-wrap'
                rewind={true}
                modules={[Autoplay]}
                spaceBetween={0}
                speed={10000}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                breakpoints={{
                  300: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 4,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 5,
                    centeredSlides: false,
                  },
                  1440: {
                    slidesPerView: 6,
                    centeredSlides: false,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo1} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo2} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo3} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo4} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo5} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo6} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo1} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo2} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo3} alt="Brand" />
                </SwiperSlide>
                <SwiperSlide className="big-brands-logo-img">
                  <Image src={bigBrandLogo4} alt="Brand" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='pt-100'>
      <SuccessStoriesSection />
    </div>

    <section className='home-build-together-wrap home-sec-pattern-right'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Success Stories from Our Partners</h2>
          </div>
          <div className='col-lg-5 col-xl-4'>
            <p className="peragraph-style-1">Blog! Here, we share expert advice, industry trends, actionable tips, and case studies that can help you </p>
          </div>
        </div>
        <div className='row pb-100 pt-4'>
          <div className='col-12'>
            <div data-aos="fade-up">
              <Swiper
                rewind={true}
                modules={[Autoplay]}
                spaceBetween={24}
                speed={6000}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                  1024: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                  1200: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                  1440: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories1} className="w-100 object-cover img-h-300" alt="Success Story" />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>The Top 5 Business Strategies for 2026</h2>
                        <p className='peragraph-style-1'>Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>
                        <div className='d-inline-block'>
                          <Link href='' className='btn btn-primary d-flex align-items-center'>Read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories2} className="w-100 object-cover img-h-300" alt="Success Story" />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>Unlocking Your Business's Potential</h2>
                        <p className='peragraph-style-1'>Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>
                        <div className='d-inline-block'>
                          <Link href='' className='btn btn-primary d-flex align-items-center'>Read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories3} className="w-100 object-cover img-h-300" alt="Success Story" />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>Project Management Best Practices</h2>
                        <p className='peragraph-style-1'>Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>
                        <div className='d-inline-block'>
                          <Link href='' className='btn btn-primary d-flex align-items-center'>Read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories1} className="w-100 object-cover img-h-300" alt="Success Story" />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>The Top 5 Business Strategies for 2026</h2>
                        <p className='peragraph-style-1'>Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>
                        <div className='d-inline-block'>
                          <Link href='' className='btn btn-primary d-flex align-items-center'>Read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden'>
      <div className='logo-bg-pattern-left'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <FormContentSection />
    </section>
  </div>
);

export default Home;