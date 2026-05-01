import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/constants';

export function CaseStudies() {
  const [active, setActive] = useState('All');
  const filters = ['All', ...Array.from(new Set(CASE_STUDIES.map((c) => c.industry)))];
  const visible = active === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.industry === active);

  return (
    <section id="work" className="sec cs-sec" aria-labelledby="cs-h">
      <div className="sec-in">
        {/* Header */}
        <div className="cs-hd">
          <span className="lbl rv">Our Work</span>
          <h2 id="cs-h" className="sh rv">Engineering<br /><em>Portfolio</em></h2>
          <p className="sdesc rv">A selection of solutions we've built for ambitious businesses. <br/><strong>Please Note: The projects displayed below are for marketing and demonstration purposes.</strong></p>
        </div>

        {/* Filter pills */}
        <div className="cs-filters rv d1" role="tablist" aria-label="Filter case studies by industry">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`cs-pill ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="cs-grid">
          {visible.map((c, i) => (
            <article
              key={c.slug}
              className={`cs-card rv ${i === 0 ? '' : i % 3 === 0 ? '' : `d${Math.min(i % 3, 4)}`}`}
              aria-label={c.title}
            >
              {/* Visual panel */}
              <div className={`cs-vis ${c.vis}`} aria-hidden="true">
                <div className="cs-vis-grid" />
                <div className="cs-vis-glow" />
                <span className="cs-vis-label">{c.label}</span>
              </div>

              {/* Body */}
              <div className="cs-body">
                <div className="cs-meta">
                  <span className="cs-industry">{c.industry}</span>
                </div>
                <h3 className="cs-title">{c.title}</h3>
                <p className="cs-desc">{c.desc}</p>

                {/* Stats Removed as requested */}

                {/* Tags */}
                <div className="p-chips cs-chips">
                  {c.tags.map((t) => <span className="p-chip" key={t}>{t}</span>)}
                </div>

                <Link to={c.slug === 'bike-rental' ? '/work/bike-rental' : '/contact'} className="cs-cta">
                  <span>{c.slug === 'bike-rental' ? 'View Case Study' : 'Discuss a similar project'}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cs-bottom rv">
          <p className="cs-bottom-txt">Have a project in mind? Let's talk about what we can build together.</p>
          <Link to="/contact" className="btn-fill"><span>Start a Project</span></Link>
        </div>
      </div>
    </section>
  );
}
