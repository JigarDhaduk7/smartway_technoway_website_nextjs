'use client';

import React, { useState, useEffect } from 'react';
import { getData } from '../../../lib/api';
import type { ServiceCard as Service } from '@/lib/types';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../servicecomponent/ServiceCard';

// Services page: every service from the admin as a 3D tilt card grid.
const NextLevelServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getData('services');
        if (response?.data) {
          setServices(response.data);
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
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Next-Level IT Services Built Around You"
          description="We provide tailored IT solutions designed to match the unique needs of your business."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? [1, 2, 3].map((i) => <div key={i} className="h-80 animate-pulse rounded-3xl bg-white/5" />)
            : services.map((service, i) => <ServiceCard key={service._id} service={service} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default NextLevelServices;
