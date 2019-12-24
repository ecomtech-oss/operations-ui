import React, { ReactNode, useRef, useLayoutEffect } from 'react';
import classnames from 'classnames/bind';

import { useOnDocumentKeyDown } from '../../utils/useOnDocumentKeyDown';
import { useOnEventOutside } from '../../utils/useOnEventOutside';
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

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
};
