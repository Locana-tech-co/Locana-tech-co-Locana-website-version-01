import React from 'react';
import { Link } from 'react-router-dom';

export function CaseStudyBikeRental() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <article className="sec cs-detail-sec" aria-labelledby="cs-detail-h">
        <div className="sec-in">

          {/* Back link */}
          <Link to="/work" className="cs-back rv">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Our Work
          </Link>

          {/* Hero banner */}
          <div className="cs-detail-hero csv2 rv">
            <div className="cs-vis-grid" />
            <div className="cs-vis-glow" />
            <div className="cs-detail-hero-inner">
              <span className="cs-industry">Travel & Mobility</span>
              <h1 id="cs-detail-h" className="cs-detail-title">RideEasy</h1>
              <p className="cs-detail-sub">Full-Stack Bike Rental Website</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="cs-detail-stats rv d1">
            <div className="cs-detail-stat">
              <span className="cs-stat-val">3×</span>
              <span className="cs-stat-lbl">Bookings per day</span>
            </div>
            <div className="cs-detail-stat">
              <span className="cs-stat-val">80%</span>
              <span className="cs-stat-lbl">Less manual work</span>
            </div>
            <div className="cs-detail-stat">
              <span className="cs-stat-val">4wk</span>
              <span className="cs-stat-lbl">Delivered in</span>
            </div>
            <div className="cs-detail-stat">
              <span className="cs-stat-val">2026</span>
              <span className="cs-stat-lbl">Year</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="cs-detail-grid">

            {/* Main content */}
            <div className="cs-detail-main">
              <div className="cs-detail-block rv">
                <h2>The Challenge</h2>
                <p>Content coming soon — this section will describe the client's problem, the manual processes they were using, and the pain points that led them to Locana.</p>
              </div>

              <div className="cs-detail-block rv d1">
                <h2>What We Built</h2>
                <p>Content coming soon — this section will detail the full-stack solution: online booking system, real-time GPS fleet tracking, dynamic pricing engine, Razorpay payment integration, and the rider-facing mobile-optimised interface.</p>
              </div>

              <div className="cs-detail-block rv d2">
                <h2>The Results</h2>
                <p>Content coming soon — this section will cover measurable outcomes: booking volume increase, reduction in manual coordination, customer satisfaction improvements, and time to production.</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="cs-detail-side rv d1">
              <div className="cs-detail-sidebar-box">
                <h3>Tech Stack</h3>
                <div className="p-chips" style={{ marginTop: '1rem' }}>
                  {['React', 'Node.js', 'Razorpay', 'PostgreSQL', 'REST API'].map((t) => (
                    <span className="p-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="cs-detail-sidebar-box" style={{ marginTop: '1.5rem' }}>
                <h3>Services Used</h3>
                <ul className="cs-detail-list">
                  <li>Custom Software Development</li>
                  <li>Website & Landing Page with SEO</li>
                  <li>Automation System</li>
                  <li>API & Systems Integration</li>
                </ul>
              </div>

              <Link to="/contact" className="btn-fill" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>
                <span>Build something similar</span>
              </Link>
            </aside>

          </div>

        </div>
      </article>
    </main>
  );
}
