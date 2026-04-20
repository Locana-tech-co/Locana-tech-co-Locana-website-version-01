import React, { useRef } from 'react';
import { STEPS } from '../data/constants';
import { useAnimatedLine } from '../hooks/useAnimatedLine';
import { useDiagonalReveal } from '../hooks/useDiagonalReveal';

export function Process() {
  const lineRef = useRef(null);
  const gridRef = useRef(null);
  useAnimatedLine(lineRef);
  useDiagonalReveal(gridRef, '.proc-s');

  return (
    <section id="process" className="sec" aria-labelledby="process-h">
      <div className="sec-in">
        <div className="proc-hd">
          <span className="lbl rv">Our Process</span>
          <h2 id="process-h" className="sh rv">From idea to <em>working software</em></h2>
        </div>

        {/* Animated connector line */}
        <div className="proc-line-wrap" ref={lineRef} aria-hidden="true">
          <svg className="proc-line-svg" viewBox="0 0 1000 2" preserveAspectRatio="none">
            <path d="M 0 1 L 1000 1" className="anim-path proc-connector" />
          </svg>
        </div>

        <ol className="proc-row" ref={gridRef}>
          {STEPS.map((s, i) => (
            <li className={`proc-s dr`} key={s.num} style={{ '--dr-delay': `${i * 0.12}s` }}>
              <div className="proc-n" aria-hidden="true">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
