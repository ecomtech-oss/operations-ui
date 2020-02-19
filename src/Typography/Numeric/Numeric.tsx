import React from 'react';
import classnames from 'classnames/bind';

import { Typography } from '../internal/Typography';
import styles from './Numeric.css';

const cx = classnames.bind(styles);

interface Props {
  /** Контент */
  children: number;

  /** Дополнительный класс */
  className?: string;

  /** Тег, в который будет срендерен компонент */
  tag?: 'p' | 'span';

  /** Жирный шрифт */
  bold?: boolean;

  /** Валюта */
  currency?: 'RUB' | 'USD' | 'EUR';
}

export const Numeric = ({
  children,
  className,
  currency,
  bold = false,
  tag = 'span',
}: Props) => {
  const formattedNumber = children.toLocaleString(
    'ru-RU',
    currency && { style: 'currency', currency },
  );

  return (
    <Typography className={cx('numeric', { bold }, className)} tag={tag}>
      {formattedNumber}
    </Typography>
  );
};
