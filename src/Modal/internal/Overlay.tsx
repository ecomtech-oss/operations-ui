import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames/bind';

import * as styles from './Overlay.css';

const cx = classnames.bind(styles);

interface Props {
  open: boolean;
  children: ReactNode;
  container: Element | string | null;
}

export const Overlay = ({ open, children, container }: Props) => {
  if (!open) {
    return null;
  }

  const element = <div className={cx('overlay')}>{children}</div>;

  if (!container) {
    return element;
  }

  if (typeof container !== 'string') {
    return createPortal(element, container);
  }

  const realContainer = document.getElementById(container);

  if (!realContainer) {
    return element;
  }

  return createPortal(element, realContainer);
};
