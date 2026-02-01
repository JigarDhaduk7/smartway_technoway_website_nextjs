'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getById } from "../../../lib/api";

interface ServiceData {
  title: string;
  heroSection: {
    headline: string;
    subHeadline: string;
  };
  servicesOverview: {
    title: string;
    description: string;
    services: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  processSection: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      icon: string;
    }>;
  };
}

interface DynamicDetailProps {
  serviceSlug?: string;
}

const DynamicDetail: React.FC<DynamicDetailProps> = ({ serviceSlug }) => {
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceSlug) return;
      
      try {
        const response = await getById('services', serviceSlug);
        setServiceData(response.data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceSlug]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="placeholder-glow">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <span className="placeholder col-6 mb-3" style={{height: '40px'}}></span>
              <span className="placeholder col-8 mb-2"></span>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-6 col-xl-4 my-3">
                <div className="card card-xxl card-gray h-100">
                  <div className="card-body card-pad-50">
                    <span className="placeholder col-3 mb-3" style={{height: '55px', display: 'block'}}></span>
                    <span className="placeholder col-8 mb-2"></span>
                    <span className="placeholder col-12 mb-2"></span>
                    <span className="placeholder col-10"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section className="inner-hero-sec-wrap">
        <div className="inner-hero-banner">
          <Image
            src="/assets/images/web-development-services-banner-image.jpg"
            alt={`${serviceData.title} Banner`}
            className="w-100"
            width={1200}
            height={600}
          />
        </div>
        <div className="inner-hero-sec-top-text">
          <div className="container">
            <div className="row">
              <div className="col-12 inner-hero-sec-txt">
                <h2 className="fw-semibold">{serviceData.title}</h2>
                <ul className="d-flex justify-content-center">
                  <li>
                    <Link href="/" className="nav-list-link">
                      Home
                    </Link>{" "}
                    / &nbsp;{" "}
                  </li>
                  <li>
                    <Link href="/services" className="nav-list-link">
                      Services
                    </Link>{" "}
                    / &nbsp;{" "}
                  </li>
                  <li>{serviceData.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-solution-wrap pt-100 home-sec-pattern-right">
        <div className="logo-bg-pattern-right">
          <Image
            src="/assets/images/logo-large-bg-patterns.svg"
            alt="Background Pattern"
            className="w-100"
            data-aos="fade-up"
            width={1200}
            height={800}
          />
        </div>
        <div className="container">
          <div className="row align-items-center pb-100" data-aos="fade-up">
            <div className="col-12 text-center">
              <h2 className="heading-xxxl mb-3">
                {serviceData.heroSection.headline}
              </h2>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-6 text-center">
                  <p className="peragraph-style-1">
                    {serviceData.heroSection.subHeadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 col-xl-6">
              <h2 className="heading-xxxl mb-3" data-aos="fade-up">
                {serviceData.servicesOverview.title}
              </h2>
            </div>
            <div className="col-lg-5 col-xl-4">
              <p className="peragraph-style-1" data-aos="fade-up">
                {serviceData.servicesOverview.description}
              </p>
            </div>
          </div>
          <div className="row pb-100">
            {serviceData.servicesOverview.services.map((service, index) => (
              <div key={index} className="col-md-6 col-xl-4 my-3">
                <div
                  className="card card-xxl card-gray h-100 __hover-blue __radius-tr-110 __radius-bl-110"
                  data-aos="fade-up"
                >
                  <div className="card-body card-pad-50">
                    <div className="card-icn-wrap icn-bg-blue icn-55 __radius-tl-150 __radius-tr-150 __radius-bl-150">
                      <Image
                        src={service.icon}
                        alt="Icon"
                        width={55}
                        height={55}
                      />
                    </div>
                    <h2 className="heading-lg">{service.title}</h2>
                    <p className="peragraph-style-1 mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-workflow-wrap home-sec-pattern-left">
        <div className="logo-bg-pattern-left">
          <Image
            src="/assets/images/logo-large-bg-patterns.svg"
            alt="Background Pattern"
            className="w-100"
            data-aos="fade-up"
            width={1200}
            height={800}
          />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 text-center">
              <h2 className="heading-xxxl mb-3" data-aos="fade-up">
                {serviceData.processSection.title}
              </h2>
            </div>
          </div>
          <div className="row pb-100">
            <div className="services-workflow-main" data-aos="fade-up">
              <div className="services-workflow-inner">
                <ul>
                  {serviceData.processSection.steps.map((step) => (
                    <li key={step.step} className="services-workflow-list">
                      <div className="services-workflow-list-inner">
                        <div className="services-workflow-number">
                          <span>{step.step}</span>
                        </div>
                        <div className="services-workflow-card-main">
                          <div className="services-workflow-box">
                            <Image
                              src={step.icon}
                              alt={`${step.title} Icon`}
                              className="services-workflow-icn"
                              width={60}
                              height={60}
                            />
                          </div>
                        </div>
                        <h6 className="fw-semibold text-center mt-4">{step.title}</h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicDetail;
