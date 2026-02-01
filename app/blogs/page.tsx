import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../../lib/api';

export const metadata: Metadata = {
  title: 'Smartway Technoway Insights | AI, Automation, and Digital Transformation Blog',
  description: "Stay ahead with Smartway Technoway's latest insights on AI, cloud, and enterprise innovation. Explore expert articles, success stories, and trends shaping the future of technology — From Thought to Impact.",
  keywords: 'Smartway Technoway blog, AI trends, cloud solutions India, automation insights, technology blog, digital transformation articles',
  openGraph: {
    title: "Stay ahead with Smartway Technoway's latest insights on AI, cloud, and enterprise innovation. Explore expert articles, success stories, and trends shaping the future of technology — From Thought to Impact.",
    description: 'Stay updated with latest technology trends and expert insights on web development, cloud solutions, and digital transformation.',
    type: 'website',
  },
};

import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import logoBgPattern from '../../public/assets/images/logo-large-bg-patterns.svg';
import innerHeroBannerImage from '../../public/assets/images/blog-categorie-banner-image.jpg';
import blogRecentPostImage1 from '../../public/assets/images/recent-post-img-1.jpg';
import blogRecentPostImage2 from '../../public/assets/images/recent-post-img-2.jpg';
import blogRecentPostImage3 from '../../public/assets/images/recent-post-img-3.jpg';
import blogRecentPostImage4 from '../../public/assets/images/recent-post-img-4.jpg';
import blogRecentPostImage5 from '../../public/assets/images/recent-post-img-5.jpg';

import './Blogs.scss';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
}

const Blogs: React.FC = async () => {
  let blogs: Blog[] = [];
  let recentBlogs: Blog[] = [];

  try {
    const response = await getData('blogs');
    blogs = response.data.filter((blog: Blog) => blog.isPublished);
    recentBlogs = blogs.slice(-5).reverse(); // Last 5 blogs, most recent first
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
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
              <h2 className="heading-xxxl mb-3">Technoway Insights — Where Innovation Meets Intelligence</h2>
            </div>

            <div className="col-lg-5 col-xl-5">
              <p className="peragraph-style-1">
                Knowledge is the foundation of progress. <br />
                Explore the latest ideas, trends, and stories driving the digital future — curated by the thinkers and innovators at Smartway Technoway.
              </p>
            </div>
          </div>

          <div className="row">

            {/* MAIN BLOGS */}
            <div className="col-xl-8">
              <div className="blog-categorie-wrap">
                <div className="row">

                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <div key={blog._id} className="col-12 py-4" data-aos="fade-up">
                        <div className="blog-categorie-img-main">
                          <div className="card card-xl __radius-tl-70 __radius-br-70">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              className="blog-categorie-img object-cover img-h-400 w-100"
                              width={400}
                              height={400}
                            />
                          </div>

                          <div className="blog-categorie-content">
                            <h4 className="fw-semibold">{blog.title}</h4>

                            <div
                              className="peragraph-style-1"
                              dangerouslySetInnerHTML={{
                                __html: blog.content.substring(0, 150) + '...'
                              }}
                            />

                            <div className="row justify-content-between">
                              <div className="col-auto">
                                <Link href={`/blogs/${blog.slug}`} className="btn btn-primary">Learn More</Link>
                              </div>

                              <div className="col-auto opacity-75">
                                <i className="far fa-calendar-alt opacity-75 me-2" />
                                <span className="fw-medium">{new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 py-4 text-center">
                      <p>No published blogs available.</p>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-xl-4" data-aos="fade-up">
              <div className="recent-post-sticky-part-wrap">
                <div className="recent-post-sticky-inner">

                  <h5 className="fw-bold my-3">Recent Post</h5>

                  {/* Loop recent posts */}
                  {recentBlogs.length > 0 ? (
                    recentBlogs.map((blog) => (
                      <div key={blog._id} className="recent-post-item">
                        <Link href={`/blogs/${blog.slug}`} className="text-primary">
                          <div className="row mx-0">
                            <div className="col-auto ps-0">
                              <div className="rp-col-img-main">
                                <Image
                                  src={blog.image}
                                  alt={blog.title}
                                  className="rp-col-imgs"
                                  width={80}
                                  height={80}
                                />
                              </div>
                            </div>

                            <div className="col pr-0 pe-col-content">
                              <h6 className="fw-bold mb-1">{blog.title}</h6>
                              <p className="mb-0 opacity-75">{new Date(blog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No recent posts available.</p>
                  )}

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
