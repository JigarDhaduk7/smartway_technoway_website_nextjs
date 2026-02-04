import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Smartway Technoway Case Studies | Proven Digital Transformation Success Stories',
  description: "Explore Smartway Technoway's success stories — from AI automation and cloud migrations to enterprise software solutions. Discover how we help organizations transform ideas into measurable impact.",
  keywords: 'Smartway Technoway projects, IT case studies, digital transformation success, AI automation projects, cloud migration company, software development results',
  openGraph: {
    title: 'Smartway Technoway Case Studies | Proven Digital Transformation Success Stories',
    description: "Explore Smartway Technoway's success stories — from AI automation and cloud migrations to enterprise software solutions. Discover how we help organizations transform ideas into measurable impact.",
    type: 'website',
  },
};

import OurCompanyValuesSection from '../component/OurCompanyValuesSection/OurCompanyValuesSection';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/our-work-banner-image.jpg';

import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import smartSolutionsImage1 from '@/public/assets/images/smart-solutions-image-1.jpg';
import smartSolutionsImage2 from '@/public/assets/images/smart-solutions-image-2.jpg';
import smartSolutionsImage3 from '@/public/assets/images/smart-solutions-image-3.jpg';
import smartSolutionsImage4 from '@/public/assets/images/smart-solutions-image-4.jpg';
import smartSolutionsImage5 from '@/public/assets/images/smart-solutions-image-5.jpg';
import smartSolutionsImage6 from '@/public/assets/images/smart-solutions-image-6.jpg';

import smartSolutionsIcon1 from '@/public/assets/images/smart-solutions-icon-1.svg';
import smartSolutionsIcon2 from '@/public/assets/images/smart-solutions-icon-2.svg';
import smartSolutionsIcon3 from '@/public/assets/images/smart-solutions-icon-3.svg';
import smartSolutionsIcon4 from '@/public/assets/images/smart-solutions-icon-4.svg';
import smartSolutionsIcon5 from '@/public/assets/images/smart-solutions-icon-5.svg';
import smartSolutionsIcon6 from '@/public/assets/images/smart-solutions-icon-6.svg';

import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className="smartway-tech-about-us">

      {/* HERO SECTION */}
      <section className="inner-hero-sec-wrap">
        <div className="inner-hero-banner">
          <Image src={innerHeroBannerImage} alt="Our Work Banner" className="w-100" />
        </div>

        <div className="inner-hero-sec-top-text">
          <div className="container">
            <div className="row">
              <div className="col-12 inner-hero-sec-txt">
                <h2 className="fw-semibold">Our Work</h2>

                <ul className="d-flex justify-content-center">
                  <li>
                    <Link href="/" className="nav-list-link">Home</Link> / &nbsp;
                  </li>
                  <li>Projects</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="our-work-tabs-wrap pt-5" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs nav-our-work-tab" role="tablist">
                <li className="nav-item col" role="presentation">
                  <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button" role="tab">ALL</button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="it-software-development-tab" data-bs-toggle="tab" data-bs-target="#it-software-development-tab-pane" type="button" role="tab">
                    IT & Software Development
                  </button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="web-digital-solutions-tab" data-bs-toggle="tab" data-bs-target="#web-digital-solutions-tab-pane" type="button" role="tab">
                    Web & Digital Solutions
                  </button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="mobile-cross-platform-solutions-tab" data-bs-toggle="tab" data-bs-target="#mobile-cross-platform-solutions-tab-pane" type="button" role="tab">
                    Mobile & Cross-Platform Solutions
                  </button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="cloud-infrastructure-tab" data-bs-toggle="tab" data-bs-target="#cloud-infrastructure-tab-pane" type="button" role="tab">
                    Cloud & Infrastructure
                  </button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="ai-data-emerging-tech-tab" data-bs-toggle="tab" data-bs-target="#ai-data-emerging-tech-tab-pane" type="button" role="tab">
                    AI, Data & Emerging Tech
                  </button>
                </li>

                <li className="nav-item col" role="presentation">
                  <button className="nav-link" id="email-marketing-tab" data-bs-toggle="tab" data-bs-target="#email-marketing-tab-pane" type="button" role="tab">
                    Email Marketing
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SMART SOLUTIONS SECTION */}
      <section className="home-smart-solutions-business-wrap pt-100">
        <div className="container">

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 col-xl-6">
              <h2 className="heading-xxxl mb-3" data-aos="fade-up">
                From Thought to Impact — Proven Through Results
              </h2>
            </div>

            <div className="col-lg-5 col-xl-5">
              <p className="peragraph-style-1" data-aos="fade-up">
                Every project we deliver begins with a vision and ends with measurable success. Here's how Smartway Technoway has helped organizations reimagine what's possible through intelligent, scalable, and secure digital solutions.
              </p>
            </div>
          </div>

          <div className="row">

            {/* CARD TEMPLATE (repeated) */}
            {[
              { img: smartSolutionsImage1, icon: smartSolutionsIcon1, title: "Cloud Migration for a Retail Company", text: "We helped a mid-sized retail business migrate their entire infrastructure to the cloud, improving scalability, reducing costs" },
              { img: smartSolutionsImage2, icon: smartSolutionsIcon2, title: "Cybersecurity Upgrade for a Financial Firm", text: "A financial services company trusted us to strengthen their data security. We implemented advanced threat detection" },
              { img: smartSolutionsImage3, icon: smartSolutionsIcon3, title: "Custom Software Development", text: "A fully customized software platform designed to simplify complex operations." },
              { img: smartSolutionsImage4, icon: smartSolutionsIcon4, title: "AI, Machine Learning & Data Analytics", text: "A next-generation analytics platform delivering deep visual insights using ML." },
              { img: smartSolutionsImage5, icon: smartSolutionsIcon5, title: "Enterprise, SaaS & Business Solutions", text: "A robust business integration system connecting legacy systems with cloud platforms." },
              { img: smartSolutionsImage6, icon: smartSolutionsIcon6, title: "Industry-Specific Solutions", text: "A complete healthcare management solution for records, appointments & billing." }
            ].map((item, idx) => (
              <div key={idx} className="col-md-6 col-xl-4 my-3 position-relative __card-parent-hover-blue">
                <div data-aos="fade-up">

                  <div className="card card-xl __radius-tr-50 __radius-bl-50">
                    <div className="smart-solutions-card-img">
                      <Image src={item.img} alt={item.title} className="w-100 object-cover img-h-250" />
                    </div>
                  </div>

                  <div className="icn-bg-blue card-icn-wrap icn-80 smart-solutions-img-icon">
                    <Image src={item.icon} alt="Icon" className="img-fluid" />
                  </div>

                  <div className="card card-xl __hover-blue __radius-tr-70 __radius-bl-70 mt-3">
                    <div className="card-body card-pad-40">
                      <h2 className="heading-xl mb-4">{item.title}</h2>
                      <p className="peragraph-style-1">{item.text}</p>

                      <div className="d-inline-block">
                        <a href="" className="btn btn-primary d-flex align-items-center">
                          Learn more <i className="far fa-long-arrow-right font-18 ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="company-values-wrap home-sec-pattern-right py-100">
        <div className="logo-bg-pattern-right">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>

        <OurCompanyValuesSection />
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-sec-wrap home-sec-pattern-left overflow-hidden">
        <div className="logo-bg-pattern-left">
          <Image src={logoBgPattern} alt="" className="w-100" data-aos="fade-up" />
        </div>

        <FormContentSection />
      </section>

    </div>
  );
};

export default Projects;
