'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import './SuccessStoriesSection.scss';

const SuccessStoriesSection: React.FC = () => (
  <section className="home-success-stories-wrap pb-100">
    <div className="container">

      <div
        className="row align-items-center justify-content-between"
        data-aos="fade-up"
      >
        <div className="col-lg-7 col-xl-6">
          <h2 className="heading-xxxl mb-3">
            Success Stories from Our Partners
          </h2>
        </div>
        <div className="col-lg-5 col-xl-4">
          <p className="peragraph-style-1">
            Discover how businesses across industries have achieved growth and
            efficiency with our IT solutions. These success stories highlight
            the real impact
          </p>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-12">
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
              onSlideChange={() => {}}
              onSwiper={() => {}}
            >

              {/* SLIDE 1 */}
              <SwiperSlide className="h-auto">
                <div className="card card-xl card-gray __hover-blue __radius-tl-50 __radius-br-50 h-100">
                  <div className="card-body card-pad-30">
                    <div className="rating-start-wrap">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="peragraph-style-2 mb-4">
                      Nexus transformed our IT infrastructure and made our
                      operations far more efficient.
                    </p>
                    <h6 className="fw-extrabold mb-1">Michael Anderson</h6>
                    <small>CEO at BrightWave</small>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 2 */}
              <SwiperSlide className="h-auto">
                <div className="card card-xl card-gray __hover-blue __radius-tl-50 __radius-br-50 h-100">
                  <div className="card-body card-pad-30">
                    <div className="rating-start-wrap">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="peragraph-style-2 mb-4">
                      Nexus transformed our IT infrastructure...
                    </p>
                    <h6 className="fw-extrabold mb-1">Sophia Martinez</h6>
                    <small>Operations Manager</small>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 3 */}
              <SwiperSlide className="h-auto">
                <div className="card card-xl card-gray __hover-blue __radius-tl-50 __radius-br-50 h-100">
                  <div className="card-body card-pad-30">
                    <div className="rating-start-wrap">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="peragraph-style-2 mb-4">
                      Nexus transformed our IT infrastructure...
                    </p>
                    <h6 className="fw-extrabold mb-1">Daniel Wong</h6>
                    <small>Founder of HealthPlus</small>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 4 */}
              <SwiperSlide className="h-auto">
                <div className="card card-xl card-gray __hover-blue __radius-tl-50 __radius-br-50 h-100">
                  <div className="card-body card-pad-30">
                    <div className="rating-start-wrap">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="peragraph-style-2 mb-4">
                      Nexus transformed our IT infrastructure...
                    </p>
                    <h6 className="fw-extrabold mb-1">Michael Anderson</h6>
                    <small>CEO at BrightWave</small>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SuccessStoriesSection;
