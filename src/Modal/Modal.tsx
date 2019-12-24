import React, { ReactNode } from 'react';

import { Overlay } from './internal/Overlay';
import { Content } from './internal/Content';
import './Modal.css';

interface Props {
  open: boolean;
  children: ReactNode;
  onDismiss: () => void;
  container: Element | string | null;
}

export const Modal = ({ open, children, onDismiss, container }: Props) => {
  return (
    <Overlay open={open} container={container}>
      {open && <Content onDismiss={onDismiss}>{children}</Content>}
    </Overlay>
  );
};
