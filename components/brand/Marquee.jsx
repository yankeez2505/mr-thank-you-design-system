import { Fragment } from 'react';

export function Marquee({ items }) {
  return (
    <div className="marquee"><div className="marquee__track">{[...items, ...items].map((t, i) => (<Fragment key={i}><span className="marquee__item">{t}</span><span className="marquee__dot" /></Fragment>))}</div></div>
  );
}
