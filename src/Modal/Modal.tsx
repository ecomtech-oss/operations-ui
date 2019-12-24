import React, { ReactNode } from 'react';

import { Overlay } from './internal/Overlay';
import { Content } from './internal/Content';
import './Modal.css';

interface Props {
  /** Содержимое модального окна */
  children: ReactNode;
  /** Открыто ли окно? */
  open: boolean;
  /** Колбэк, вызывается при нажатии на Escape или клике на оверлей */
  onDismiss: () => void;
}

export const Modal = ({ open, children, onDismiss }: Props) => {
  return (
    <Overlay open={open}>
      {open && <Content onDismiss={onDismiss}>{children}</Content>}
    </Overlay>
  );
};
