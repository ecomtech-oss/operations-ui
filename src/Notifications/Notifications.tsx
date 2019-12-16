import React from 'react';
import useStoreon from 'storeon/react';
import StoreContext from 'storeon/react/context';
import classNames from 'classnames/bind';
import { Cross } from '@samokat/operations-icons';

import { Text, Caption } from '../Typography';
import Icon from '../Icon';
import { store, State, Events } from './store';
import * as styles from './Notifications.css';

const cx = classNames.bind(styles);

interface Props {
  horizontal?: 'left' | 'right';
  vertical?: 'top' | 'bottom';
  withMargin?: boolean;
}

const EssentiallyNotifications = (props: Props) => {
  const { notifications, dispatch } = useStoreon<State, Events>(
    'notifications',
  );

  const verticalClass = `vertical__${props.vertical}`;
  const horizontalClass = `horizontal__${props.horizontal}`;

  return (
    <section
      className={cx(
        'container',
        verticalClass,
        horizontalClass,
        props.withMargin && 'margin',
      )}
    >
      {Object.entries(notifications).map(([id, notification]) => (
        <article key={id} className={cx('notification')}>
          <Text className={cx('title')}>{notification.title}</Text>
          <Caption className={cx('text')}>{notification.text}</Caption>
          <button
            className={cx('close')}
            onClick={() => dispatch('remove', id)}
          >
            <Icon size="small" className={cx('cross')}>
              {Cross}
            </Icon>
          </button>
        </article>
      ))}
    </section>
  );
};

export const Notifications = ({
  vertical = 'top',
  horizontal = 'right',
  withMargin = false,
}: Props) => {
  return (
    <StoreContext.Provider value={store}>
      <EssentiallyNotifications
        vertical={vertical}
        horizontal={horizontal}
        withMargin={withMargin}
      />
    </StoreContext.Provider>
  );
};
