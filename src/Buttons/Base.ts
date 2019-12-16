import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonAttr = ButtonHTMLAttributes<HTMLButtonElement>;
type DetailedProps = DetailedHTMLProps<ButtonAttr, HTMLButtonElement>;

export type BaseButtonsProps = Partial<DetailedProps>;
