import React from 'react';
import cn from 'classnames/bind';

import * as styles from './Icon.css';

interface Props {
  /** Размер иконки, по умолчанию medium */
  size?: 'small' | 'medium';
  /** Дополнительный класс */
  className?: string;
  /** Иконка */
  children(props: { className: string }): JSX.Element;
}

const cx = cn.bind(styles);

const Icon = ({
  children: IconComponent,
  size = 'medium',
  className,
}: Props) => {
  return <IconComponent className={cx('icon', size, className)} />;
};

export default Icon;
