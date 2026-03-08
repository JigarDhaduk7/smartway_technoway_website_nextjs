'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../../../lib/api';
import logoBgPattern from '../../../public/assets/images/logo-large-bg-patterns.svg';

interface Service {
  _id: string;
  title: string;
  slug: string;
  card: {
    shortDescription: string;
    icon: string;
  };
}

const ServiceComponent: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getData('services');
        if (response?.data) {
          setServices(response.data.slice(0, 3));
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className='home-next-level-solution-wrap home-sec-pattern-right pt-5 pt-lg-0'>
      <div className='logo-bg-pattern-right'>
        <Image src={logoBgPattern} className="w-100" data-aos="fade-up" alt="Pattern" />
      </div>
      <div className='container'>
        <div className='row align-items-center justify-content-between' data-aos="fade-up">
          <div className='col-lg-7 col-xl-6'>
            <h2 className="heading-xxxl mb-3">Building Smart Solutions for a Digital World</h2>
          </div>
          <div className='col-lg-5 col-xl-5'>
            <p className="peragraph-style-1">From concept to execution, Smartway Technoway offers a comprehensive suite of technology services designed to make your business future-ready.</p>
          </div>
        </div>
        <div className='row pb-100'>
          {loading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className='col-md-6 col-xl-4 my-3'>
                <div className='card card-xxl h-100 __radius-tr-110 __radius-bl-110'>
                  <div className='card-body card-pad-50 placeholder-glow'>
                    <span className="placeholder col-3 mb-3" style={{height: '55px', display: 'block'}}></span>
                    <span className="placeholder col-8 mb-2"></span>
                    <span className="placeholder col-12 mb-2"></span>
                    <span className="placeholder col-10"></span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            services.map((service) => (
              <div key={service._id} className='col-md-6 col-xl-4 my-3'>
                <div className='card card-xxl h-100 __hover-blue __radius-tr-110 __radius-bl-110' data-aos="fade-up">
                  <div className='card-body card-pad-50'>
                    <div className='card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150'>
                      <Image 
                        src={service.card.icon} 
                        alt="Icon"
                        width={55}
                        height={55}
                        onError={(e) => {
                          e.currentTarget.src = '/assets/images/default-icon.svg';
                        }}
                      />
                    </div>
                    <h2 className='heading-lg'>{service.title}</h2>
                    <p className='peragraph-style-1'>{service.card.shortDescription}</p>
                    <div className='d-inline-block'>
                      <Link href={`/services/${service.slug}`} className='btn btn-link d-flex align-items-center'>
                        View All Services <i className="far fa-long-arrow-right font-18 ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
