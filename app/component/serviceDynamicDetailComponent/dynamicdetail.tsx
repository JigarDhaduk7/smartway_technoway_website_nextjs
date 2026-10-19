'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ServiceData } from "@/lib/types";
import PageHero from "../ui/PageHero";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";
import { ServiceIcon } from "../servicecomponent/ServiceCard";
import serviceBanner from "@/public/assets/images/our-services-banner-image.png";

interface DynamicDetailProps {
  serviceData: ServiceData | null;
}

// Service detail body: everything below is driven by the admin service record.
const DynamicDetail: React.FC<DynamicDetailProps> = ({ serviceData }) => {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!serviceData) {
    return (
      <section className="container-x py-48 text-center">
        <h1 className="font-display text-4xl font-semibold">Service not found</h1>
        <p className="mt-3 text-muted">The service you are looking for may have moved.</p>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={serviceData.title}
        eyebrow={serviceData.heroSection.headline}
        description={serviceData.heroSection.subHeadline}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: serviceData.title }]}
        image={serviceBanner}
        imageAlt={`${serviceData.title} Banner`}
      />

      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's Included"
            title={serviceData.servicesOverview.title}
            description={serviceData.servicesOverview.description}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceData.servicesOverview.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="rounded-3xl">
                  <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/70 p-8 backdrop-blur">
                    <ServiceIcon src={service.icon} />
                    <h3 className="mt-7 font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-muted">{service.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-radial" />
        <div className="container-x relative">
          <SectionHeading align="center" eyebrow="How We Work" title={serviceData.processSection.title} />

          <div ref={processRef} className="relative mx-auto mt-16 max-w-3xl">
            {/* Progress line that fills as the user scrolls through the steps */}
            <div className="absolute top-0 bottom-0 left-7 w-px bg-line md:left-1/2">
              <motion.div style={{ scaleY: lineScale }} className="h-full w-px origin-top bg-gradient-to-b from-brand-bright via-cyan to-violet" />
            </div>
            <ol className="space-y-10 md:space-y-16">
              {serviceData.processSection.steps.map((step, i) => (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center gap-6 pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:flex-row-reverse md:text-right" : "md:ml-auto md:pl-14"}`}
                >
                  <span
                    className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-brand-bright/50 bg-night font-display text-lg font-semibold text-cyan shadow-[0_0_30px_rgba(61,123,255,0.45)] md:absolute ${i % 2 === 0 ? "md:-right-7" : "md:-left-7"}`}
                  >
                    {step.step}
                  </span>
                  <div className={`glass flex flex-1 items-center gap-4 rounded-2xl p-5 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.icon} alt="" className="size-7 object-contain brightness-0 invert" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicDetail;
