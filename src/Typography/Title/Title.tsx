import React from 'react';
import cx from 'classnames';

import { Typography } from '../internal/Typography';
import * as styles from './Title.css';

interface Props {
  /** Контент */
  children: string | string[];

  /** Дополнительный класс */
  className?: string;

  /** Тег, в который будет срендерен компонент */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  /** Должен ли заголовок быть жирным */
  bold?: boolean;
}

export const Title = ({
  children,
  className,
  tag = 'span',
  bold = false,
}: Props) => {
  const weight = bold ? 'bold' : 'normal';

  return (
    <Typography
      className={cx(styles.title, styles[weight], className)}
      tag={tag}
    >
      {children}
    </Typography>
  );
};
