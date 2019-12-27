import React from 'react';
import classnames from 'classnames/bind';

import styles from './Typography.css';

const cx = classnames.bind(styles);

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface Props {
  children: React.ReactNode;
  className?: string;
  tag?: TypographyTag;
}

export const Typography = ({ children, className, tag }: Props) => {
  const Tag: TypographyTag = tag || 'span';

  return <Tag className={cx('typography', className)}>{children}</Tag>;
};
