import React, { useState, useEffect, useCallback } from 'react';
import { scrollLock } from '../utils/scrollLock';

const ChevronDown = () => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const openMenu   = useCallback(() => { setOpen(true);  scrollLock.lock();   }, []);
  const closeMenu  = useCallback(() => { setOpen(false); scrollLock.unlock(); }, []);
  const toggleMenu = useCallback(() => { open ? closeMenu() : openMenu(); }, [open, openMenu, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [open, closeMenu]);

  return (
    <>
      <header id="nav" className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="nav-pill nav-left">
          <a href="#hero" className="nlogo" aria-label="Locana home">
            <img src="/logo.png"        alt=""       className="locana-logo-img" width="32"  height="32" />
            <img src="/locana-text.png" alt="Locana" className="locana-text-img" width="120" height="20" />
          </a>
          <nav aria-label="Main navigation">
            <ul className="n-menu">
              <li className="n-item">
                <a href="#services" className="n-link">Product <ChevronDown /></a>
                <div className="dp-pane" role="menu">
                  <a href="#services" className="dp-link" role="menuitem"><div className="dp-title">Services</div><div className="dp-desc">Custom software and intelligent automation built for scale.</div></a>
                  <a href="#products" className="dp-link" role="menuitem"><div className="dp-title">Flagship Products</div><div className="dp-desc">Explore Menyoos, AutoFlow, and DataLens.</div></a>
                  <a href="#research" className="dp-link" role="menuitem"><div className="dp-title">Locana Labs</div><div className="dp-desc">Our R&D division exploring next-generation neural architectures.</div></a>
                </div>
              </li>
              <li className="n-item">
                <a href="#team" className="n-link">Company <ChevronDown /></a>
                <div className="dp-pane" role="menu">
                  <a href="#team"    className="dp-link" role="menuitem"><div className="dp-title">Our Team</div><div className="dp-desc">The engineers and strategists behind the technology.</div></a>
                  <a href="#careers" className="dp-link" role="menuitem"><div className="dp-title">Careers</div><div className="dp-desc">Join us in building the future of software and AI.</div></a>
                </div>
              </li>
              <li className="n-item"><a href="#pricing" className="n-link">Pricing</a></li>
            </ul>
          </nav>
        </div>
        <div className="nav-pill nav-right">
          <a href="#contact" className="btn-ghost">Contact</a>
          <a href="#contact" className="btn-fill"><span>Talk to us</span></a>
          <button type="button" className={`nhbg ${open ? 'active' : ''}`} onClick={toggleMenu}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mob-overlay">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div id="mob-overlay" className={`mob-overlay ${open ? 'active' : ''}`} aria-hidden={!open}>
        <div className="mob-sec-lbl">Products &amp; Services</div>
        <a href="#services" className="mob-link" onClick={closeMenu}>Services</a>
        <a href="#products" className="mob-link" onClick={closeMenu}>Flagship Products</a>
        <a href="#research" className="mob-link" onClick={closeMenu}>Locana Labs R&D</a>
        <div className="mob-sec-lbl">Company</div>
        <a href="#team"    className="mob-link" onClick={closeMenu}>Our Team</a>
        <a href="#careers" className="mob-link" onClick={closeMenu}>Careers</a>
        <a href="#pricing" className="mob-link" onClick={closeMenu}>Pricing</a>
        <div style={{ marginTop: '40px' }}><a href="#contact" className="btn-fill" style={{ display: 'inline-block' }} onClick={closeMenu}><span>Talk to us</span></a></div>
      </div>
    </>
  );
}
