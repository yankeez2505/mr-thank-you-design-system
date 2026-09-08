import * as React from 'react';

export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  image: string;
  title: string;
  cta?: string;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
