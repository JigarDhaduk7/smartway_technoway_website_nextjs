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

        <section className='company-values-wrap home-sec-pattern-right py-100'>
            <div className='container'>
                <div className='row align-items-center justify-content-between' data-aos="fade-up">
                    <div className='col-lg-7 col-xl-6'>
                        <h2 className="heading-xxxl mb-3">Let's find you an open position.</h2>
                    </div>
                    <div className='col-lg-5 col-xl-4'>
                        <p className="peragraph-style-1">Explore a curated list of opportunities tailored to your skills, interests, and career goals—helping you move confidently toward your next big role.</p>
                    </div>
                </div>
                <div className='row pt-4'>
                    <div className='col-12' data-aos="fade-up">
                        <div className="accordion accordion-card career-accordion" id="DefaultAccordionsWrap">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button font-14 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion1" aria-expanded="true" aria-controls="defaultaccordion1">
                                        <div className='col-auto'>
                                            <div className='text-secondary fw-semibold mb-1'>UX Designer</div>
                                            <div className='text-primary-emphasis fw-normal'>Surat, Gujarat</div>
                                        </div>
                                        <div className='col'>
                                            <div className='row mx-0 justify-content-end'>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Job Type: </span>
                                                    <span className='fw-semibold'>Onsite/Remote</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Experience: </span>
                                                    <span className='fw-semibold'>1-3 Year</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>No. Of Opening: </span>
                                                    <span className='fw-semibold'>03</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="defaultaccordion1" className="accordion-collapse collapse show" data-bs-parent="#DefaultAccordionsWrap">
                                    <div className="accordion-body">
                                        <div className='bg-white'>
                                            <div className='row mx-0 py-3'>
                                                <div className='col-12 px-4 border-bottom mb-4'>
                                                    <p>We're looking for a UX Researcher to help craft the future of our market-leading digital product suite. This is an amazing opportunity to work in a highly collaborative role and requires a creative thinker, a helpful mentor, a team player, and a skilled communicator - all rolled into one!</p>
                                                    <p>We're a team of lifelong learners. We're equal parts left and right brained. And we're generally likeable. We won't bore you with more adjectives. See for yourself. We're a global team with a philosophy of encouraging passionate people to be fun and creative. With offices in Melbourne, Oakland, and Berlin we benefit from bringing together the experiences and viewpoints of a wide range of talented people from around the world. We believe a diverse workplace is a healthy workplace.</p>
                                                </div>
                                                <div className='col-12 px-4'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Required Skills</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Passionate about user-centred design and accessibility.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have at least 2 years of experience working as a UX researcher.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have an excellent practical understanding of research methodologies and have strong documentation, communication and presentation skills with an ability to effectively input into design critiques.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Ability to work on multiple, simultaneous projects of all sizes and complexity.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience with user-centred design methodologies and integrating research in to agile workflows.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience in planning and conducting a range of research methods including contextual enquiry, depth interviews, diary studies, remote usability testing, creating/facilitating workshops, and others as required.</p>
                                                        </div>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Roles and Responsibilities</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Flexible working hours and the opportunity to work from home</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Continual training and learning, conference attendance, and in-house mentoring opportunities</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Health and wellness programs like yoga, a running club, a fresh towel service and quiet spaces</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> A fully stocked kitchen, with enough food to make delicious lunch every day, including an industrial-strength coffee machine, free snacks and weekly catered lunches</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> An active social club, with events for you and your family</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Paid parental leave</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end mt-4 mb-1'>
                                            <div className='d-inline-block'>
                                                <a href="" className="btn btn-primary btn-lg d-flex align-items-center"><i className="fas fa-envelope font-18 me-2"></i> Apply Now </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button font-14 pe-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion2" aria-expanded="false" aria-controls="defaultaccordion2">
                                        <div className='col-auto'>
                                            <div className='text-secondary fw-semibold mb-1'>UX Designer</div>
                                            <div className='text-primary-emphasis fw-normal'>Surat, Gujarat</div>
                                        </div>
                                        <div className='col'>
                                            <div className='row mx-0 justify-content-end'>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Job Type: </span>
                                                    <span className='fw-semibold'>Onsite/Remote</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Experience: </span>
                                                    <span className='fw-semibold'>1-3 Year</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>No. Of Opening: </span>
                                                    <span className='fw-semibold'>03</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="defaultaccordion2" className="accordion-collapse collapse" data-bs-parent="#DefaultAccordionsWrap">
                                    <div className="accordion-body">
                                        <div className='bg-white'>
                                            <div className='row mx-0 py-3'>
                                                <div className='col-12 px-4 border-bottom mb-4'>
                                                    <p>We're looking for a UX Researcher to help craft the future of our market-leading digital product suite. This is an amazing opportunity to work in a highly collaborative role and requires a creative thinker, a helpful mentor, a team player, and a skilled communicator - all rolled into one!</p>
                                                    <p>We're a team of lifelong learners. We're equal parts left and right brained. And we're generally likeable. We won't bore you with more adjectives. See for yourself. We're a global team with a philosophy of encouraging passionate people to be fun and creative. With offices in Melbourne, Oakland, and Berlin we benefit from bringing together the experiences and viewpoints of a wide range of talented people from around the world. We believe a diverse workplace is a healthy workplace.</p>
                                                </div>
                                                <div className='col-12 px-4'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Required Skills</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Passionate about user-centred design and accessibility.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have at least 2 years of experience working as a UX researcher.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have an excellent practical understanding of research methodologies and have strong documentation, communication and presentation skills with an ability to effectively input into design critiques.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Ability to work on multiple, simultaneous projects of all sizes and complexity.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience with user-centred design methodologies and integrating research in to agile workflows.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience in planning and conducting a range of research methods including contextual enquiry, depth interviews, diary studies, remote usability testing, creating/facilitating workshops, and others as required.</p>
                                                        </div>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Roles and Responsibilities</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Flexible working hours and the opportunity to work from home</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Continual training and learning, conference attendance, and in-house mentoring opportunities</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Health and wellness programs like yoga, a running club, a fresh towel service and quiet spaces</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> A fully stocked kitchen, with enough food to make delicious lunch every day, including an industrial-strength coffee machine, free snacks and weekly catered lunches</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> An active social club, with events for you and your family</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Paid parental leave</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end mt-4 mb-1'>
                                            <div className='d-inline-block'>
                                                <a href="" className="btn btn-primary btn-lg d-flex align-items-center"><i className="fas fa-envelope font-18 me-2"></i> Apply Now </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button font-14  pe-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#defaultaccordion3" aria-expanded="false" aria-controls="defaultaccordion3">
                                        <div className='col-auto'>
                                            <div className='text-secondary fw-semibold mb-1'>UX Designer</div>
                                            <div className='text-primary-emphasis fw-normal'>Surat, Gujarat</div>
                                        </div>
                                        <div className='col'>
                                            <div className='row mx-0 justify-content-end'>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Job Type: </span>
                                                    <span className='fw-semibold'>Onsite/Remote</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>Experience: </span>
                                                    <span className='fw-semibold'>1-3 Year</span>
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='text-secondary fw-semibold mb-1'>No. Of Opening: </span>
                                                    <span className='fw-semibold'>03</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="defaultaccordion3" className="accordion-collapse collapse" data-bs-parent="#DefaultAccordionsWrap">
                                    <div className="accordion-body">
                                        <div className='bg-white'>
                                            <div className='row mx-0 py-3'>
                                                <div className='col-12 px-4 border-bottom mb-4'>
                                                    <p>We're looking for a UX Researcher to help craft the future of our market-leading digital product suite. This is an amazing opportunity to work in a highly collaborative role and requires a creative thinker, a helpful mentor, a team player, and a skilled communicator - all rolled into one!</p>
                                                    <p>We're a team of lifelong learners. We're equal parts left and right brained. And we're generally likeable. We won't bore you with more adjectives. See for yourself. We're a global team with a philosophy of encouraging passionate people to be fun and creative. With offices in Melbourne, Oakland, and Berlin we benefit from bringing together the experiences and viewpoints of a wide range of talented people from around the world. We believe a diverse workplace is a healthy workplace.</p>
                                                </div>
                                                <div className='col-12 px-4'>
                                                    <div className='row justify-content-between'>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Required Skills</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Passionate about user-centred design and accessibility.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have at least 2 years of experience working as a UX researcher.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> You have an excellent practical understanding of research methodologies and have strong documentation, communication and presentation skills with an ability to effectively input into design critiques.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Ability to work on multiple, simultaneous projects of all sizes and complexity.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience with user-centred design methodologies and integrating research in to agile workflows.</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Experience in planning and conducting a range of research methods including contextual enquiry, depth interviews, diary studies, remote usability testing, creating/facilitating workshops, and others as required.</p>
                                                        </div>
                                                        <div className='col-xl-6 col-xxl-5 mb-3'>
                                                            <h5 className="heading-sm fw-bold text-primary mb-3">Roles and Responsibilities</h5>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Flexible working hours and the opportunity to work from home</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Continual training and learning, conference attendance, and in-house mentoring opportunities</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Health and wellness programs like yoga, a running club, a fresh towel service and quiet spaces</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> A fully stocked kitchen, with enough food to make delicious lunch every day, including an industrial-strength coffee machine, free snacks and weekly catered lunches</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> An active social club, with events for you and your family</p>
                                                            <p className="peragraph-style-1 list-sty-arrow"><i className="far fa-angle-double-right text-secondary me-2"></i> Paid parental leave</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-end mt-4 mb-1'>
                                            <div className='d-inline-block'>
                                                <a href="" className="btn btn-primary btn-lg d-flex align-items-center"><i className="fas fa-envelope font-18 me-2"></i> Apply Now </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
