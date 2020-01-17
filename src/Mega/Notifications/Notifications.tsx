import React from 'react';
import classNames from 'classnames/bind';
import { Cross } from '@samokat/operations-icons';

import { Text, Caption } from '../../Typography';
import Icon from '../../Icon';
import styles from './Notifications.css';
import * as actions from './actions';
import { useNotificationStore } from './useNotificationStore';

const cx = classNames.bind(styles);

interface Props {
  horizontal?: 'left' | 'right';
  vertical?: 'top' | 'bottom';
  withMargin?: boolean;
}

export const Notifications = ({
  vertical = 'top',
  horizontal = 'right',
  withMargin = false,
}: Props) => {
  const notifications = useNotificationStore();

  const verticalClass = `vertical__${vertical}`;
  const horizontalClass = `horizontal__${horizontal}`;

  return (
    <section
      className={cx(
        'container',
        verticalClass,
        horizontalClass,
        withMargin && 'margin',
      )}
    >
      {Object.entries(notifications).map(([id, notification]) => (
        <article key={id} className={cx('notification')}>
          <Text className={cx('title')}>{notification.title}</Text>
          <Caption className={cx('text')}>{notification.text}</Caption>
          <button className={cx('close')} onClick={() => actions.close(id)}>
            <Icon size="small" className={cx('cross')}>
              {Cross}
            </Icon>
          </button>
        </article>
      ))}
    </section>
  );
};

Notifications.actions = actions;
