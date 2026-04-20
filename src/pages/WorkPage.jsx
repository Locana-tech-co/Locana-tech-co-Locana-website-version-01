import React from 'react';
import { Link } from 'react-router-dom';

export function WorkPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="sec" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="sec-in" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="lbl rv">Our Work</span>
          <h1 className="sh rv" style={{ marginBottom: '1.5rem' }}>
            Real projects,<br /><em>measurable results</em>
          </h1>
          <p className="sdesc rv" style={{ margin: '0 auto 3rem', maxWidth: '600px' }}>
            We are building custom software, websites, and automation systems for ambitious businesses across industries. Explore our case studies to see how we solve real problems.
          </p>

          <div className="rv d1" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/work/case-studies" className="btn-fill">
              <span>View All Case Studies</span>
            </Link>
            <Link to="/work/bike-rental" className="btn-ghost" style={{ padding: '14px 32px' }}>
              Featured: Bike Rental Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
