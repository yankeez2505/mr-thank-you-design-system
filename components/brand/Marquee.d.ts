import * as React from 'react';

export interface MarqueeProps extends React.HTMLAttributes<HTMLElement> {
  items: string[];
}

export declare function Marquee(props: MarqueeProps): JSX.Element;
