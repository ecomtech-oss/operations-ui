import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { Caption } from '../../Typography';
import * as styles from './ErrorText.css';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  children: ReactNode;
}

export const ErrorText = ({ className, children }: Props) => {
  return <Caption className={cx('wrapper', className)}>{children}</Caption>;
};
