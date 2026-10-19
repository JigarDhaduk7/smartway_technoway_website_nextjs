import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';

import { site } from '@/lib/site';
import PageHero from '../component/ui/PageHero';
import CtaBand from '../component/ui/CtaBand';
import { Stagger, StaggerItem, Reveal } from '../component/ui/Reveal';
import FormContentSection from '../component/FormAndContentSection/FormContentSection';

export const metadata: Metadata = {
  title: "Contact Smartway Technoway | Let's Build the Future of Technology Together",
  description: "Reach Smartway Technoway to discuss AI, automation, cloud, and software solutions. Connect with our experts in Ahmedabad to turn your idea into impact. Let's collaborate and create the next innovation.",
  keywords: 'Smartway Technoway contact, IT company Ahmedabad, digital transformation consulting, AI automation inquiry, Smartway Group contact',
  openGraph: {
    title: "Contact Smartway Technoway | Let's Build the Future of Technology Together",
    description: "Reach Smartway Technoway to discuss AI, automation, cloud, and software solutions. Connect with our experts in Ahmedabad to turn your idea into impact. Let's collaborate and create the next innovation.",
    type: 'website',
  },
};

const channels = [
  { icon: Mail, label: 'Email us', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref },
  { icon: MapPin, label: 'Visit us', value: site.address, href: 'https://www.google.com/maps/search/?api=1&query=Smartway+Technoway+Pvt+Ltd+Ahmedabad' },
];

const ContactUs = () => (
  <>
    <PageHero
      title="Contact Us"
      eyebrow="Let's Talk"
      description="Every great idea begins with a conversation. Tell us what you're building — we'll help you get there."
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
    />

    <section className="relative">
      <div className="container-x">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <StaggerItem key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group glass flex h-full flex-col rounded-3xl p-7 transition-colors hover:border-brand-bright/50"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-bright transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                  <c.icon className="size-5 text-white" />
                </span>
                <span className="mt-6 font-mono text-xs tracking-widest text-subtle uppercase">{c.label}</span>
                <span className="mt-2 text-fg">{c.value}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <FormContentSection />

    <section className="relative">
      <div className="container-x">
        <Reveal scale className="overflow-hidden rounded-[32px] border border-line">
          <iframe
            title="Smartway Technoway office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.520375848742!2d72.4957250760439!3d23.04137621562484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5670cf42cd%3A0x686e91b70313fc1e!2sSmartway%20Technoway%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774112971625!5m2!1sen!2sin"
            className="h-[420px] w-full [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.8)] md:h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>

    <CtaBand
      title="Let's Build the Future of Technology — Together"
      description="We're here to listen, collaborate, and create solutions that bring your vision to life — from thought to impact."
      cta={{ label: "Let's Discuss it!", href: `mailto:${site.email}`, external: true }}
    />
  </>
);

export default ContactUs;
