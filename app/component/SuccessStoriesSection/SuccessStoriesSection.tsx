'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { getData } from '../../../lib/api';

import 'swiper/css';
import 'swiper/css/autoplay';

import './SuccessStoriesSection.scss';

interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  message: string;
  rating: number;
}

const SuccessStoriesSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getData('testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="home-success-stories-wrap pb-100">
      <div className="container">

        <div
          className="row align-items-center justify-content-between"
          data-aos="fade-up"
        >
          <div className="col-lg-7 col-xl-6">
            <h2 className="heading-xxxl mb-3">
              Voices of Trust and Transformation
            </h2>
          </div>
          <div className="col-lg-5 col-xl-5">
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
              {loading ? (
                <div className="d-flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="card card-xl card-gray __radius-tl-50 __radius-br-50 flex-fill">
                      <div className="card-body card-pad-30">
                        <div className="placeholder-glow">
                          {/* <span className="placeholder col-4 mb-3"></span> */}
                          <span className="placeholder col-12 mb-2"></span>
                          <span className="placeholder col-12 mb-2"></span>
                          <span className="placeholder col-8 mb-4"></span>
                          <span className="placeholder col-6 mb-1"></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
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
                  onSlideChange={() => { }}
                  onSwiper={() => { }}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial._id} className="h-auto">
                      <div className="card card-xl card-gray __hover-blue __radius-tl-50 __radius-br-50 h-100">
                        <div className="card-body card-pad-30">
                          {/* <div className="rating-start-wrap">
                        {Array.from({ length: 5 }, (_, i) => {
                          const starValue = i + 1;
                          if (starValue <= Math.floor(testimonial.rating)) {
                            return <i key={i} className="fas fa-star"></i>;
                          } else if (starValue - 0.5 <= testimonial.rating) {
                            return <i key={i} className="fas fa-star-half-alt"></i>;
                          } else {
                            return <i key={i} className="far fa-star"></i>;
                          }
                        })}
                      </div> */}
                          <p className="peragraph-style-2 mb-4">
                            {testimonial.message}
                          </p>
                          <h6 className="fw-extrabold mb-0">{testimonial.name}</h6>
                          <small>{testimonial.designation}</small>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
