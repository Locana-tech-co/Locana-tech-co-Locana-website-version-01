import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNeuralCanvas } from '../hooks/useNeuralCanvas';

export function Hero() {
  const ref = useRef(null);
  // useNeuralCanvas(ref, 'hero', { nodeCount: 75, speed: .38, linkDist: 170, glowR: 6.5 });

  return (
    <section id="hero" aria-label="Hero">
      <div className="h-atmo" aria-hidden="true" /><div className="h-grain" aria-hidden="true" />
      {/* <canvas id="hero-nn" ref={ref} aria-hidden="true" /> */}
      
      {/* Premium Animated Mesh Gradient Background */}
      <div className="hero-mesh-bg" aria-hidden="true">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>

      <div className="h-vig" aria-hidden="true" />
      
      <div className="h-content">
        {/* Elite Software badge removed as requested */}
        <h1 className="mega">We engineer<br /><em>digital</em> <span className="rose-w">monopolies.</span></h1>
        <p className="h-sub">Custom software and high-converting web architecture<br />for global brands scaling past 7 figures.</p>
        <div className="h-btns">
          <Link to="/contact" className="btn-hero-w">Book a Meeting</Link>
          <Link to="/services" className="btn-hero-o">Explore Services</Link>
        </div>
      </div>
      
      <div className="h-scroll" aria-hidden="true"><span>Scroll</span><div className="h-scroll-line" /></div>
    </section>
  );
}
