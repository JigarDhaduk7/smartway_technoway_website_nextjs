'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import './Footer.scss';

import logo from "@/public/assets/images/smartwaytechnoway-logo.png";
// import logoBgPattern from "@/assets/images/logo-large-bg-patterns.svg";

// import itStrategyIcon from "@/assets/images/it-strategy-icon.svg";
// import workforceIcon from "@/assets/images/workforce-icon.svg";

import getInTouchIcon1 from "@/public/assets/images/get-in-touch-icon-1.svg";
import getInTouchIcon2 from "@/public/assets/images/get-in-touch-icon-2.svg";
import getInTouchIcon3 from "@/public/assets/images/get-in-touch-icon-3.svg";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="footer-sec-wrap">
        <div className="container">
          <div className="row justify-content-between pb-4">
            {/* LOGO */}
            <div className="col-lg-4">
              <div className="row">
                <div className="col-12">
                  <div className="footer-logo">
                    <Image src={logo} alt="Logo" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12">
                  <p>
                    Fore is a modern and professional Elementor template kit
                    designed for tech companies, IT services, and digital solution
                    providers.
                  </p>
                  <p>Fore - Smartway Technoway</p>
                </div>
              </div>
            </div>

            {/* LINKS */}
            <div className="col-lg-7">
              <div className="row justify-content-between">
                {/* COMPANY */}
                <div className="col-auto">
                  <div className="footer-links-col">
                    <h6 className="fw-bold my-4">Company</h6>
                    <ul>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Home</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/about" className="footer-list-link">About Us</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/career" className="footer-list-link">Career</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/services" className="footer-list-link">Services</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/projects" className="footer-list-link">Projects</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/blogs" className="footer-list-link">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SERVICES */}
                <div className="col-auto">
                  <div className="footer-links-col">
                    <h6 className="fw-bold my-4">Services</h6>
                    <ul>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Web Development</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Software Development</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Cloud Solutions</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">IT Consulting</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">AI & Automation</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* RESOURCES */}
                <div className="col-auto">
                  <div className="footer-links-col">
                    <h6 className="fw-bold my-4">Resources</h6>
                    <ul>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Pricing Plans</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">FAQs</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Help Center</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Documentation</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/" className="footer-list-link">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SUBSCRIBE + CONTACT */}
          <div className="row justify-content-between">
            {/* SUBSCRIBE */}
            <div className="col-lg-4">
              <h6 className="fw-bold mb-3">Subscribe Now</h6>
              <div className="row align-items-center">
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg-primary py-4"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* GET IN TOUCH */}
            <div className="col-lg-7">
              <h6 className="fw-bold mt-4">Get in Touch</h6>

              <div className="row">
                <div className="col-md-4 col-lg-6 col-xl-4 py-2">
                  <div className="d-flex align-items-start">
                    <Image src={getInTouchIcon1} className="mt-1" alt="Address" width={25} />
                    <p className="mb-0 ps-2">
                      Times Square Grand Sindhubhuvan, Main, Road, Ahmedabad, Gujarat 380059
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-lg-6 col-xl-4 py-2">
                  <div className="d-flex">
                    <Image src={getInTouchIcon2} alt="Phone" width={25} />
                    <p className="mb-0 ps-2">
                      <a href="tel:+079-69209901/02" className="footer-list-link">+079-69209901/02</a>
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-lg-6 col-xl-4 py-2">
                  <div className="d-flex">
                    <Image src={getInTouchIcon3} alt="Email" width={25} />
                    <p className="mb-0 ps-2">
                      <a href="mailto:info@smartwaytechnoway.com" className="footer-list-link">info@smartwaytechnoway.com</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
      <div className="footer-copyrigh">
        © 2025 Smartway Technoway Pvt Ltd | A Smartway Group Company | From Thought to Impact
      </div>

      {/* BACK TO TOP BUTTON */}
      <a
        href="#"
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#265CAA ${scrollPercent}%, #768EA4 ${scrollPercent}%)`,
        }}
        aria-label="Back to Top"
      >
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z" fill="white" />
        </svg>
      </a>

    </div>
  );
};

export default Footer;
