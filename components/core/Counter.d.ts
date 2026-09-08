import * as React from 'react';

export interface CounterProps extends React.HTMLAttributes<HTMLElement> {
  style?: 'solid' | 'flat';
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  variant?: 'number' | 'dot';
}

export declare function Counter(props: CounterProps): JSX.Element;
