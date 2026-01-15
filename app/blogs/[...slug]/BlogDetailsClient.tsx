'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { getData, getById } from '../../../lib/api';
import 'swiper/css';
import 'swiper/css/autoplay';

import FrequentlyAskedQuestion from '../../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import FormContentSection from '../../component/FormAndContentSection/FormContentSection';
import logoBgPattern from "../../../public/assets/images/logo-large-bg-patterns.svg";
import innerHeroBannerImage from "../../../public/assets/images/blog-categorie-banner-image.jpg";

import './BlogDetails.scss';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
}

interface BlogDetailsClientProps {
  slug: string;
}

const BlogDetailsClient: React.FC<BlogDetailsClientProps> = ({ slug }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;
      
      try {
        const blogResponse = await getById('blogs', slug);
        setBlog(blogResponse.data);
        
        const allBlogsResponse = await getData('blogs');
        const publishedBlogs = allBlogsResponse.data.filter((b: Blog) => b.isPublished && b.slug !== slug);
        
        setRelatedBlogs(publishedBlogs.slice(0, 4));
        setRecentBlogs(publishedBlogs.slice(-5).reverse());
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-8">
            <div className="placeholder-glow">
              <span className="placeholder col-12 mb-3" style={{height: '400px'}}></span>
              <span className="placeholder col-8 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-12 mb-2"></span>
              <span className="placeholder col-10"></span>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="placeholder-glow">
              <span className="placeholder col-12 mb-3" style={{height: '60px'}}></span>
              <span className="placeholder col-12 mb-2" style={{height: '80px'}}></span>
              <span className="placeholder col-12 mb-2" style={{height: '80px'}}></span>
              <span className="placeholder col-12" style={{height: '80px'}}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div className="text-center py-5">Blog not found</div>;
  }

  return (
    <div className='smartway-blog-details'>
      <section className="inner-hero-sec-wrap">
        <div className='inner-hero-banner'>
          <Image src={innerHeroBannerImage} alt="Blog Details Banner" className="w-100" width={1200} height={600} />
        </div>
        <div className='inner-hero-sec-top-text'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 inner-hero-sec-txt'>
                <h2 className='fw-semibold'>{blog.title}</h2>
                <ul className='d-flex justify-content-center'>
                  <li><Link href="/" className='nav-list-link'>Home</Link> / &nbsp; </li>
                  <li> Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-categorie-sec py-100">
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='blog-categorie-wrap'>
                <div className='row'>
                  <div className='col-12 pb-4' data-aos="fade-up">
                    <div className='blog-categorie-img-main'>
                      <div className='card card-xl __radius-tl-70 __radius-br-70'>
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          className="blog-categorie-img object-cover img-h-400 w-100" 
                          width={600} 
                          height={400}
                          loading="lazy"
                        />
                      </div>
                      <div className='blog-categorie-content'>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4' data-aos="fade-up">
              <div className='recent-post-sticky-part-wrap'>
                <div className='categories-search-part bg-light px-4 py-3 rounded-3'>
                  <h5 className='fw-bold text-center my-3'>Search</h5>
                  <div className='form-group'>
                    <input type='text' className='form-control form-control-xl px-3 rounded-5' placeholder='Search' />
                  </div>
                </div>
                <div className='categories-contents-part pt-3'>
                  <h5 className='fw-bold my-3'>Contents </h5>
                  <div className='bg-light px-4 py-3 rounded-3'>
                    <div className='text-secondary'>1. 5 Project Ideas for Web Developers</div>
                    <div className='text-secondary ps-3'>1.1. 1. Personal Portfolio Site</div>
                    <div className='text-secondary'>2. To-Do List App</div>
                    <div className='text-secondary'>3. Weather Dashboard</div>
                    <div className='text-secondary'>4. Blog CMS (Content Management System)</div>
                    <div className='text-secondary'>5. Image to Text Converter</div>
                    <div className='text-secondary'>6. Final Thoughts</div>
                    <div className='text-secondary'>7. FAQ s</div>
                    <div className='text-secondary ps-3'>7.1. What is a personal portfolio website project?</div>
                    <div className='text-secondary ps-3'>7.2. How can I create a blog platform?</div>
                    <div className='text-secondary ps-3'>7.3. What is an e-commerce site project idea?</div>
                    <div className='text-secondary ps-3'>7.4. How about a weather app project?</div>
                    <div className='text-secondary ps-3'>7.5. Can I make a task manager app?</div>
                  </div>
                </div>
                <div className='recent-post-sticky-inner'>
                  <h5 className='fw-bold my-3'>Recent Post</h5>
                  {recentBlogs.map((recentBlog) => (
                    <div key={recentBlog._id} className='recent-post-item'>
                      <Link href={`/blogs/${recentBlog.slug}`} className='text-primary'>
                        <div className='row mx-0'>
                          <div className='col-auto ps-0'>
                            <div className='rp-col-img-main'>
                              <Image 
                                src={recentBlog.image} 
                                alt={recentBlog.title} 
                                className="rp-col-imgs" 
                                width={80} 
                                height={60}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className='col pr-0 pe-col-content'>
                            <h6 className='fw-bold mb-1'>{recentBlog.title}</h6>
                            <p className='mb-0 opacity-75'>{new Date(recentBlog.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className='categories-part-wrap pb-1'>
                  <h5 className='fw-bold my-3'>Categories</h5>
                  <div className='card card-gray mb-3 rounded-4'>
                    <Link href="/" className='text-primary'>
                      <div className='card-body px-3 py-2'>
                        <div className='row align-items-center py-1'>
                          <div className='col'>
                            <h6 className='fw-semibold mb-0'><i className="far fa-angle-double-right text-secondary me-2"></i> Case Study</h6>
                          </div>
                          <div className='col-auto'>
                            <div className='fw-semibold'>(1)</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='card card-gray mb-3 rounded-4'>
                    <Link href="/" className='text-primary'>
                      <div className='card-body px-3 py-2'>
                        <div className='row align-items-center py-1'>
                          <div className='col'>
                            <h6 className='fw-semibold mb-0'><i className="far fa-angle-double-right text-secondary me-2"></i> Office Managment</h6>
                          </div>
                          <div className='col-auto'>
                            <div className='fw-semibold'>(2)</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='card card-gray mb-3 rounded-4'>
                    <Link href="/" className='text-primary'>
                      <div className='card-body px-3 py-2'>
                        <div className='row align-items-center py-1'>
                          <div className='col'>
                            <h6 className='fw-semibold mb-0'><i className="far fa-angle-double-right text-secondary me-2"></i> Website</h6>
                          </div>
                          <div className='col-auto'>
                            <div className='fw-semibold'>(11)</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='card card-gray mb-3 rounded-4'>
                    <Link href="/" className='text-primary'>
                      <div className='card-body px-3 py-2'>
                        <div className='row align-items-center py-1'>
                          <div className='col'>
                            <h6 className='fw-semibold mb-0'><i className="far fa-angle-double-right text-secondary me-2"></i> Online Presence</h6>
                          </div>
                          <div className='col-auto'>
                            <div className='fw-semibold'>(9)</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='card card-gray mb-3 rounded-4'>
                    <Link href="/" className='text-primary'>
                      <div className='card-body px-3 py-2'>
                        <div className='row align-items-center py-1'>
                          <div className='col'>
                            <h6 className='fw-semibold mb-0'><i className="far fa-angle-double-right text-secondary me-2"></i> Technology</h6>
                          </div>
                          <div className='col-auto'>
                            <div className='fw-semibold'>(9)</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='tags-part-wrap'>
                  <h5 className='fw-bold my-3'>Tags</h5>
                  <span className='badge badge-numbers b-blue-800 mb-2'>Mobile App Development</span>
                  <span className='badge badge-numbers b-blue-800 mb-2'>Project Management</span>
                  <span className='badge badge-numbers b-blue-800 mb-2'>Development and Design</span>
                  <span className='badge badge-numbers b-blue-800 mb-2'>Infrastructure and Operations</span>
                  <span className='badge badge-numbers b-blue-800 mb-2'>Security and Emerging Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='frequently-asked-question-wrap home-sec-pattern-right pb-100'>
        <FrequentlyAskedQuestion />
      </section>

      <section className='home-build-together-wrap home-sec-pattern-right'>
        <div className='logo-bg-pattern-right'>
          <Image src={logoBgPattern} alt="Background Pattern" className="w-100" width={400} height={400} data-aos="fade-up" />
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-between' data-aos="fade-up">
            <div className='col-12 text-center'>
              <h2 className="heading-xxxl mb-3">Related Posts</h2>
            </div>
          </div>
          <div className='row pb-100 pt-4'>
            <div className='col-12'>
              <div data-aos="fade-up">
                <Swiper
                  rewind={true}
                  modules={[Autoplay]}
                  spaceBetween={24}
                  speed={6000}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  centeredSlides={true}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                      centeredSlides: true,
                    },
                    768: {
                      slidesPerView: 2,
                      centeredSlides: true,
                    },
                    1024: {
                      slidesPerView: 2,
                      centeredSlides: true,
                    },
                    1200: {
                      slidesPerView: 3,
                      centeredSlides: false,
                    },
                    1440: {
                      slidesPerView: 3,
                      centeredSlides: false,
                    },
                  }}
                  onSlideChange={() => {}}
                  onSwiper={() => {}}
                >
                  {relatedBlogs.map((relatedBlog) => (
                    <SwiperSlide key={relatedBlog._id} className='h-auto'>
                      <div className='position-relative'>
                        <div className='card card-xl __radius-tl-50 __radius-br-50'>
                          <div className='smart-solutions-card-img'>
                            <Image 
                              src={relatedBlog.image} 
                              alt={relatedBlog.title} 
                              className="w-100 object-cover img-h-300" 
                              width={400} 
                              height={300}
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className='card border-0 card-xl mt-3'>
                          <div className='card-body px-1 py-3'>
                            <h2 className='heading-xl mb-3'>{relatedBlog.title}</h2>
                            <p className='peragraph-style-1'>
                              {relatedBlog.content.replace(/<[^>]*>/g, ' ').substring(0, 100)}...
                            </p>
                            <div className='d-inline-block'>
                              <Link href={`/blogs/${relatedBlog.slug}`} className='btn btn-primary d-flex align-items-center'>Read more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-sec-wrap home-sec-pattern-left overflow-hidden'>
        <div className='logo-bg-pattern-left'>
          <Image src={logoBgPattern} alt="Background Pattern" className="w-100" width={400} height={400} data-aos="fade-up" />
        </div>
        <FormContentSection />
      </section>
    </div>
  );
};

export default BlogDetailsClient;
