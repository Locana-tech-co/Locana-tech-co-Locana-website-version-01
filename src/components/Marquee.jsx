import React, { memo } from 'react';
import { MARQUEE_ITEMS } from '../data/constants';

const MarqueeTrack = memo(() => (
  <div className="mq-i" aria-hidden="true">
    {MARQUEE_ITEMS.map((t, i) => <React.Fragment key={i}>{t}<span className="mq-dot">✦</span></React.Fragment>)}
  </div>
));
MarqueeTrack.displayName = 'MarqueeTrack';

export function Marquee() {
  return (
    <div className="mq-bar" role="marquee" aria-label="Services ticker">
      <div className="mq-t"><MarqueeTrack /><MarqueeTrack /></div>
    </div>
  );
}
