import React, { SVGProps } from 'react';
import cn from 'classnames/bind';

import * as styles from './Icon.css';

interface Props {
  size?: 'small' | 'medium';
  className?: string;
  type(props: SVGProps<SVGElement>): JSX.Element;
}

const cx = cn.bind(styles);

export const Icon = ({ type: Type, size = 'medium', className }: Props) => {
  return <Type className={cx('icon', size, className)} />;
};
