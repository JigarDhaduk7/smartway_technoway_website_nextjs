import { Metadata } from 'next';
import React from 'react';

import PageHero from '../component/ui/PageHero';
import SectionHeading from '../component/ui/SectionHeading';
import Accordion from '../component/ui/Accordion';
import CtaBand from '../component/ui/CtaBand';
import { Reveal } from '../component/ui/Reveal';
import CompanySuccessHighlights from '../component/CompanySuccessHighlights/CompanySuccessHighlights';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

export const metadata: Metadata = {
  title: 'FAQs | Frequently Asked Questions - Smartway Technoway',
  description: 'Got questions about working with Smartway Technoway? Find answers on developer onboarding time, code quality & security, time zone coverage, and team communication.',
  keywords: 'Smartway Technoway FAQs, frequently asked questions, IT outsourcing FAQ, developer onboarding time, code security NDA, remote team communication',
  openGraph: {
    title: 'FAQs | Frequently Asked Questions - Smartway Technoway',
    description: 'Got questions about working with Smartway Technoway? Find answers on developer onboarding time, code quality & security, time zone coverage, and team communication.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How quickly can you onboard developers or a team?',
    answer: 'Typically, we can shortlist and onboard pre-vetted engineers within 48 to 72 hours depending on your required technology stack.',
  },
  {
    question: 'How do you ensure code quality and project security?',
    answer: "We follow rigorous code review practices, automated CI/CD pipelines, and secure coding standards. All code is backed by strict NDAs and intellectual property (IP) protection agreements assigned 100% to you.",
  },
  {
    question: 'What time zones do your development teams work in?',
    answer: 'Our teams operate flexibly to align with your business hours (overlapping by at least 4 hours daily for seamless daily standups and communication).',
  },
  {
    question: 'How do we communicate with the assigned team?',
    answer: "We integrate directly into your existing communication tools, whether that's Slack, Microsoft Teams, Jira, Trello, or WhatsApp, along with scheduled daily/weekly video syncs.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const Faqs: React.FC = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <PageHero
      title="FAQs"
      eyebrow="Help"
      description="Everything you need to know about working with Smartway Technoway."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
    />

    <section className="relative pb-20 md:pb-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          title="Got Questions? We've Got Answers."
          description="From onboarding timelines to how we keep your code and IP secure."
        />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Accordion
            items={faqs.map((f) => ({ key: f.question, title: f.question, content: <p>{f.answer}</p> }))}
          />
        </Reveal>
      </div>
    </section>

    <CompanySuccessHighlights />

    <CtaBand
      title="Still Have Questions?"
      description="Can't find the answer you're looking for? Our team is happy to walk you through anything — no obligation required."
      cta={{ label: 'Ask Us Directly', href: '/contactus' }}
    />

    <FormContentSection />
  </>
);

export default Faqs;
