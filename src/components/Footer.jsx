import React from 'react';
import { FOOTER_COLS } from '../data/constants';

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="ft-g">
        <div>
          <a href="#hero" className="ft-brand" aria-label="Locana — back to top">
            <img src="/logo.png"        alt=""       className="locana-logo-img ft-logo-img" width="28" height="28" />
            <img src="/locana-text.png" alt="Locana" className="locana-text-img ft-text-img" width="108" height="18" />
          </a>
          <p className="ft-desc">Grow Smarter with Time. Custom software, intelligent automation, and AI-powered products for ambitious businesses.</p>
        </div>
        {Object.entries(FOOTER_COLS).map(([title, { hrefs, labels }]) => (
          <nav className="ft-col" key={title} aria-label={`${title} links`}>
            <h5>{title}</h5>
            <ul>{labels.map((l, i) => <li key={l}><a href={hrefs[i]}>{l}</a></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="ft-bot">
        <p>© 2026 Locana · <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Grow Smarter with Time</em></p>
        <div className="ft-soc">
          {['in','𝕏','gh','yt'].map((h) => <a href="#contact" className="fsoc" key={h} aria-label={h} rel="noopener noreferrer">{h}</a>)}
        </div>
      </div>
    </footer>
  );
}
