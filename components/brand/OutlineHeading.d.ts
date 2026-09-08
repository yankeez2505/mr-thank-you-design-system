import * as React from 'react';

export interface OutlineHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'white' | 'ghost';
  size?: string;
}

export declare function OutlineHeading(props: OutlineHeadingProps): JSX.Element;
