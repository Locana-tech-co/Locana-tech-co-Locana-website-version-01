import React from 'react';
import { PRODUCTS } from '../data/constants';

export function Products() {
  return (
    <section id="products" className="sec" aria-labelledby="products-h">
      <div className="sec-in">
        <span className="lbl rv">Our Products</span>
        <h2 id="products-h" className="sh rv">Built by us,<br /><em>used by Many</em></h2>
        <div className="prod-g">
          {PRODUCTS.map((p) => (
            <article className={`prod-c ${p.layout} rv`} key={p.name}>
              <div className={`pvis ${p.vis}`} aria-hidden="true"><div className="pv-g" /><div className="pv-n">{p.name}</div></div>
              <div className="p-body">
                <span className="p-tag">{p.tag}</span>
                <h3>{p.title}</h3><p>{p.desc}</p>
                <div className="p-chips">{p.chips.map((c) => <span className="p-chip" key={c}>{c}</span>)}</div>
                <a href="#contact" className="p-lnk">{p.link}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
