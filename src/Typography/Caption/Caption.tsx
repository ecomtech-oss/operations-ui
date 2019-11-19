import React from 'react';
import cx from 'classnames';

import { Typography } from '../internal/Typography';
import * as styles from './Caption.css';

interface Props {
  /** Контент */
  children: string | string[];

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
    <Typography className={cx(styles.text, styles[size], className)} tag={tag}>
      {children}
    </Typography>
  );
};
