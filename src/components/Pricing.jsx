import React from 'react';
import { PLANS } from '../data/constants';

export function Pricing() {
  return (
    <section id="pricing" className="sec" style={{ background: 'var(--bg2)' }} aria-labelledby="pricing-h">
      <div className="sec-in">
        <div className="pr-hd">
          <span className="lbl rv">Engagement Models</span>
          <h2 id="pricing-h" className="sh rv">Tailored to your <em>scale</em></h2>
          <p className="sdesc rv">We skip the sticker shock and build solutions mapped strictly to your operational ROI.</p>
        </div>
        <div className="pr-g">
          {PLANS.map((p) => (
            <div className={`pr-c ${p.featured ? 'feat' : ''} rv ${p.delay}`} key={p.name}>
              {p.label && <span className="pr-pop">{p.label}</span>}
              <div className="pr-plan">{p.tier}</div>
              <div className="pr-val">{p.name}</div>
              <p className="pr-desc">{p.desc}</p>
              <hr className="ph" />
              <ul className="pr-ul">
                {p.features.map((f) => <li className="pf" key={f}><span className="pchk" aria-hidden="true">✓</span>{f}</li>)}
              </ul>
              {p.featured
                ? <a href="#contact" className="btn-fill"  style={{ display: 'flex', justifyContent: 'center' }}><span>{p.cta}</span></a>
                : <a href="#contact" className="btn-ghost" style={{ display: 'flex', justifyContent: 'center' }}>{p.cta}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
