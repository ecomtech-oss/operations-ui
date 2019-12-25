import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputProps<P> = Partial<
  P &
    Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'size'
    >
>;
