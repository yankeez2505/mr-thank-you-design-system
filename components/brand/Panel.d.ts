import * as React from 'react';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  noise?: boolean;
}

export declare function Panel(props: PanelProps): JSX.Element;
