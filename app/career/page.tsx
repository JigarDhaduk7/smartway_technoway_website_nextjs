'use client';

import React, { useState } from 'react';
import { submitFormData } from '../../lib/api';

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



const Career = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        about: '',
        resume: null as File | null
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                e.target.value = '';
                return;
            }
            console.log('File selected:', file.name, file.type, file.size);
            setFormData(prev => ({ ...prev, resume: file }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.resume) {
            setMessage('Please select a resume file');
            return;
        }
        
        setLoading(true);
        setMessage('');

        const formDataToSend = new FormData();
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('about', formData.about);
        formDataToSend.append('resume', formData.resume, formData.resume.name);

        try {
            const result = await submitFormData('job/apply', formDataToSend);
            if (result.success) {
                setMessage('Application submitted successfully!');
                setFormData({ fullName: '', email: '', subject: '', about: '', resume: null });
            } else {
                setMessage(result.message || 'Failed to submit application');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (

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

        <FindYouAnOpenPosition />

        <div id='ApplyForCareer' className='ready-for-project-wrap home-sec-pattern-right home-sec-pattern-left'>
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
                            <button
                                type='button'
                                onClick={() => {
                                    const element = document.getElementById('SeeCurrentOpening');
                                    const offset = 80;
                                    const elementPosition = element?.getBoundingClientRect().top || 0;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }}
                                className="btn btn-primary d-flex align-items-center"
                            >
                                See Current Opening
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className='py-100'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label mb-1'>Full name *</label>
                                <input type='text' name='fullName' value={formData.fullName} onChange={handleChange} className='form-control bg-body-tertiary' placeholder='Enter Your Name' required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label mb-1'>Contact email *</label>
                                <input type='email' name='email' value={formData.email} onChange={handleChange} className='form-control bg-body-tertiary' placeholder='you@example.com' required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label mb-1'>Subject *</label>
                                <input type='text' name='subject' value={formData.subject} onChange={handleChange} className='form-control bg-body-tertiary' placeholder='UI Designer' required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label mb-1'>Resume *</label>
                                <input className="form-control bg-body-tertiary" type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" required />
                                <button type='button' className='btn btn-primary btn-md resume-file-btn'><i className="far fa-file-pdf font-14 me-2"></i> Choose</button>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label mb-1'>Tell us a bit about you *</label>
                                <textarea name='about' value={formData.about} onChange={handleChange} className='form-control h-auto bg-body-tertiary' rows={5} placeholder='Let us know' required></textarea>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className='peragraph-style-1'>By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                        </div>
                        {message && <div className='col-12'><p className={message.includes('success') ? 'text-success' : 'text-danger'}>{message}</p></div>}
                        <div className='col-12 mt-2'>
                            <div className='d-inline-block'>
                                <button type='submit' disabled={loading} className="btn btn-primary btn-lg d-flex align-items-center rounded-3"><i className="fas fa-envelope font-18 me-2"></i> {loading ? 'Submitting...' : 'Apply Now'} </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    </div>
    );
};

export default Career;
