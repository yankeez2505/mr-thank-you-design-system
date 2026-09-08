import * as React from 'react';

export interface NavPillProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  active?: boolean;
}

export declare function NavPill(props: NavPillProps): JSX.Element;
