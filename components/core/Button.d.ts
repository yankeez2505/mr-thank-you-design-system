import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  style?: 'primary' | 'secondary' | 'tertiary' | 'link';
  type?: 'primary' | 'danger' | 'success' | 'dark' | 'white';
  size?: 'small' | 'large';
  variant?: 'icon';
  disabled?: boolean;
}

export declare function Button(props: ButtonProps): JSX.Element;
