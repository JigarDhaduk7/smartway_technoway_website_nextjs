import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import innerHeroBannerImage from '@/public/assets/images/privacy-policy-image.png';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smartway Technoway',
  description: 'Learn how Smartway Technoway collects, uses, and protects your personal and business data, including your rights to access, modify, or delete your information.',
  keywords: 'Smartway Technoway privacy policy, data protection, information security, data rights',
  openGraph: {
    title: 'Privacy Policy | Smartway Technoway',
    description: 'Learn how Smartway Technoway collects, uses, and protects your personal and business data, including your rights to access, modify, or delete your information.',
    type: 'website',
  },
};

const PrivacyPolicy: React.FC = () => (

  <div className='smartway-tech-privacy-policy'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="Privacy Policy Banner" className="w-100" />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>Privacy Policy</h2>
              <ul className='d-flex justify-content-center'>
                <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                <li> Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='privacy-policy-sec-wrap py-100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>

            <h2 className="heading-xxxl mb-2">Your Privacy Matters</h2>
            <p className="peragraph-style-1 fst-italic mb-4">Last updated: October 2026</p>
            <p className="peragraph-style-1">At <b>Smartway Technoway</b>, we respect your privacy and are committed to protecting the personal and business data you share with us.</p>

            <ul className='peragraph-style-1'>
              <li className='mb-3'>• <b>Information We Collect:</b> We collect business contact details, inquiry forms, and project specifications submitted directly through our website or communication channels.</li>
              <li className='mb-3'>• <b>How We Use Information:</b> Data is strictly used to communicate regarding services, manage projects, provide IT support, and improve our website experience. We <b>never</b> sell, rent, or trade your data to third parties.</li>
              <li className='mb-3'>• <b>Data Security:</b> We implement industry-standard encryption, secure servers (hosted via reliable cloud providers like Hostinger and Cloudflare), and strict internal access controls to safeguard your information.</li>
              <li className='mb-0'>• <b>Your Rights:</b> You may request access, modification, or complete deletion of your personal data at any time by contacting us at <a href="mailto:info@smartwaytechnoway.com" className="footer-list-link">info@smartwaytechnoway.com</a>.</li>
            </ul>

          </div>
        </div>
      </div>
    </section>

  </div>

);

export default PrivacyPolicy;
