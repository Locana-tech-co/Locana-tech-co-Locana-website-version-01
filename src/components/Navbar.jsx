import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { scrollLock } from '../utils/scrollLock';

const ChevronDown = () => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const navigate                = useNavigate();

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

  const goTo = useCallback((path) => {
    closeMenu();
    navigate(path);
  }, [closeMenu, navigate]);

  return (
    <>
      <header id="nav" className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="nav-pill nav-left">
          <Link to="/" className="nlogo" aria-label="Locana home">
            <img src="/logo.png"        alt=""       className="locana-logo-img" width="32"  height="32" />
            <img src="/locana-text.png" alt="Locana" className="locana-text-img" width="120" height="20" />
          </Link>
          <nav aria-label="Main navigation">
            <ul className="n-menu">

              {/* Services dropdown */}
              <li className="n-item">
                <NavLink to="/services" className="n-link">Services <ChevronDown /></NavLink>
                <div className="dp-pane" role="menu">
                  <Link to="/services" className="dp-link" role="menuitem">
                    <div className="dp-title">Services</div>
                    <div className="dp-desc">Custom software and intelligent automation built for scale.</div>
                  </Link>
                  <Link to="/services#integration" className="dp-link" role="menuitem">
                    <div className="dp-title">Integrations</div>
                    <div className="dp-desc">Connect your entire tech stack into one unified system.</div>
                  </Link>
                  <Link to="/services#process" className="dp-link" role="menuitem">
                    <div className="dp-title">Our Process</div>
                    <div className="dp-desc">From idea to working software — how we build.</div>
                  </Link>
                </div>
              </li>

              {/* Our Work */}
              <li className="n-item">
                <NavLink to="/work" className="n-link">Our Work</NavLink>
              </li>

              {/* Company dropdown */}
              <li className="n-item">
                <NavLink to="/company" className="n-link">Company <ChevronDown /></NavLink>
                <div className="dp-pane" role="menu">
                  <Link to="/company" className="dp-link" role="menuitem">
                    <div className="dp-title">Our Team</div>
                    <div className="dp-desc">The engineers and strategists behind the technology.</div>
                  </Link>
                  <Link to="/company#careers" className="dp-link" role="menuitem">
                    <div className="dp-title">Careers</div>
                    <div className="dp-desc">Join us in building the future of software and AI.</div>
                  </Link>
                </div>
              </li>

              {/* Pricing */}
              <li className="n-item">
                <NavLink to="/pricing" className="n-link">Pricing</NavLink>
              </li>

            </ul>
          </nav>
        </div>

        <div className="nav-pill nav-right">
          <Link to="/contact" className="btn-ghost">Contact</Link>
          <Link to="/contact" className="btn-fill"><span>Talk to us</span></Link>
          <button
            type="button"
            className={`nhbg ${open ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mob-overlay"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div id="mob-overlay" className={`mob-overlay ${open ? 'active' : ''}`} aria-hidden={!open}>
        <div className="mob-sec-lbl">Navigation</div>
        <button className="mob-link" onClick={() => goTo('/')}>Home</button>
        <button className="mob-link" onClick={() => goTo('/services')}>Services</button>
        <button className="mob-link" onClick={() => goTo('/work')}>Our Work</button>
        <button className="mob-link" onClick={() => goTo('/pricing')}>Pricing</button>
        <div className="mob-sec-lbl">Company</div>
        <button className="mob-link" onClick={() => goTo('/company')}>Our Team</button>
        <button className="mob-link" onClick={() => goTo('/company#careers')}>Careers</button>
        <div style={{ marginTop: '40px' }}>
          <button className="btn-fill" style={{ display: 'inline-block' }} onClick={() => goTo('/contact')}>
            <span>Talk to us</span>
          </button>
        </div>
      </div>
    </>
  );
}
