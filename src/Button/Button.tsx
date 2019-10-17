import React from 'react';

import styles from './Button.css';

interface Props {
  /** Сработает на клик */
  onClick?: () => void;
}

export const Button = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Hello!
    </button>
  );
};
