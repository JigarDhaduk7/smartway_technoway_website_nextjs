'use client';

import React from 'react';
import Image from 'next/image';
import './FormContentSection.scss';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';
import itStrategyIcon from '@/public/assets/images/it-strategy-icon.svg';
import workforceIcon from '@/public/assets/images/workforce-icon.svg';

const FormContentSection: React.FC = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">

        {/* FORM */}
        <div className="col-lg-6 pb-5">
          <div
            className="card card-xl card-blue __radius-tl-70 __radius-br-70"
            data-aos="fade-up"
          >
            <div className="card-body card-pad-40">
              <div className="row">

                <div className="col-12 py-4">
                  <span className="badge badge-numbers b-midnight-100 mb-0">
                    <div className="badge-inner-num">
                      <i className="fas fa-circle badge-left-round"></i>
                      <span className="badge-num-text">Form</span>
                    </div>
                  </span>
                </div>

                <div className="col-12">
                  <h5 className="heading-md text-white">Send us Message</h5>
                </div>

                <div className="col-12">
                  <div className="row">

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label mb-1 text-white">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label mb-1 text-white">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label mb-1 text-white">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="form-label mb-1 text-white">
                          Phone
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text">+91</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="00000 00000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-2">
                      <a
                        href=""
                        className="btn btn-primary text-secondary bg-white fw-bold"
                      >
                        Send Message
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="col-lg-6 ps-xl-5 pb-3">
          <div className="row">

            <div className="col-12">
              <h2 className="heading-xxxl" data-aos="fade-up">
                Let&apos;s Build Something Great Together
              </h2>
              <div className="col-xl-9">
                <p className="peragraph-style-1" data-aos="fade-up">
                  Were here to answer your questions, discuss your ideas,
                  and help you find the right IT solutions for your business.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="row">

                <div className="col-md-6 pt-4 pt-md-5">
                  <div data-aos="fade-up">
                    <div className="row">
                      <div className="col-auto">
                        <div className="icn-bg-blue card-icn-wrap icn-70 card card-xxl __radius-br-110 __radius-tr-110 __radius-bl-110">
                          <Image
                            src={itStrategyIcon}
                            alt="IT Strategy"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h5 className="heading-md mb-2">IT Strategy</h5>
                        <p className="peragraph-style-1 lh-base">
                          Plan your digital future with expert guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 pt-4 pt-md-5">
                  <div data-aos="fade-up">
                    <div className="row">
                      <div className="col-auto">
                        <div className="icn-bg-blue card-icn-wrap icn-70 card card-xxl __radius-br-110 __radius-tr-110 __radius-bl-110">
                          <Image
                            src={workforceIcon}
                            alt="Workforce"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h5 className="heading-md mb-2">Workforce</h5>
                        <p className="peragraph-style-1 lh-base">
                          Empower your teams to work securely
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FormContentSection;
