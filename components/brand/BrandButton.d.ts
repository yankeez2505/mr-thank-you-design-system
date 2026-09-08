import * as React from 'react';

export interface BrandButtonProps extends React.HTMLAttributes<HTMLElement> {
  tone?: 'pink' | 'mint';
}

export declare function BrandButton(props: BrandButtonProps): JSX.Element;
