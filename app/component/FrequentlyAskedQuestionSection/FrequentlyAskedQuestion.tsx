'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import './FrequentlyAskedQuestion.scss';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';
import aboutUsSecondSectionImage from '@/public/assets/images/faq-image.jpg';

const FrequentlyAskedQuestion: React.FC = () => {
  return (
    <div className="container">
      <div className="row">

        {/* LEFT SIDE FAQ */}
        <div className="col-lg-6" data-aos="fade-up">
          <h2 className="heading-xxxl mb-3">
            The Technoway Culture
          </h2>

          {/* <p className="peragraph-style-1" data-aos="fade-up">
            Where Curiosity Meets Creativity
          </p> */}

          <div className="col-12">
            <div className="accordion accordion-card accordion-gray-card" id="DefaultAccordionsWrap">

              {/* FAQ 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#defaultaccordion1"
                    aria-expanded="true"
                    aria-controls="defaultaccordion1"
                  >
                    Where Curiosity Meets Creativity
                  </button>
                </h2>

                <div
                  id="defaultaccordion1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#DefaultAccordionsWrap"
                >
                  <div className="accordion-body">
                    <p className="mb-2">
                      Our culture celebrates curiosity, collaboration, and continuous learning. <br />
                      We bring together thinkers, developers, designers, and dreamers who share one purpose — to make technology meaningful. <br />
                      Every member of our team contributes to building products and solutions that not only meet goals but also inspire progress. <br />
                    </p>
                    <ul>
                      <li>•	Collaborative, agile, and idea-driven work environment</li>
                      <li>•	Encouragement of innovation and experimentation</li>
                      <li>•	Training and mentorship programs for continuous upskilling</li>
                      <li>•	A shared belief in building “Technology for Good”</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#defaultaccordion2"
                    aria-expanded="false"
                    aria-controls="defaultaccordion2"
                  >
                    Expanding Horizons, One Innovation at a Time
                  </button>
                </h2>

                <div
                  id="defaultaccordion2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#DefaultAccordionsWrap"
                >
                  <div className="accordion-body">
                    <p className="mb-3">
                      Headquartered in Ahmedabad, with operations extending across India, Smartway Technoway partners with enterprises globally to deliver high-impact IT solutions. <br />
                      From strategic consulting to full-stack development, our footprint continues to expand in healthcare, manufacturing, retail, and technology sectors worldwide.
                    </p>
                    <Link href='' className='btn btn-link d-flex align-items-center'>Partner With Us <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#defaultaccordion3"
                    aria-expanded="false"
                    aria-controls="defaultaccordion3"
                  >
                    Let's Build the Future of Technology — Together
                  </button>
                </h2>

                <div
                  id="defaultaccordion3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#DefaultAccordionsWrap"
                >
                  <div className="accordion-body">
                    <p className="mb-3">
                      We're here to collaborate, innovate, and accelerate your business growth through smart, scalable digital solutions. <br />
                      Join us in creating technology that turns thoughts into lasting impact.
                    </p>
                    <Link href='' className='btn btn-link d-flex align-items-center'>Contact Technoway <i className="far fa-long-arrow-right font-18 ms-2"></i></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-lg-6">
          <div className="card card-xxxl __radius-tl-150 __radius-br-150" data-aos="fade-up">
            <Image
              src={aboutUsSecondSectionImage}
              alt="FAQ Section Image"
              className="w-100 img-h-500 object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
