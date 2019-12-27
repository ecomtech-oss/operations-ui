import React, { ReactNode, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import classnames from 'classnames/bind';

import { useOnDocumentKeyDown } from '../../utils/useOnDocumentKeyDown';
import { useOnEventOutside } from '../../utils/useOnEventOutside';
import { useLockBodyScroll } from './useLockBodyScroll';
import styles from './Content.css';

const cx = classnames.bind(styles);

interface Props {
  children: ReactNode | (() => ReactNode);
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

  const renderedChildren =
    typeof children === 'function' ? children() : children;

  return (
    <FocusLock>
      {/*
        Content container is tabable (due to tabIndex={0}).
        In this case, if we have no tabable elements inside, focus will be trapped anyway.
      */}
      <div role="dialog" tabIndex={0} className={cx('content')} ref={modalRef}>
        {renderedChildren}
      </div>
    </FocusLock>
  );
};
