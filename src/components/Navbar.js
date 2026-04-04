'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#about-farina', label: 'About Farina' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/#products', label: 'Products' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <Link className="nav-brand" href="/" onClick={() => setOpen(false)}>
            <img src="/img/logo.jpg" alt="CHITU-KA FOODS logo" width={44} height={44} />
            <span>CHITU-KA FOODS</span>
          </Link>

          <ul className="nav-links">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          <button
            className={`nav-toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        {navItems.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </div>
    </>
  );
}
