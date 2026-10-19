'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import logo from '@/public/assets/images/smartwaytechnoway-logo.png';
import { mainNav, resourceNav, site } from '@/lib/site';
import Button from '../ui/Button';

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

// Floating glass navigation that tucks away on scroll-down and returns on scroll-up.
const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > prev && y > 240 && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-4 transition-all duration-500 md:pl-6 ${
            scrolled
              ? 'border border-line-strong bg-night/85 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl backdrop-saturate-150'
              : 'border border-transparent'
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
            <Image
              src={logo}
              alt={site.name}
              priority
              className={`w-auto brightness-0 invert transition-[height] duration-500 ${
                scrolled ? 'h-10 md:h-11' : 'h-12 md:h-16'
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`relative z-10 block rounded-full px-4 py-2 font-medium transition-[color,font-size] duration-300 ${
                      scrolled ? 'text-sm' : 'text-base xl:text-[17px]'
                    } ${active ? 'text-white' : 'text-fg/80 hover:text-white'}`}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button href="/contactus" arrow className="min-h-11! py-2.5!">
                Contact Us
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          // Opacity + transform only: clip-path/backdrop-filter animations flicker on mobile Chrome.
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn', delay: 0.05 } }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-night [transform:translateZ(0)] lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-radial" />
            <motion.div
              initial={{ y: -16 }}
              animate={{ y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ y: -12, transition: { duration: 0.25, ease: 'easeIn' } }}
              className="relative flex min-h-full flex-col px-6 pt-28 pb-10"
            >
              <ul className="flex flex-col gap-1">
                {[...mainNav, { href: '/contactus', label: 'Contact' }].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between border-b border-line py-4 font-display text-3xl font-semibold ${
                        isActive(pathname, item.href) ? 'text-cyan' : 'text-fg'
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className="size-6 text-muted" aria-hidden />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-10 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted"
              >
                {resourceNav.map((r) => (
                  <Link key={r.href} href={r.href} className="py-2 hover:text-fg">
                    {r.label}
                  </Link>
                ))}
              </motion.div>
              <div className="mt-auto pt-10 text-sm text-muted">
                <a href={`mailto:${site.email}`} className="block py-1 hover:text-fg">{site.email}</a>
                <a href={site.phoneHref} className="block py-1 hover:text-fg">{site.phone}</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
