import React from 'react';
import classnames from 'classnames/bind';

import { Typography } from '../internal/Typography';
import styles from './Title.css';

const cx = classnames.bind(styles);

interface Props {
  /** Контент */
  children: React.ReactNode;

  /** Дополнительный класс */
  className?: string;

  /** Тег, в который будет срендерен компонент */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  /** Размер текста */
  size?: 'small' | 'normal';

  /** Должен ли заголовок быть жирным */
  bold?: boolean;
}

export const Title = ({
  children,
  className,
  tag = 'span',
  bold = false,
  size = 'small',
}: Props) => {
  return (
    <Typography className={cx('title', size, { bold }, className)} tag={tag}>
      {children}
    </Typography>
  );
};
