import * as React from 'react';

export interface DotPaginationProps extends React.HTMLAttributes<HTMLElement> {
  count: number;
  active?: number;
}

export declare function DotPagination(props: DotPaginationProps): JSX.Element;
