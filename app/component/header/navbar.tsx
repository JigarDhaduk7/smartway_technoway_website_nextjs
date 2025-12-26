'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '@/public/assets/images/smartwaytechnoway-logo.png';
import './Header.scss';

const navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const submenuActiveRef = useRef<boolean>(false);
  const backdropId = 'sidebar-backdrop';
  const hamBtnId = 'mobileHamburger';
  const pathname = usePathname();

  // ================================
  // CLOSE SIDEBAR ON ROUTE CHANGE
  // ================================
  useEffect(() => {
    submenuActiveRef.current = false;

    document.body.classList.remove('sidebar-open');

    const existingBackdrop = document.getElementById(backdropId);
    if (existingBackdrop) existingBackdrop.remove();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // ================================
  // SCROLL + HAMBURGER LOGIC
  // ================================
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);

    const onHamburgerClick = (): void => {
      const bodyHtml = document.body;
      const isMobile = window.innerWidth <= 991;
      const existingBackdrop = document.getElementById(backdropId);

      submenuActiveRef.current = !submenuActiveRef.current;
      bodyHtml.classList.toggle('sidebar-open');

      if (isMobile && submenuActiveRef.current) {
        if (!existingBackdrop) {
          const backdrop = document.createElement('div');
          backdrop.id = backdropId;

          Object.assign(backdrop.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: '8',
            cursor: 'pointer',
          } as CSSStyleDeclaration);

          backdrop.addEventListener('click', () => {
            submenuActiveRef.current = false;
            document.body.classList.remove('sidebar-open');
            backdrop.remove();
          });

          document.body.appendChild(backdrop);
        }
      } else if (existingBackdrop) {
        existingBackdrop.remove();
      }

      document.querySelectorAll('.slick-slider').forEach(slider => {
        try {
          if (
            (window as any).jQuery &&
            (window as any).jQuery(slider).hasClass('slick-initialized')
          ) {
            (window as any).jQuery(slider).slick('refresh');
          }
        } catch {}
      });
    };

    const hamBtn = document.getElementById(hamBtnId) as HTMLButtonElement | null;
    hamBtn?.addEventListener('click', onHamburgerClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamBtn?.removeEventListener('click', onHamburgerClick);

      const existingBackdrop = document.getElementById(backdropId);
      if (existingBackdrop) existingBackdrop.remove();

      document.body.classList.remove('sidebar-open');
    };
  }, []);

  // ================================
  // RENDER
  // ================================
  return (
    <header className={`header-nav-wrap ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row align-items-center">

          {/* LOGO */}
          <div className="col-auto">
            <div className="header-logo-wrap">
              <Link href="/">
                <Image src={logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="col">
            <div className="nav-head-links-wrap">
              <ul className="nav-links-list">
                <li className="nav-lst">
                  <Link href="/" className={`nav-list-link ${pathname === '/' ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-lst">
                  <Link href="/about" className={`nav-list-link ${pathname === '/about' ? 'active' : ''}`}>
                    about us
                  </Link>
                </li>
                <li className="nav-lst">
                  <Link href="/services" className={`nav-list-link ${pathname === '/services' ? 'active' : ''}`}>
                    services
                  </Link>
                </li>
                <li className="nav-lst">
                  <Link href="/projects" className={`nav-list-link ${pathname === '/projects' ? 'active' : ''}`}>
                    projects
                  </Link>
                </li>
                <li className="nav-lst">
                  <Link href="/blogs" className={`nav-list-link ${pathname === '/blogs' ? 'active' : ''}`}>
                    Blogs
                  </Link>
                </li>
                <li className="nav-lst">
                  <Link href="/career" className={`nav-list-link ${pathname === '/career' ? 'active' : ''}`}>
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="col-auto">
            <Link href="/contactus" className="btn btn-primary">
              Contact Us <i className="far fa-angle-right ms-2"></i>
            </Link>

            {/* MOBILE HAMBURGER */}
            <button className="mobile-hamburger" id={hamBtnId}>
              <i className="far fa-bars"></i>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default navbar;
