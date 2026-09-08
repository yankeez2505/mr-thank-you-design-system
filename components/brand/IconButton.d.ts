import * as React from 'react';

export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'pink' | 'cream' | 'white';
  label: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
