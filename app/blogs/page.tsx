'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import logoBgPattern from '../../public/assets/images/logo-large-bg-patterns.svg';

import innerHeroBannerImage from '../../public/assets/images/blog-categorie-banner-image.jpg';
import blogCategorieImage1 from '../../public/assets/images/blog-categorie-image-1.jpg';
import blogCategorieImage2 from '../../public/assets/images/blog-categorie-image-2.jpg';
import blogCategorieImage3 from '../../public/assets/images/blog-categorie-image-3.jpg';

import blogRecentPostImage1 from '../../public/assets/images/recent-post-img-1.jpg';
import blogRecentPostImage2 from '../../public/assets/images/recent-post-img-2.jpg';
import blogRecentPostImage3 from '../../public/assets/images/recent-post-img-3.jpg';
import blogRecentPostImage4 from '../../public/assets/images/recent-post-img-4.jpg';
import blogRecentPostImage5 from '../../public/assets/images/recent-post-img-5.jpg';

import './Blogs.scss';

const Blogs: React.FC = () => {
  return (
    <div className="smartway-blog-categories">

      {/* HERO BANNER */}
      <section className="inner-hero-sec-wrap">
        <div className="inner-hero-banner">
          <Image src={innerHeroBannerImage} alt="Banner" className="w-100" />
        </div>

        <div className="inner-hero-sec-top-text">
          <div className="container">
            <div className="row">
              <div className="col-12 inner-hero-sec-txt">
                <h2 className="fw-semibold">Blogs</h2>

                <ul className="d-flex justify-content-center">
                  <li>
                    <Link href="/" className="nav-list-link">Home</Link> / &nbsp;
                  </li>
                  <li>Blogs</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="blog-categorie-sec py-100">
        <div className="container">

          {/* TITLE SECTION */}
          <div className="row align-items-center justify-content-between pb-2" data-aos="fade-up">
            <div className="col-lg-7 col-xl-6">
              <h2 className="heading-xxxl mb-3">Success Stories from Our Partners</h2>
            </div>

            <div className="col-lg-5 col-xl-4">
              <p className="peragraph-style-1">
                Blog! Here, we share expert advice, industry trends, actionable tips, and case studies that can help you 
              </p>
            </div>
          </div>

          <div className="row">

            {/* MAIN BLOGS */}
            <div className="col-xl-8">
              <div className="blog-categorie-wrap">
                <div className="row">

                  {/* BLOG ITEM 1 */}
                  <div className="col-12 py-4" data-aos="fade-up">
                    <div className="blog-categorie-img-main">
                      <div className="card card-xl __radius-tl-70 __radius-br-70">
                        <Image src={blogCategorieImage1} alt="Blog" className="blog-categorie-img object-cover img-h-400 w-100" />
                      </div>

                      <div className="blog-categorie-content">
                        <h4 className="fw-semibold">The Top 5 Business Strategies for 2026</h4>

                        <p className="peragraph-style-1">
                          Blog! Here, we share expert advice, industry trends, actionable tips, and case studies
                        </p>

                        <div className="row justify-content-between">
                          <div className="col-auto">
                            <Link href="/blog-details" className="btn btn-primary">Learn More</Link>
                          </div>

                          <div className="col-auto opacity-75">
                            <i className="far fa-calendar-alt opacity-75 me-2" />
                            <span className="fw-medium">12 Aug, 2025</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* BLOG ITEM 2 */}
                  <div className="col-12 py-4" data-aos="fade-up">
                    <div className="blog-categorie-img-main">
                      <div className="card card-xl __radius-tl-70 __radius-br-70">
                        <Image src={blogCategorieImage2} alt="Blog" className="blog-categorie-img object-cover img-h-400 w-100" />
                      </div>

                      <div className="blog-categorie-content">
                        <h4 className="fw-semibold">Unlocking Your Business's Potential</h4>

                        <p className="peragraph-style-1">Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>

                        <div className="row justify-content-between">
                          <div className="col-auto">
                            <Link href="/" className="btn btn-primary">Learn More</Link>
                          </div>

                          <div className="col-auto opacity-75">
                            <i className="far fa-calendar-alt opacity-75 me-2" />
                            <span className="fw-medium">12 Aug, 2025</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* BLOG ITEM 3 */}
                  <div className="col-12 py-4" data-aos="fade-up">
                    <div className="blog-categorie-img-main">
                      <div className="card card-xl __radius-tl-70 __radius-br-70">
                        <Image src={blogCategorieImage3} alt="Blog" className="blog-categorie-img object-cover img-h-400 w-100" />
                      </div>

                      <div className="blog-categorie-content">
                        <h4 className="fw-semibold">Unlocking Your Business's Potential</h4>

                        <p className="peragraph-style-1">Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>

                        <div className="row justify-content-between">
                          <div className="col-auto">
                            <Link href="/" className="btn btn-primary">Learn More</Link>
                          </div>

                          <div className="col-auto opacity-75">
                            <i className="far fa-calendar-alt opacity-75 me-2" />
                            <span className="fw-medium">12 Aug, 2025</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4" data-aos="fade-up">
              <div className="recent-post-sticky-part-wrap">
                <div className="recent-post-sticky-inner">

                  <h5 className="fw-bold my-3">Recent Post</h5>

                  {/* Loop recent posts */}
                  {[
                    blogRecentPostImage1,
                    blogRecentPostImage2,
                    blogRecentPostImage3,
                    blogRecentPostImage4,
                    blogRecentPostImage5
                  ].map((img, index) => (
                    <div key={index} className="recent-post-item">
                      <Link href="/" className="text-primary">
                        <div className="row mx-0">
                          <div className="col-auto ps-0">
                            <div className="rp-col-img-main">
                              <Image src={img} alt={`Recent ${index}`} className="rp-col-imgs" />
                            </div>
                          </div>

                          <div className="col pr-0 pe-col-content">
                            <h6 className="fw-bold mb-1">The Top 5 Business Strategies for 2026</h6>
                            <p className="mb-0 opacity-75">17 November 2025</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}

                </div>

                {/* CATEGORIES */}
                <div className="categories-part-wrap pb-1">
                  <h5 className="fw-bold my-3">Categories</h5>

                  {[
                    { title: 'Case Study', count: 1 },
                    { title: 'Office Managment', count: 2 },
                    { title: 'Website', count: 11 },
                    { title: 'Online Presence', count: 9 },
                    { title: 'Technology', count: 9 }
                  ].map((cat, i) => (
                    <div key={i} className="card card-gray mb-3 rounded-4">
                      <Link href="/" className="text-primary">
                        <div className="card-body px-3 py-2">
                          <div className="row align-items-center py-1">
                            <div className="col">
                              <h6 className="fw-semibold mb-0">
                                <i className="far fa-angle-double-right text-secondary me-2"></i>
                                {cat.title}
                              </h6>
                            </div>
                            <div className="col-auto">
                              <div className="fw-semibold">({cat.count})</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}

                </div>

                {/* TAGS */}
                <div className="tags-part-wrap">
                  <h5 className="fw-bold my-3">Tags</h5>

                  {[
                    'Mobile App Development',
                    'Project Management',
                    'Development and Design',
                    'Infrastructure and Operations',
                    'Security and Emerging Technologies'
                  ].map((tag, i) => (
                    <span key={i} className="badge badge-numbers b-blue-800 mb-2">{tag}</span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-sec-wrap home-sec-pattern-left overflow-hidden">
        <div className="logo-bg-pattern-left">
          <Image src={logoBgPattern} alt="Pattern" className="w-100" data-aos="fade-up" />
        </div>

        <FormContentSection />
      </section>

    </div>
  );
};

export default Blogs;
