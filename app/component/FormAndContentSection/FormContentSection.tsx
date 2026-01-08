'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { submitData } from '../../../lib/api';
import './FormContentSection.scss';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';
import itStrategyIcon from '@/public/assets/images/it-strategy-icon.svg';
import workforceIcon from '@/public/assets/images/workforce-icon.svg';

const FormContentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitData('contacts/create', formData);
      toast.success('Message sent successfully!', {
        style: {
          background: '#265CAA',
          color: '#fff',
          fontWeight: '600'
        }
      });
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        style: {
          background: '#dc3545',
          color: '#fff',
          fontWeight: '600'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
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
                  <form onSubmit={handleSubmit}>
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
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            required
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
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label mb-1 text-white">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
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
                              type="tel"
                              className="form-control"
                              placeholder="00000 00000"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary text-secondary bg-white fw-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>

                    </div>
                  </form>
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
    </>
  );
};

export default FormContentSection;
