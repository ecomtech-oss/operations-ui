import React from 'react';
import classnames from 'classnames/bind';

import { Typography } from '../internal/Typography';
import styles from './Text.css';

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

  /** Должен ли текст быть жирным */
  bold?: boolean;
}

export const Text = ({
  children,
  className,
  tag = 'span',
  bold = false,
  size = 'normal',
}: Props) => {
  return (
    <Typography className={cx('text', size, { bold }, className)} tag={tag}>
      {children}
    </Typography>
  );
};
