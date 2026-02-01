'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { getData } from '../../../lib/api';
import 'swiper/css';
import 'swiper/css/autoplay';
import logoBgPattern from "../../../public/assets/images/logo-large-bg-patterns.svg";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
}

const blogcomponent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getData('blogs');
        const publishedBlogs = response.data.filter((blog: Blog) => blog.isPublished);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const getTextFromHTML = (html: string, lines: number = 2) => {
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = text.split('. ');
    return sentences.slice(0, lines).join('. ') + (sentences.length > lines ? '...' : '');
  };
  return (
    <section className='home-build-together-wrap home-sec-pattern-right'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Success Stories from Our Partners</h2>
          </div>
          <div className='col-lg-5 col-xl-4'>
            <p className="peragraph-style-1">Blog! Here, we share expert advice, industry trends, actionable tips, and case studies that can help you </p>
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
                {loading ? (
                  [1, 2, 3].map((i) => (
                    <SwiperSlide key={i} className='h-auto'>
                      <div className='position-relative'>
                        <div className='card card-xl __radius-tl-50 __radius-br-50'>
                          <div className='smart-solutions-card-img placeholder-glow'>
                            <span className="placeholder w-100" style={{height: '300px'}}></span>
                          </div>
                        </div>
                        <div className='card border-0 card-xl mt-3'>
                          <div className='card-body px-1 py-3 placeholder-glow'>
                            <span className="placeholder col-8 mb-3"></span>
                            <span className="placeholder col-12 mb-2"></span>
                            <span className="placeholder col-6"></span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <SwiperSlide key={blog._id} className='h-auto'>
                      <div className='position-relative'>
                        <div className='card card-xl __radius-tl-50 __radius-br-50'>
                          <div className='smart-solutions-card-img'>
                            <Image 
                              src={blog.image} 
                              className="w-100 object-cover img-h-300" 
                              alt={blog.title}
                              width={400}
                              height={300}
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className='card border-0 card-xl mt-3'>
                          <div className='card-body px-1 py-3'>
                            <h2 className='heading-xl mb-3'>{blog.title}</h2>
                            <p className='peragraph-style-1'>{getTextFromHTML(blog.content, 2)}</p>
                            <div className='d-inline-block'>
                              <Link href={`/blogs/${blog.slug}`} className='btn btn-primary d-flex align-items-center'>Read more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide className='h-auto'>
                    <div className='text-center py-5'>
                      <p>No published blogs available.</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default blogcomponent
