import React from 'react';

export function Research() {
  return (
    <section id="research" className="sec" style={{ background: 'var(--bg2)' }} aria-labelledby="research-h">
      <div className="sec-in"><div className="res-grid">
        <div className="res-txt">
          <span className="lbl rv">R&amp;D Department</span>
          <h2 id="research-h" className="sh rv">Locana <em>Labs</em></h2>
          <p className="sdesc rv">We don't just use existing tech — we research the frontier. Our R&D division explores distributed systems, LLM fine-tuning, and next-generation computer vision to bring cutting-edge advantages to our enterprise partners.</p>
          <div className="p-chips rv d1" style={{ marginTop: '1.5rem' }}>
            <span className="p-chip">Neural Architectures</span>
            <span className="p-chip">Proprietary Datasets</span>
            <span className="p-chip">Edge AI</span>
          </div>
          <a href="#contact" className="btn-ghost rv d2" style={{ marginTop: '2rem', display: 'inline-block' }}>Partner on Research</a>
        </div>
        <div className="prod-c rv d1" aria-label="Project Mano — In Development">
          <div className="pvis pv4" style={{ minHeight: '300px' }}>
            <div className="pv-g" aria-hidden="true" />
            <div className="pv-n" style={{ fontSize: '2rem', textAlign: 'center' }}>
              <span style={{ fontSize: '1rem', display: 'block', marginBottom: '10px', color: 'var(--rose)', letterSpacing: '.2em', textTransform: 'uppercase' }}>In Development</span>
              Project<br /><em>Mano</em>
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}
