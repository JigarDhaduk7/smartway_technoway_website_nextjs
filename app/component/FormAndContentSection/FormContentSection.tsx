'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Compass, Mail, MapPin, Phone, Users } from 'lucide-react';
import { submitData } from '../../../lib/api';
import { site } from '@/lib/site';
import { Reveal } from '../ui/Reveal';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';

const fieldCls =
  'w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-fg placeholder:text-subtle outline-none transition-[border-color,background,box-shadow] duration-300 focus:border-brand-bright focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(61,123,255,0.15)]';
const labelCls = 'mb-2 block text-sm font-medium text-fg/90';

const FormContentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitData('contacts/create', formData);
      toast.success('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/3 -left-40 size-[500px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* CONTENT */}
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal blur={false} distance={16}>
            <span className="eyebrow mb-5"><span className="h-px w-8 bg-cyan" />Work With Us</span>
          </Reveal>
          <SplitText
            text="Let's Build the Future of Technology Together"
            className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base text-muted md:text-lg">
              We&apos;re ready to discuss your next big idea — whether you need a custom solution, system upgrade, or digital transformation roadmap. Let&apos;s create something that delivers real impact.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-muted"><MapPin className="size-5 text-cyan" />{site.city}</li>
              <li><a href={site.phoneHref} className="flex items-center gap-3 text-muted hover:text-fg"><Phone className="size-5 text-cyan" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-3 text-muted hover:text-fg"><Mail className="size-5 text-cyan" />{site.email}</a></li>
            </ul>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Compass, title: 'IT Strategy', text: 'Plan your digital future with expert guidance' },
              { icon: Users, title: 'Workforce', text: 'Empower your teams to work securely' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.1}>
                <div className="glass h-full rounded-2xl p-5">
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-bright">
                    <f.icon className="size-5 text-white" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FORM */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <TiltCard max={3} className="rounded-[28px]">
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-surface-2/90 to-surface/90 p-6 backdrop-blur-xl md:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-brand-bright/25 blur-[90px]" />
              <h3 className="relative font-display text-2xl font-semibold md:text-3xl">Tell Us About Your Project</h3>
              <p className="relative mt-2 text-sm text-muted">We usually respond within one business day.</p>

              <form onSubmit={handleSubmit} className="relative mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>Full Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    className={fieldCls}
                    placeholder="Enter full name"
                    autoComplete="name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cf-company" className={labelCls}>Company / Organization</label>
                  <input
                    id="cf-company"
                    type="text"
                    className={fieldCls}
                    placeholder="Enter company / organization"
                    autoComplete="organization"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelCls}>Email Address</label>
                  <input
                    id="cf-email"
                    type="email"
                    className={fieldCls}
                    placeholder="Enter email address"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelCls}>Phone Number</label>
                  <div className="flex">
                    <span className="grid place-items-center rounded-l-xl border border-r-0 border-line bg-white/[0.06] px-4 text-sm text-muted">+91</span>
                    <input
                      id="cf-phone"
                      type="tel"
                      inputMode="numeric"
                      className={`${fieldCls} rounded-l-none`}
                      placeholder="Enter phone number"
                      autoComplete="tel-national"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 10) {
                          setFormData({ ...formData, phone: value });
                        }
                      }}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="cf-message" className={labelCls}>How Can We Help?</label>
                  <textarea id="cf-message" rows={4} className={`${fieldCls} resize-none`} placeholder="Enter message" required />
                </div>
                <div className="md:col-span-2">
                  <span className={labelCls}>Preferred Mode of Contact</span>
                  <div className="flex flex-wrap gap-2">
                    {['Email', 'Call', 'WhatsApp'].map((mode, i) => (
                      <label key={mode} className="cursor-pointer">
                        <input type="radio" name="cf-mode" value={mode} defaultChecked={i === 0} className="peer sr-only" />
                        <span className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm text-muted transition-colors peer-checked:border-brand-bright peer-checked:bg-brand-bright/15 peer-checked:text-fg peer-focus-visible:ring-2 peer-focus-visible:ring-cyan">
                          {mode}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-2 md:col-span-2">
                  <Button type="submit" arrow disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
};

export default FormContentSection;
