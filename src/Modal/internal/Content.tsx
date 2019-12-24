import React, { ReactNode, useRef } from 'react';
import classnames from 'classnames/bind';

import { useOnDocumentKeyDown } from '../../utils/useOnDocumentKeyDown';
import { useOnEventOutside } from '../../utils/useOnEventOutside';
import { useLockBodyScroll } from './useLockBodyScroll';
import * as styles from './Content.css';

const cx = classnames.bind(styles);

interface Props {
  children: ReactNode;
  onDismiss: () => void;
}

export const Content = ({ children, onDismiss }: Props) => {
  const modalRef = useRef<HTMLDivElement>();

  useOnDocumentKeyDown(e => {
    if (e.key === 'Escape') {
      onDismiss();
    }
  });

  useOnEventOutside(modalRef, 'mousedown', onDismiss);
  useLockBodyScroll();

  return (
    <div className={cx('content')} ref={modalRef}>
      {children}
    </div>
  );
};
