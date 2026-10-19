'use client';

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/public/assets/images/smartwaytechnoway-logo.png";
import { getData } from "@/lib/api";
import { mainNav, resourceNav, site } from "@/lib/site";
import { scrollToTop } from "../ui/SmoothScroll";

interface FooterService {
  _id: string;
  title: string;
  slug: string;
}

const linkCls = "group inline-flex items-center gap-1 py-1.5 text-muted transition-colors hover:text-fg";

const Footer: React.FC = () => {
  const [services, setServices] = useState<FooterService[]>([]);
  const [servicesLoading, setServicesLoading] = useState<boolean>(true);
  const [showTop, setShowTop] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const wordY = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);
  const { scrollYProgress: pageProgress } = useScroll();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getData('services');
        setServices(response?.data?.slice(0, 5) || []);
      } catch (error) {
        console.error('Failed to fetch services for footer:', error);
        setServices([]);
      } finally {
        setServicesLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer ref={ref} className="relative z-[1] mt-10 overflow-hidden border-t border-line bg-night">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-y" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-brand/30 blur-[140px]" />

        <div className="container-x relative pt-20 pb-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Image src={logo} alt={site.name} className="h-16 w-auto brightness-0 invert" />
              <p className="mt-6 max-w-sm text-muted">
                <span className="font-semibold text-fg">Smartway Technoway</span> is a premier IT services and software development partner, empowering global enterprises with custom software engineering, dedicated staff augmentation, cloud solutions, and digital transformation.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-muted hover:text-fg">
                  <span className="grid size-9 place-items-center rounded-full border border-line"><Mail className="size-4 text-cyan" /></span>
                  {site.email}
                </a>
                <a href={site.phoneHref} className="flex items-center gap-3 text-muted hover:text-fg">
                  <span className="grid size-9 place-items-center rounded-full border border-line"><Phone className="size-4 text-cyan" /></span>
                  {site.phone}
                </a>
                <p className="flex items-start gap-3 text-muted">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line"><MapPin className="size-4 text-cyan" /></span>
                  <span className="pt-1.5">{site.address}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
              <div>
                <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Company</h3>
                <ul>
                  {mainNav.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>{l.label === 'About' ? 'About Us' : l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Services</h3>
                <ul>
                  {servicesLoading ? (
                    [1, 2, 3].map((i) => (
                      <li key={i} className="py-2"><span className="block h-3 w-32 animate-pulse rounded bg-white/10" /></li>
                    ))
                  ) : services.length > 0 ? (
                    services.map((service) => (
                      <li key={service._id}>
                        <Link href={`/services/${service.slug}`} className={linkCls}>{service.title}</Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <Link href="/services" className={linkCls}>View All Services</Link>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Resources</h3>
                <ul>
                  {resourceNav.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-3">
                <div className="glass mt-4 flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-display text-xl font-semibold">Have a project in mind?</p>
                    <p className="text-sm text-muted">Let&apos;s turn your idea into impact.</p>
                  </div>
                  <Link
                    href="/contactus"
                    className="group inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-white px-6 font-semibold text-ink transition-colors hover:bg-cyan md:self-auto"
                  >
                    Start a conversation
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden pt-4" aria-hidden>
            <motion.p
              style={{ y: wordY }}
              className="text-gradient select-none text-center font-display text-[15vw] leading-[1.2] font-bold tracking-tighter opacity-90 lg:text-[11.5rem]"
            >
              Technoway
            </motion.p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-sm text-subtle md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Smartway Technoway Pvt Ltd | A Smartway Group Company</p>
            <p className="font-mono text-xs tracking-widest uppercase">From Thought to Impact</p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0.6, pointerEvents: showTop ? 'auto' : 'none' }}
        className="fixed right-5 bottom-5 z-40 grid size-13 place-items-center rounded-full bg-night/80 backdrop-blur"
      >
        <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 52 52" aria-hidden>
          <circle cx="26" cy="26" r="24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
          <motion.circle
            cx="26" cy="26" r="24" fill="none" stroke="url(#ttg)" strokeWidth="2" strokeLinecap="round"
            style={{ pathLength: pageProgress }}
          />
          <defs>
            <linearGradient id="ttg" x1="0" x2="1">
              <stop offset="0%" stopColor="#3d7bff" />
              <stop offset="100%" stopColor="#2dd4ff" />
            </linearGradient>
          </defs>
        </svg>
        <ArrowUp className="size-5 text-fg" />
      </motion.button>
    </>
  );
};

export default Footer;
