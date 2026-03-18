import React from 'react';
import { APPS, BRANCHES } from '../data/constants';

export function Integration() {
  return (
    <section id="integration" className="sec" style={{ background: 'var(--bg2)' }} aria-labelledby="integration-h">
      <div className="sec-in">
        <div className="int-hd rv">
          <span className="lbl">Integrations</span>
          <h2 id="integration-h" className="sh">100+ <em>Business Apps</em></h2>
          <p className="sdesc">Connect every tool your business relies on. Locana routes intelligence across your entire stack, seamlessly.</p>
        </div>
        <div className="tree-container rv d1" aria-hidden="true">
          <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="tree-svg" style={{ overflow: 'visible' }}>
            <defs>
              <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="var(--rose)" stopOpacity="0" />
                <stop offset="90%"  stopColor="var(--rose)" stopOpacity="1" />
                <stop offset="100%" stopColor="#fff"        stopOpacity="1" />
              </linearGradient>
              <linearGradient id="starGradientVert" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="var(--rose)" stopOpacity="0" />
                <stop offset="90%"  stopColor="var(--rose)" stopOpacity="1" />
                <stop offset="100%" stopColor="#fff"        stopOpacity="1" />
              </linearGradient>
            </defs>
            {BRANCHES.map((b, i) => <path key={i} d={b.d} className="tree-branch" />)}
            <line x1="200" y1="280" x2="200" y2="340" className="tree-branch" />
            {BRANCHES.map((b, i) => <path key={i} d={b.d} className="tree-star" style={{ '--delay': b.delay }} />)}
            <line x1="200" y1="280" x2="200" y2="340" className="tree-star-vert" style={{ '--delay': '2.6s' }} />
          </svg>
          <div className="tree-apps">
            {APPS.map((a, i) => (
              <div className="t-app" key={i}>
                <div className="t-ripple" style={{ '--delay': a.delay }} />
                <div className="t-icon">
                  <img src={a.src} alt={a.alt} loading="lazy" crossOrigin="anonymous"
                    onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
                </div>
              </div>
            ))}
          </div>
          <div className="t-hub">
            <img src="/logo.png" alt="Locana" className="locana-logo-img t-hub-img" width="32" height="32" />
          </div>
        </div>
        <div className="int-cta-w rv d2" style={{ marginTop: '3.5rem' }}>
          <a href="#contact" className="int-cta"><span>Discuss Your Stack</span></a>
        </div>
        <p className="int-note rv d3">No lock-in · Connects to your stack in hours</p>
      </div>
    </section>
  );
}
