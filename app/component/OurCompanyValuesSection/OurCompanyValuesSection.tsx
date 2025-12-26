'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';     // <- correct place for the Autoplay module
import 'swiper/css';
import 'swiper/css/autoplay'

import './OurCompanyValuesSection.scss';

import companyValuesInnovationIcon from "../../../public/assets/images/company-values-innovation-icon.svg";
import companyValuesCollaborationIcon from "../../../public/assets/images/company-values-collaboration-icon.svg";
import companyValuesIntegrityIcon from "../../../public/assets/images/company-values-integrity-icon.svg";
import Image from 'next/image';

const OurCompanyValuesSection = () => (

  <div className='container'>
    <div className='row align-items-center justify-content-between' data-aos="fade-up">
      <div className='col-lg-7 col-xl-6'>
        <h2 className="heading-xxxl mb-3">Our company values</h2>
      </div>
      <div className='col-lg-5 col-xl-4'>
        <p className="peragraph-style-1">Rooted in collaboration and purpose, these core values guide how we work, grow, and connect-with our team, our partners, and every project we bring to life.</p>
      </div>
    </div>
    <div className='row pt-4'>
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

            centeredSlides={true} // default for mobile

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
              <div className="card card-xl card-gray __hover-blue __radius-tr-70 __radius-bl-70 h-100">
                <div className="card-body card-pad-40">
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={companyValuesInnovationIcon} alt="Icon" />
                  </div>
                  <h2 className='heading-lg'>Innovation</h2>
                  <p className='peragraph-style-1'>We believe in pushing boundaries, exploring the unknown, and embracing change to create solutions that redefine what's possible.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='h-auto'>
              <div className="card card-xl card-gray __hover-blue __radius-tr-70 __radius-bl-70 h-100">
                <div className="card-body card-pad-40">
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={companyValuesCollaborationIcon} alt="Icon" />
                  </div>
                  <h2 className='heading-lg'>Collaboration</h2>
                  <p className='peragraph-style-1'>Our diverse team brings together talents, ideas, and perspectives, fostering an environment where collaboration is the heartbeat of our creativity.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='h-auto'>
              <div className="card card-xl card-gray __hover-blue __radius-tr-70 __radius-bl-70 h-100">
                <div className="card-body card-pad-40">
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={companyValuesIntegrityIcon} alt="Icon" />
                  </div>
                  <h2 className='heading-lg'>Integrity</h2>
                  <p className='peragraph-style-1'>Our diverse team brings together talents, ideas, and perspectives, fostering an environment where collaboration is the heartbeat of our creativity.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='h-auto'>
              <div className="card card-xl card-gray __hover-blue __radius-tr-70 __radius-bl-70 h-100">
                <div className="card-body card-pad-40">
                  <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                    <Image src={companyValuesCollaborationIcon} alt="Icon" />
                  </div>
                  <h2 className='heading-lg'>Collaboration</h2>
                  <p className='peragraph-style-1'>Our diverse team brings together talents, ideas, and perspectives, fostering an environment where collaboration is the heartbeat of our creativity.</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  </div>

);

export default OurCompanyValuesSection;
