import React, { MouseEvent } from 'react';
import cn from 'classnames/bind';

import * as styles from './ClearButton.css';

const cx = cn.bind(styles);

interface Props {
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  className: string;
}

export const ClearButton = ({ onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={cx('button', className)} type="button">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" fill="#C4CCD4" />
        <path
          d="M6 6L10 10"
          stroke="#F0F2F5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 6L6 10"
          stroke="#F0F2F5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
