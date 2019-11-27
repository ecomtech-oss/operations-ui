import React from 'react';
import cn from 'classnames/bind';

import * as styles from './Icon.css';

interface Props {
  /** Размер иконки */
  size?: 'small' | 'medium';
  /** Дополнительный класс */
  className?: string;
  /** Иконка из пакета @samokat/operations-icons */
  children(props: { className: string }): JSX.Element;
}

const cx = cn.bind(styles);

export const Icon = ({
  children: IconComponent,
  size = 'medium',
  className,
}: Props) => {
  return <IconComponent className={cx('icon', size, className)} />;
};
