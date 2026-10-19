import { Metadata } from 'next';
import React from 'react';
import { AlertTriangle, LifeBuoy, Mail, Timer, Wrench } from 'lucide-react';

import { site } from '@/lib/site';
import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import TiltCard from '../component/ui/TiltCard';
import CtaBand from '../component/ui/CtaBand';
import Button from '../component/ui/Button';
import { Stagger, StaggerItem } from '../component/ui/Reveal';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

import innerHeroBannerImage from '@/public/assets/images/help-center-support-banner.png';

export const metadata: Metadata = {
  title: 'Help Center & Support | Client Support & Maintenance Portal - Smartway Technoway',
  description: "Need technical assistance, bug fixes, or server maintenance? Reach Smartway Technoway's support desk via email or client portal ticketing, backed by clear SLA response times.",
  keywords: 'Smartway Technoway support, help center, client support portal, maintenance SLA, bug fix support, server down response, IT support ticket',
  openGraph: {
    title: 'Help Center & Support | Client Support & Maintenance Portal - Smartway Technoway',
    description: "Need technical assistance, bug fixes, or server maintenance? Reach Smartway Technoway's support desk via email or client portal ticketing, backed by clear SLA response times.",
    type: 'website',
  },
};

const Support: React.FC = () => (
  <>
    <PageHero
      title="Help Center & Support"
      eyebrow="Client Support"
      description="We don't just build solutions; we ensure they run smoothly around the clock."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Support' }]}
      image={innerHeroBannerImage}
      imageAlt="Help Center & Support Banner"
    />

    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Support Desk"
          title="Client Support & Maintenance Portal"
          description="If you are an existing client needing technical assistance, bug fixes, or server maintenance, our support desk is here."
        />
        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          <StaggerItem className="h-full">
            <TiltCard max={4} className="rounded-[28px]">
              <div className="flex h-full flex-col rounded-[28px] border border-line bg-surface/70 p-8 backdrop-blur md:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright"><LifeBuoy className="size-6 text-white" /></span>
                <h3 className="mt-8 font-display text-2xl font-semibold">How to Reach Support</h3>
                <ul className="mt-6 flex-1 space-y-4 text-muted">
                  <li className="flex gap-3"><Mail className="mt-1 size-4 shrink-0 text-cyan" /><span><b className="text-fg">Email Support:</b> Send tickets directly to <a href={`mailto:${site.email}`} className="text-cyan underline underline-offset-4">{site.email}</a> for tracking.</span></li>
                  <li className="flex gap-3"><Wrench className="mt-1 size-4 shrink-0 text-cyan" /><span><b className="text-fg">Client Portal / Ticketing:</b> Log into your dedicated project workspace to raise tickets with priority tags (Critical, High, Normal, Low).</span></li>
                </ul>
                <div className="mt-8"><Button href={`mailto:${site.email}`} external arrow>Email Support</Button></div>
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem className="h-full">
            <TiltCard max={4} className="rounded-[28px]">
              <div className="flex h-full flex-col rounded-[28px] border border-line bg-surface/70 p-8 backdrop-blur md:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright"><Timer className="size-6 text-white" /></span>
                <h3 className="mt-8 font-display text-2xl font-semibold">Support Service Level Agreements (SLAs)</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-red-400/25 bg-red-500/5 p-5">
                    <AlertTriangle className="size-5 text-red-300" />
                    <p className="mt-3 text-sm text-muted">Critical Bug / Server Down</p>
                    <p className="mt-1 font-display text-3xl font-semibold">1 hour</p>
                    <p className="text-xs text-subtle">response time</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-white/[0.03] p-5">
                    <Wrench className="size-5 text-cyan" />
                    <p className="mt-3 text-sm text-muted">Standard Maintenance / Updates</p>
                    <p className="mt-1 font-display text-3xl font-semibold">12–24 hrs</p>
                    <p className="text-xs text-subtle">response time</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>

    <CompanySuccessHighlights />

    <CtaBand
      title="Need Help Right Now?"
      description="Our support desk is ready around the clock — reach out and we'll have you back on track in no time."
      cta={{ label: 'Email Support', href: `mailto:${site.email}`, external: true }}
    />

    <FormContentSection />
  </>
);

export default Support;
