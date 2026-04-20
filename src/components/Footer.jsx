import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_COLS } from '../data/constants';

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="ft-g">
        <div>
          <Link to="/" className="ft-brand" aria-label="Locana — back to top">
            <img src="/logo.png"        alt=""       className="locana-logo-img ft-logo-img" width="28" height="28" />
            <img src="/locana-text.png" alt="Locana" className="locana-text-img ft-text-img" width="108" height="18" />
          </Link>
          <p className="ft-desc">Grow Smarter with Time. Custom software, intelligent automation, and AI-powered products for ambitious businesses.</p>
        </div>
        {Object.entries(FOOTER_COLS).map(([title, { hrefs, labels }]) => (
          <nav className="ft-col" key={title} aria-label={`${title} links`}>
            <h5>{title}</h5>
            <ul>
              {labels.map((l, i) => (
                <li key={l}>
                  <Link to={hrefs[i]}>{l}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="ft-bot">
        <p>© 2026 Locana · <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Grow Smarter with Time</em></p>
        <div className="ft-soc">
          <a href="https://www.linkedin.com/company/bil-nil/" className="fsoc" aria-label="Locana on LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
          <a href="https://linkedin.com" className="fsoc" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer">𝕏</a>
          <a href="https://linkedin.com" className="fsoc" aria-label="GitHub" target="_blank" rel="noopener noreferrer">gh</a>
        </div>
      </div>
    </footer>
  );
}
