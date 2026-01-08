import { Metadata } from 'next';
import React from 'react';

import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from "../../public/assets/images/contact-us-banner-image.jpg";

import logoBgPattern from "../../public/assets/images/logo-large-bg-patterns.svg";

import './ContactUs.scss';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Smartway Technoway | Get in Touch for IT Solutions',
  description: 'Contact Smartway Technoway for expert IT consulting, web development, and digital transformation services. Get a free consultation and discuss your project requirements with our team.',
  keywords: 'contact smartway technoway, IT consulting contact, web development inquiry, digital solutions consultation, technology support contact, project discussion',
  openGraph: {
    title: 'Contact Us - Smartway Technoway | Get in Touch for IT Solutions',
    description: 'Ready to transform your business with innovative IT solutions? Contact our expert team for a free consultation and project discussion.',
    type: 'website',
  },
};

const ContactUs = () => (

  <div className='smartway-tech-contact-us'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image alt='' src={innerHeroBannerImage} className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Contact Us</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden pt-100'>
      <div className='logo-bg-pattern-left'>
        <img src={logoBgPattern} className="w-100" data-aos="fade-up" />
      </div>
      <FormContentSection />
    </section>

    <section className='contact-us-map-wrap'>
      <div className='contact-us-map-inner'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.51986617957!2d72.49547297603681!3d23.04139491562416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6f07953149%3A0x6a1b12ea875ea352!2sSMARTWAY%20WELLNESS%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1764607720843!5m2!1sen!2sin" className='w-100 img-h-500'></iframe>
      </div>
    </section>

    <div className='ready-for-project-wrap home-sec-pattern-right home-sec-pattern-left'>
      <div className='logo-bg-pattern-right'>
        <img src={logoBgPattern} className="w-100" data-aos="fade-up" />
      </div>
      <div className="logo-bg-pattern-left">
        <img src={logoBgPattern} className="w-100" data-aos="fade-up" />
      </div>
      <div className='container ready-for-project-container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='fw-bold'>We're Ready for a Challenging Project</h2>
            <p>Send us your brief and tell your project too. We are ready to help all you need</p>
            <div className="d-inline-block">
              <a href="" className="btn btn-primary d-flex align-items-center">Let's Discuss it!</a>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

);

export default ContactUs;
