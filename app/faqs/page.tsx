import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/faq-support-illustration.png';
import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

export const metadata: Metadata = {
  title: 'FAQs | Frequently Asked Questions - Smartway Technoway',
  description: 'Got questions about working with Smartway Technoway? Find answers on developer onboarding time, code quality & security, time zone coverage, and team communication.',
  keywords: 'Smartway Technoway FAQs, frequently asked questions, IT outsourcing FAQ, developer onboarding time, code security NDA, remote team communication',
  openGraph: {
    title: 'FAQs | Frequently Asked Questions - Smartway Technoway',
    description: 'Got questions about working with Smartway Technoway? Find answers on developer onboarding time, code quality & security, time zone coverage, and team communication.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How quickly can you onboard developers or a team?',
    answer: 'Typically, we can shortlist and onboard pre-vetted engineers within 48 to 72 hours depending on your required technology stack.',
  },
  {
    question: 'How do you ensure code quality and project security?',
    answer: "We follow rigorous code review practices, automated CI/CD pipelines, and secure coding standards. All code is backed by strict NDAs and intellectual property (IP) protection agreements assigned 100% to you.",
  },
  {
    question: 'What time zones do your development teams work in?',
    answer: 'Our teams operate flexibly to align with your business hours (overlapping by at least 4 hours daily for seamless daily standups and communication).',
  },
  {
    question: 'How do we communicate with the assigned team?',
    answer: "We integrate directly into your existing communication tools, whether that's Slack, Microsoft Teams, Jira, Trello, or WhatsApp, along with scheduled daily/weekly video syncs.",
  },
];

const Faqs: React.FC = () => (

  <div className='smartway-tech-faqs'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="FAQs Banner" className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>FAQs</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='faqs-intro-wrap pt-100'>
      <div className='container'>
        <div className='row justify-content-center text-center' data-aos="fade-up">
          <div className='col-lg-8'>
            <h2 className="heading-xxxl mb-3">Got Questions? We've Got Answers.</h2>
            <p className="peragraph-style-1">Everything you need to know about working with Smartway Technoway — from onboarding timelines to how we keep your code and IP secure.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='faqs-list-sec-wrap pb-100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>
            <div className="accordion accordion-card accordion-gray-card" id="FaqsPageAccordion" data-aos="fade-up">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.question}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faqsPageItem${index}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={`faqsPageItem${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faqsPageItem${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#FaqsPageAccordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <CompanySuccessHighlights />

    <div className='ready-for-project-wrap home-sec-pattern-right home-sec-pattern-left'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <div className="logo-bg-pattern-left">
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <div className='container ready-for-project-container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='fw-bold'>Still Have Questions?</h2>
            <p>Can't find the answer you're looking for? Our team is happy to walk you through anything — no obligation required.</p>
            <div className="d-inline-block">
              <Link href="/contactus" className="btn btn-primary d-flex align-items-center">Ask Us Directly</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden py-100'>
      <div className='logo-bg-pattern-left'>
        <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
      </div>
      <FormContentSection />
    </section>

  </div>

);

export default Faqs;
