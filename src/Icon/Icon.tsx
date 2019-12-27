import React from 'react';
import cn from 'classnames/bind';

import styles from './Icon.css';

export type IconElement = (props: { className: string }) => JSX.Element;
export type IconSize = 'small' | 'medium';
interface Props {
  /** Размер иконки */
  size?: IconSize;
  /** Дополнительный класс */
  className?: string;
  /** Иконка из пакета @samokat/operations-icons */
  children: IconElement;
}

const cx = cn.bind(styles);

export const Icon = ({
  children: IconComponent,
  size = 'medium',
  className,
}: Props) => {
  return <IconComponent className={cx('icon', size, className)} />;
};
