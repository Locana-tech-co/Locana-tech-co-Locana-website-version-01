import React, { useRef } from 'react';
import { TEAM } from '../data/constants';
import { useNeuralCanvas } from '../hooks/useNeuralCanvas';

export function Team() {
  const canvasRef = useRef(null);
  useNeuralCanvas(canvasRef, 'team', { nodeCount: 115, speed: .48, linkDist: 155, glowR: 8, sparks: true });

  return (
    <section id="team" aria-labelledby="team-h">
      <canvas id="nn-cv" ref={canvasRef} aria-hidden="true" />
      <div className="team-in"><div className="sec-in">
        <span className="lbl rv">Our People</span>
        <h2 id="team-h" className="sh rv">The minds behind <em>Locana</em></h2>
        <p className="sdesc rv">Engineers, designers, and strategists obsessed with building technology that makes businesses grow smarter.</p>

        {/* 9-part grid reveal — each card clips in from its corner */}
        <div className="t-grid">
          {TEAM.map((m, i) => (
            <div
              className={`tm rv tm-reveal`}
              key={m.name}
              style={{ '--reveal-delay': `${i * 0.1}s`, '--reveal-origin': REVEAL_ORIGINS[i % 9] }}
            >
              <div className="tm-ph" aria-hidden="true">
                <div className="tm-bg" style={{ background: m.bg }} />
                <div className="tm-ini">{m.initials}</div>
                <div className="tm-ov">
                  {m.socials.map((s) => (
                    <a href={s.url} className="tm-sl" key={s.label} aria-label={`${m.name} on LinkedIn`} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  ))}
                </div>
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

// 9-part reveal origins — top-left, top, top-right, left, center, right, bottom-left, bottom, bottom-right
const REVEAL_ORIGINS = [
  '-24px -24px',  // top-left
  '0px -24px',    // top
  '24px -24px',   // top-right
  '-24px 0px',    // left
  '0px 0px',      // center
  '24px 0px',     // right
  '-24px 24px',   // bottom-left
  '0px 24px',     // bottom
  '24px 24px',    // bottom-right
];
