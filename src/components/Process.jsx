import React from 'react';
import { STEPS } from '../data/constants';

export function Process() {
  return (
    <section id="process" className="sec" aria-labelledby="process-h">
      <div className="sec-in">
        <div className="proc-hd">
          <span className="lbl rv">Our Process</span>
          <h2 id="process-h" className="sh rv">From idea to <em>working software</em></h2>
        </div>
        <ol className="proc-row">
          {STEPS.map((s) => (
            <li className={`proc-s rv ${s.delay}`} key={s.num}>
              <div className="proc-n" aria-hidden="true">{s.num}</div>
              <h4>{s.title}</h4><p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
