import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames/bind';

import * as styles from './Overlay.css';
import { CONTAINER_ID } from './ModalContainer';

const cx = classnames.bind(styles);

interface Props {
  open: boolean;
  children: ReactNode;
}

export const Overlay = ({ open, children }: Props) => {
  if (!open) {
    return null;
  }

  const container = document.getElementById(CONTAINER_ID);
  const element = <div className={cx('overlay')}>{children}</div>;

  if (!container) {
    return element;
  }

  return createPortal(element, container);
};
