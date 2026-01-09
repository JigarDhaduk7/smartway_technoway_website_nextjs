import { Metadata } from 'next';
import React from 'react';
import { getById, getData } from '../../../lib/api';
import ServicePageClient from './ServicePageClient';

import './WebDevelopment.scss';

interface PageProps {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  try {
    const response = await getData('services');
    return response.data.map((service: any) => ({
      slug: [service.slug]
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  
  try {
    const response = await getById('services', slug);
    const service = response.data;
    
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
  } catch (error) {
    return {
      title: 'Service - Smartway Technoway | IT Solutions',
      description: 'Professional IT services and digital solutions',
    };
  }
}

const ServicePage: React.FC<PageProps> = ({ params }) => {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

  return <ServicePageClient slug={slug} />;
};

export default ServicePage;