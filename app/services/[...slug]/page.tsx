import { Metadata } from 'next';
import React from 'react';
import { getById, getData } from '../../../lib/api';
import ServicePageClient from './ServicePageClient';

import './WebDevelopment.scss';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const response = await getData('services');
    return response.data.map((service: any) => ({ slug: [service.slug] }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr.join('/') : slugArr;

  try {
    const { data: service } = await getById('services', slug);
    return {
      title: `${service.title} - Smartway Technoway | Professional IT Solutions`,
      description: service.heroSection.subHeadline || service.card.shortDescription,
      keywords: `${service.title.toLowerCase()}, IT services, digital solutions, smartway technoway`,
      openGraph: {
        title: `${service.title} - Smartway Technoway`,
        description: service.heroSection.subHeadline || service.card.shortDescription,
        type: 'website',
      },
    };
  } catch {
    return {
      title: 'Service - Smartway Technoway | IT Solutions',
      description: 'Professional IT services and digital solutions',
    };
  }
}

const ServicePage = async ({ params }: PageProps) => {
  const { slug: slugArr } = await params;
  const slug = Array.isArray(slugArr) ? slugArr.join('/') : slugArr;

  let serviceData = null;
  let skills: any[] = [];

  try {
    const [serviceRes, skillsRes] = await Promise.all([
      getById('services', slug),
      getData('skills'),
    ]);
    serviceData = serviceRes.data;
    skills = skillsRes.data.filter((skill: any) => skill.status);
  } catch {
    // handled in client
  }

  return <ServicePageClient serviceData={serviceData} skills={skills} />;
};

export default ServicePage;