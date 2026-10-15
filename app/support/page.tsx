import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/help-center-support-banner.png';
import logoBgPattern from '@/public/assets/images/logo-large-bg-patterns.svg';

import itConsultingIcon from '@/public/assets/images/it-consulting-icon.svg';
import powerfullServerIcon from '@/public/assets/images/powerfull-server-icon.svg';

export const metadata: Metadata = {
  title: 'Help Center & Support | Client Support & Maintenance Portal - Smartway Technoway',
  description: "Need technical assistance, bug fixes, or server maintenance? Reach Smartway Technoway's support desk via email or client portal ticketing, backed by clear SLA response times.",
  keywords: 'Smartway Technoway support, help center, client support portal, maintenance SLA, bug fix support, server down response, IT support ticket',
  openGraph: {
    title: 'Help Center & Support | Client Support & Maintenance Portal - Smartway Technoway',
    description: "Need technical assistance, bug fixes, or server maintenance? Reach Smartway Technoway's support desk via email or client portal ticketing, backed by clear SLA response times.",
    type: 'website',
  },
};

const Support: React.FC = () => (

  <div className='smartway-tech-support'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="Help Center & Support Banner" className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Help Center & Support</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='support-intro-wrap pt-100'>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Client Support & Maintenance Portal</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">We don't just build solutions; we ensure they run smoothly around the clock. If you are an existing client needing technical assistance, bug fixes, or server maintenance, our support desk is here.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='support-sec-wrap pb-100'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-6 my-3'>
            <div className='card card-xl card-gray h-100 __radius-tr-70 __radius-bl-70' data-aos="fade-up">
              <div className='card-body card-pad-40'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src={itConsultingIcon} alt="How to Reach Support Icon" />
                </div>
                <h2 className='heading-lg mb-3'>How to Reach Support</h2>
                <ul className='peragraph-style-1'>
                  <li className='mb-2'>• <b>Email Support:</b> Send tickets directly to <a href="mailto:info@smartwaytechnoway.com" className="footer-list-link">info@smartwaytechnoway.com</a> for tracking.</li>
                  <li>• <b>Client Portal / Ticketing:</b> Log into your dedicated project workspace to raise tickets with priority tags (Critical, High, Normal, Low).</li>
                </ul>
                <div className="d-inline-block mt-2">
                  <a href="mailto:info@smartwaytechnoway.com" className="btn btn-primary d-flex align-items-center">Email Support</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 my-3'>
            <div className='card card-xl card-gray h-100 __radius-tr-70 __radius-bl-70' data-aos="fade-up">
              <div className='card-body card-pad-40'>
                <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                  <Image src={powerfullServerIcon} alt="Support SLAs Icon" />
                </div>
                <h2 className='heading-lg mb-3'>Support Service Level Agreements (SLAs)</h2>
                <ul className='peragraph-style-1'>
                  <li className='mb-2'>• <i><b>Critical Bug / Server Down:</b></i> Response within 1 hour.</li>
                  <li>• <i><b>Standard Maintenance / Updates:</b></i> Response within 12–24 hours.</li>
                </ul>
              </div>
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
            <h2 className='fw-bold'>Need Help Right Now?</h2>
            <p>Our support desk is ready around the clock — reach out and we'll have you back on track in no time.</p>
            <div className="d-inline-block">
              <a href="mailto:info@smartwaytechnoway.com" className="btn btn-primary d-flex align-items-center">Email Support</a>
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

export default Support;
