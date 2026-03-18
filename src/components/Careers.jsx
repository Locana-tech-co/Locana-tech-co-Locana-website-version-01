import React from 'react';
import { JOBS } from '../data/constants';

export function Careers() {
  return (
    <section id="careers" className="sec" style={{ background: 'var(--bg2)' }} aria-labelledby="careers-h">
      <div className="sec-in">
        <span className="lbl rv">Careers</span>
        <h2 id="careers-h" className="sh rv">Build the future <em>with us</em></h2>
        <p className="sdesc rv">We're always looking for exceptional engineers, AI researchers, and designers to join our core team in India.</p>
        <div className="job-list" role="list">
          {JOBS.map((j) => (
            <div className={`job-row rv ${j.delay}`} key={j.title} role="listitem">
              <div className="job-info">
                <h4>{j.title}</h4>
                <div className="job-meta">{j.location} <span aria-hidden="true">•</span> {j.type} <span aria-hidden="true">•</span> {j.dept}</div>
              </div>
              <a href="mailto:varunrajss07@gmail.com" className="job-ar" aria-label={`Apply for ${j.title}`}>Apply →</a>
            </div>
          ))}
        </div>
        <div className="rv d4" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--f)', fontSize: '1rem', color: 'var(--body)', marginBottom: '1rem' }}>Don't see a role that fits? Send us your portfolio.</p>
          <a href="mailto:varunrajss07@gmail.com" className="btn-ghost">varunrajss07@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
