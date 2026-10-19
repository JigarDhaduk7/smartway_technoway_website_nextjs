import { Metadata } from 'next';
import React from 'react';
import { Database, Eye, Lock, UserCheck } from 'lucide-react';

import { site } from '@/lib/site';
import PageHero from '../component/ui/PageHero';
import { Stagger, StaggerItem } from '../component/ui/Reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smartway Technoway',
  description: 'Learn how Smartway Technoway collects, uses, and protects your personal and business data, including your rights to access, modify, or delete your information.',
  keywords: 'Smartway Technoway privacy policy, data protection, information security, data rights',
  openGraph: {
    title: 'Privacy Policy | Smartway Technoway',
    description: 'Learn how Smartway Technoway collects, uses, and protects your personal and business data, including your rights to access, modify, or delete your information.',
    type: 'website',
  },
};

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    body: <>We collect business contact details, inquiry forms, and project specifications submitted directly through our website or communication channels.</>,
  },
  {
    icon: Eye,
    title: 'How We Use Information',
    body: <>Data is strictly used to communicate regarding services, manage projects, provide IT support, and improve our website experience. We <b className="text-fg">never</b> sell, rent, or trade your data to third parties.</>,
  },
  {
    icon: Lock,
    title: 'Data Security',
    body: <>We implement industry-standard encryption, secure servers (hosted via reliable cloud providers like Hostinger and Cloudflare), and strict internal access controls to safeguard your information.</>,
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    body: <>You may request access, modification, or complete deletion of your personal data at any time by contacting us at <a href={`mailto:${site.email}`} className="text-cyan underline underline-offset-4">{site.email}</a>.</>,
  },
];

const PrivacyPolicy: React.FC = () => (
  <>
    <PageHero
      title="Privacy Policy"
      eyebrow="Your Privacy Matters"
      description="At Smartway Technoway, we respect your privacy and are committed to protecting the personal and business data you share with us."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
    />

    <section className="relative pb-24 md:pb-32">
      <div className="container-x max-w-4xl!">
        <p className="mb-10 text-center font-mono text-xs tracking-widest text-subtle uppercase">Last updated: October 2026</p>
        <Stagger className="space-y-4">
          {sections.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="flex gap-5 rounded-3xl border border-line bg-surface/60 p-6 md:p-8">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright">
                  <s.icon className="size-5 text-white" />
                </span>
                <div>
                  <p className="font-mono text-xs text-subtle">0{i + 1}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold md:text-2xl">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
