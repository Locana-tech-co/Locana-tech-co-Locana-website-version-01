import React, { useRef } from 'react';
import { TEAM } from '../data/constants';
import { useNeuralCanvas } from '../hooks/useNeuralCanvas';

export function Team() {
  const ref = useRef(null);
  useNeuralCanvas(ref, 'team', { nodeCount: 115, speed: .48, linkDist: 155, glowR: 8, sparks: true });
  return (
    <section id="team" aria-labelledby="team-h">
      <canvas id="nn-cv" ref={ref} aria-hidden="true" />
      <div className="team-in"><div className="sec-in">
        <span className="lbl rv">Our People</span>
        <h2 id="team-h" className="sh rv">The minds behind <em>Locana</em></h2>
        <p className="sdesc rv">Engineers, designers, and strategists obsessed with building technology that makes businesses grow smarter.</p>
        <div className="t-grid">
          {TEAM.map((m) => (
            <div className={`tm rv ${m.delay}`} key={m.name}>
              <div className="tm-ph" aria-hidden="true">
                <div className="tm-bg" style={{ background: m.bg }} />
                <div className="tm-ini">{m.initials}</div>
                <div className="tm-ov">{m.socials.map((s) => <a href="#contact" className="tm-sl" key={s} aria-label={`${m.name} — ${s}`}>{s}</a>)}</div>
              </div>
              <div className="tm-info">
                <div className="tm-nm">{m.name}</div>
                <div className="tm-rl">{m.role}</div>
                <div className="tm-bio">{m.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div></div>
    </section>
  );
}
