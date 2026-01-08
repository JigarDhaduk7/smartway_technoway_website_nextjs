'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import FrequentlyAskedQuestion from '../component/FrequentlyAskedQuestionSection/FrequentlyAskedQuestion';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import logoBgPattern from "../../public/assets/images/logo-large-bg-patterns.svg";

import innerHeroBannerImage from "../../public/assets/images/blog-categorie-banner-image.jpg";
import blogCategorieImage1 from "../../public/assets/images/blog-categorie-image-1.jpg";

import blogRecentPostImage1 from "../../public/assets/images/recent-post-img-1.jpg";
import blogRecentPostImage2 from "../../public/assets/images/recent-post-img-2.jpg";
import blogRecentPostImage3 from "../../public/assets/images/recent-post-img-3.jpg";
import blogRecentPostImage4 from "../../public/assets/images/recent-post-img-4.jpg";
import blogRecentPostImage5 from "../../public/assets/images/recent-post-img-5.jpg";

import successStories1 from "../../public/assets/images/success-stories-img-1.jpg";
import successStories2 from "../../public/assets/images/success-stories-img-2.jpg";
import successStories3 from "../../public/assets/images/success-stories-img-3.jpg";

import './BlogDetails.scss';

const BlogDetails: React.FC = () => (

  <div className='smartway-blog-details'>

    <section className="inner-hero-sec-wrap">
      <div className='inner-hero-banner'>
        <Image src={innerHeroBannerImage} alt="Blog Details Banner" className="w-100" width={1200} height={600} />
      </div>
      <div className='inner-hero-sec-top-text'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 inner-hero-sec-txt'>
              <h2 className='fw-semibold'>The Top 5 Business Strategies for 2026</h2>
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
                      <Image src={blogCategorieImage1} alt="Blog Category" className="blog-categorie-img object-cover img-h-400 w-100" width={600} height={400} />
                    </div>
                    <div className='blog-categorie-content'>
                      <p className='peragraph-style-1 font-16'>Web development learning is thrilling, but it can also be tough and boring. There are just so many languages, frameworks, and tools to learn. Gaining knowledge through tutorials is useful, but the actual growth occurs when you start creating things.</p>
                      <p className='peragraph-style-1 font-16'>That s why doing small projects is the best way to learn. Projects provide you with hands-on experience, allow you to see how ideas are related, and build your portfolio. Employers and clients don t want to see what you know; they want to see what you can do.</p>
                      <p className='peragraph-style-1 font-16'>In this article, I m going to give you five web developer project ideas. Each of them is useful, not so complicated, and will allow you to build skills step by step.</p>
                      <h4 className='fw-bold mb-4 text-secondary'>The Top 5 Business Strategies for 2026</h4>
                      <h4 className='fw-bold py-2'>1. Personal Portfolio Site</h4>
                      <p className='peragraph-style-1 font-16'>Having a personal portfolio website can prove helpful for developers. It s similar to your virtual business card, but it s even more effective. A portfolio not only presents you but also shows your real work.</p>
                      <p className='peragraph-style-1 list-sty-arrow'>Begin with a basic design:</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Home page with your name, abilities, and a brief introduction.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> The about page is to tell them your story and passion as a developer.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> The projects page is where you present your best work using screenshots and links.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Contact page so people can contact you with ease.</p>
                      <p className='peragraph-style-1 font-16'>Maintain a clean and responsive design so that it s functional on every device. If you want to push it further, include animations, a dark theme, or even a blog where you post coding tutorials and tips. A professionally done portfolio can get you freelance work and potential job opportunities.</p>

                      <h4 className='fw-bold py-2'>2. To Do List App</h4>
                      <p className='peragraph-style-1 font-16'>The to-do list is an old project for beginners, but it does teach a lot. It may appear to be a simple one at first, but as you start working on it, you ll find that it involves a lot of important concepts.</p>
                      <p className='peragraph-style-1 list-sty-arrow'>Begin with a basic design:</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Adding new tasks via an input field.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Tagging tasks as done.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Editing or deleting tasks.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Saving tasks in local storage so they won t get lost when the page reloads</p>
                      <p className='peragraph-style-1 font-16'>When you ve got the basics down, you can take it to the next level. Try adding deadlines, categories, or even a drag-and-drop for reordering tasks. With an added backend database, you ll also learn about managing user accounts and storing tasks for different individuals.</p>
                      <p className='peragraph-style-1 font-16'>One of the popular tools, Todoist, is a real example of this. It helps users to simply add, organize, and track tasks. Developing something similar helps you practice user input handling and local storage. You can even practice backend integration if you want to add user accounts.</p>

                      <h4 className='fw-bold py-2'>3. Weather Dashboard</h4>
                      <p className='peragraph-style-1 font-16'>A weather application is a great way to see how APIs function. It s also extremely visual, so it s rewarding to build such a project.</p>
                      <p className='peragraph-style-1 list-sty-arrow'>Begin by employing a free weather API such as OpenWeatherMap. Your application would allow users to input the name of a city and then show data such as:</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Current temperature.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Humidity and wind speed.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> A brief forecast for the upcoming days or so.</p>
                      <p className='peragraph-style-1 font-16'>For it to be user-friendly, include weather icons (sunny, cloudy, rainy) and background colors that change in accordance with the temperature. For instance, employ warm colors on hot days and cool colors on cold days.</p>
                      <p className='peragraph-style-1 font-16'>AccuWeather is an example that gives live weather updates and detailed forecasts. By creating something like this using a free API, you ll learn to fetch and display real-time data. You can also practice handling APIs, managing responses, and making the dashboard responsive for different devices.</p>

                      <h4 className='fw-bold py-2'>4. Blog CMS (Content Management System)</h4>
                      <p className='peragraph-style-1 font-16'>Blog CMS is a larger project, but it s a good step if you wish to learn backend development. The concept is to build a site where users can write, edit, and publish articles.</p>
                      <p className='peragraph-style-1 list-sty-arrow'>Some of the features you can include:</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> A writer s dashboard to create and edit posts.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> Categories and tags for structuring content.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> A comments section for readers.</p>
                      <p className='peragraph-style-1 list-sty-arrow'><i className="far fa-angle-double-right text-secondary me-2"></i> User authentication so only registered users can publish posts.</p>
                      <p className='peragraph-style-1 font-16'>This project will introduce you to databases, authentication, and server-side <span className='text-secondary'>coding</span>. You ll also get to know how to make user-friendly forms and layouts. Even if you don t develop all the features of this project, even a minimalistic blog CMS in your portfolio indicates that you know how web apps function both from the frontend and backend.</p>
                      <p className='peragraph-style-1 font-16'>WordPress, the most popular blogging platform in the world, is an example of this. It lets users write, edit, and publish blog posts with different categories, tags, and comments. Creating something like this will help you understand the core parts of web development. These parts are databases, authentication, and content management</p>
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
                <div className='recent-post-item'>
                  <Link href="/" className='text-primary'>
                    <div className='row mx-0'>
                      <div className='col-auto ps-0'>
                        <div className='rp-col-img-main'>
                          <Image src={blogRecentPostImage1} alt="Recent Post" className="rp-col-imgs" width={80} height={60} />
                        </div>
                      </div>
                      <div className='col pr-0 pe-col-content'>
                        <h6 className='fw-bold mb-1'>The Top 5 Business Strategies for 2026</h6>
                        <p className='mb-0 opacity-75'>17 November 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='recent-post-item'>
                  <Link href="/" className='text-primary'>
                    <div className='row mx-0'>
                      <div className='col-auto ps-0'>
                        <div className='rp-col-img-main'>
                          <Image src={blogRecentPostImage2} alt="Recent Post" className="rp-col-imgs" width={80} height={60} />
                        </div>
                      </div>
                      <div className='col pr-0 pe-col-content'>
                        <h6 className='fw-bold mb-1'>The Top 5 Business Strategies for 2026</h6>
                        <p className='mb-0 opacity-75'>17 November 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='recent-post-item'>
                  <Link href="/" className='text-primary'>
                    <div className='row mx-0'>
                      <div className='col-auto ps-0'>
                        <div className='rp-col-img-main'>
                          <Image src={blogRecentPostImage3} alt="Recent Post" className="rp-col-imgs" width={80} height={60} />
                        </div>
                      </div>
                      <div className='col pr-0 pe-col-content'>
                        <h6 className='fw-bold mb-1'>The Top 5 Business Strategies for 2026</h6>
                        <p className='mb-0 opacity-75'>17 November 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='recent-post-item'>
                  <Link href="/" className='text-primary'>
                    <div className='row mx-0'>
                      <div className='col-auto ps-0'>
                        <div className='rp-col-img-main'>
                          <Image src={blogRecentPostImage4} alt="Recent Post" className="rp-col-imgs" width={80} height={60} />
                        </div>
                      </div>
                      <div className='col pr-0 pe-col-content'>
                        <h6 className='fw-bold mb-1'>The Top 5 Business Strategies for 2026</h6>
                        <p className='mb-0 opacity-75'>17 November 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='recent-post-item'>
                  <Link href="/" className='text-primary'>
                    <div className='row mx-0'>
                      <div className='col-auto ps-0'>
                        <div className='rp-col-img-main'>
                          <Image src={blogRecentPostImage5} alt="Recent Post" className="rp-col-imgs" width={80} height={60} />
                        </div>
                      </div>
                      <div className='col pr-0 pe-col-content'>
                        <h6 className='fw-bold mb-1'>The Top 5 Business Strategies for 2026</h6>
                        <p className='mb-0 opacity-75'>17 November 2025</p>
                      </div>
                    </div>
                  </Link>
                </div>
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

                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories1} alt="Success Story" className="w-100 object-cover img-h-300" width={400} height={300} />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>Agile Development: The Key to Flexibility</h2>
                        <p className='peragraph-style-1'>Dive into the principles of agile development and how it enhances project management, collaboration.</p>
                        <div className='d-inline-block'>
                          <a href='' className='btn btn-primary d-flex align-items-center'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories2} alt="Success Story" className="w-100 object-cover img-h-300" width={400} height={300} />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>5G's Arrival: Transforming Connectivity</h2>
                        <p className='peragraph-style-1'>The rollout of 5G networks is poised to revolutionize the way we connect and communicate.</p>
                        <div className='d-inline-block'>
                          <a href='' className='btn btn-primary d-flex align-items-center'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories3} alt="Success Story" className="w-100 object-cover img-h-300" width={400} height={300} />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>AI-Powered Healthcare: Enhancing Diagnostics</h2>
                        <p className='peragraph-style-1'>Artificial intelligence is reshaping the medical landscape. From advanced diagnostics to personalized treatment</p>
                        <div className='d-inline-block'>
                          <a href='' className='btn btn-primary d-flex align-items-center'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-auto'>
                  <div className='position-relative'>
                    <div className='card card-xl __radius-tl-50 __radius-br-50'>
                      <div className='smart-solutions-card-img'>
                        <Image src={successStories1} alt="Success Story" className="w-100 object-cover img-h-300" width={400} height={300} />
                      </div>
                    </div>
                    <div className='card border-0 card-xl mt-3'>
                      <div className='card-body px-1 py-3'>
                        <h2 className='heading-xl mb-3'>The Top 5 Business Strategies for 2026</h2>
                        <p className='peragraph-style-1'>Blog! Here, we share expert advice, industry trends, actionable tips, and case studies</p>
                        <div className='d-inline-block'>
                          <a href='' className='btn btn-primary d-flex align-items-center'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

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

export default BlogDetails;