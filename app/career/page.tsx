import { Metadata } from 'next';
import React from 'react';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import SuccessStoriesSection from '../component/SuccessStoriesSection/SuccessStoriesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';
import OurTeams from '../component/OurTeams/OurTeams';
import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import logoBgPattern from "../../public/assets/images/logo-large-bg-patterns.svg";

import innerHeroBannerImage from "../../public/assets/images/career-banner-image.jpg";

import aboutUsSecondSectionImage from "../../public/assets/images/end-to-end-solutions-section-image.jpg";
import ourVisionImage from "../../public/assets/images/our-vision-image.jpg";
import ourMissionImage from "../../public/assets/images/our-mission-image.jpg";

import ourVisionIcon from "../../public/assets/images/our-vision-icon.svg";
import ourMissionIcon from "../../public/assets/images/our-mission-icon.svg";

import './Career.scss';
import Image from 'next/image';
import Link from 'next/link';
import FindYouAnOpenPosition from '../component/findyouanopenposition/findyouanopenposition';

export const metadata: Metadata = {
  title: 'Careers - Join Smartway Technoway | IT Jobs & Opportunities',
  description: 'Explore exciting career opportunities at Smartway Technoway. Join our dynamic team of IT professionals and grow your career in web development, software engineering, and digital solutions.',
  keywords: 'careers smartway technoway, IT jobs, software developer jobs, web developer careers, technology jobs, remote work opportunities, UX designer jobs, programming careers',
  openGraph: {
    title: 'Careers - Join Smartway Technoway | IT Jobs & Opportunities',
    description: 'Discover rewarding career opportunities at Smartway Technoway. Join our innovative team and advance your career in technology.',
    type: 'website',
  },
};

const Career = () => (

    <div className='smartway-tech-about-us'>

        <section className="inner-hero-sec-wrap">
            <div className='inner-hero-banner'>
                <Image src={innerHeroBannerImage} className="w-100" alt='' />
            </div>
            <div className='inner-hero-sec-top-text'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 inner-hero-sec-txt'>
                            <h2 className='fw-semibold'>Career</h2>
                            <ul className='d-flex justify-content-center'>
                                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                                <li> Career</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='company-values-wrap home-sec-pattern-right py-100'>
            <div className='logo-bg-pattern-right'>
                <Image src={logoBgPattern} className="w-100" alt='' data-aos="fade-up" />
            </div>
            <OurCompanyValuesSection />
        </section>

        <FindYouAnOpenPosition/>

        <div className='ready-for-project-wrap home-sec-pattern-right home-sec-pattern-left'>
            <div className='logo-bg-pattern-right'>
                <Image src={logoBgPattern} className="w-100" alt='' data-aos="fade-up" />
            </div>
            <div className="logo-bg-pattern-left">
                <Image src={logoBgPattern} className="w-100" alt='' data-aos="fade-up" />
            </div>
            <div className='container ready-for-project-container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className='fw-bold'>Come to Join Us!</h2>
                        <p>From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                        <div className="d-inline-block">
                            <a href="" className="btn btn-primary d-flex align-items-center">See Current Opening</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className='py-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label className='form-label mb-1'>Full name *</label>
                            <input type='text' className='form-control bg-body-tertiary' placeholder='Enter Your Name' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label className='form-label mb-1'>Contact email *</label>
                            <input type='text' className='form-control bg-body-tertiary' placeholder='you@example.com' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label className='form-label mb-1'>Subject *</label>
                            <input type='text' className='form-control bg-body-tertiary' placeholder='UI Designer' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label className='form-label mb-1'>Resume *</label>
                            <input className="form-control bg-body-tertiary" type="file" />
                            <button className='btn btn-primary btn-md resume-file-btn'><i className="far fa-file-pdf font-14 me-2"></i> Choose</button>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label mb-1'>Tell us a bit about you *</label>
                            <textarea className='form-control h-auto bg-body-tertiary' rows={5} placeholder='Let us know'></textarea>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className='peragraph-style-1'>By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                    </div>
                    <div className='col-12 mt-2'>
                        <div className='d-inline-block'>
                            <a href="" className="btn btn-primary btn-lg d-flex align-items-center rounded-3"><i className="fas fa-envelope font-18 me-2"></i> Apply Now </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

);

export default Career;
