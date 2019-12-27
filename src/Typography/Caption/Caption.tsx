import React from 'react';
import classnames from 'classnames/bind';

import { Typography } from '../internal/Typography';
import styles from './Caption.css';

const cx = classnames.bind(styles);

interface Props {
  /** Контент */
  children: React.ReactNode;

  /** Дополнительный класс */
  className?: string;

  /** Тег, в который будет срендерен компонент */
  tag?: 'p' | 'span';

  /** Размер текста */
  size?: 'small' | 'normal';
}

export const Caption = ({
  children,
  className,
  tag = 'span',
  size = 'normal',
}: Props) => {
  return (
    <Typography className={cx('text', size, className)} tag={tag}>
      {children}
    </Typography>
  );
};
