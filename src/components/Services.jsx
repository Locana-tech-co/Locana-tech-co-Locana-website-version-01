import React from 'react';
import { SERVICES } from '../data/constants';

export function Services() {
  return (
    <section id="services" className="sec" aria-labelledby="services-h">
      <div className="sec-in"><div className="svc-lay">
        <div className="svc-left">
          <span className="lbl rv">What We Build</span>
          <h2 id="services-h" className="sh rv">Software &amp;<br /><em>systems that work</em></h2>
          <p className="sdesc rv">From custom platforms to end-to-end automation — digital infrastructure that scales without friction, built around your real operations.</p>
        </div>
        <div className="svc-rows rv">
          {SERVICES.map((s) => (
            <div className="svc-r" key={s.num}>
              <span className="svc-n" aria-hidden="true">{s.num}</span>
              <div className="svc-b"><h3>{s.title}</h3><p>{s.desc}</p></div>
              <span className="svc-ar" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div></div>
    </section>
  );
}
