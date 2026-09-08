import * as React from 'react';

export interface SubscribeFormProps extends React.HTMLAttributes<HTMLElement> {
  placeholder?: string;
  cta?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export declare function SubscribeForm(props: SubscribeFormProps): JSX.Element;
