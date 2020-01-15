import { useLayoutEffect } from 'react';

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
};
