import React from 'react';
import cx from 'classnames';

import * as styles from './Typography.css';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface Props {
  children: string | string[];
  className?: string;
  tag?: TypographyTag;
}

export const Typography = ({ children, className, tag }: Props) => {
  const Tag: TypographyTag = tag || 'span';

  return <Tag className={cx(styles.typography, className)}>{children}</Tag>;
};
