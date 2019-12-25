import createStore, { StoreonEvents, Module } from 'storeon';

import { NotificationModel } from './NotificationModel';

export interface State {
  notifications: {
    [key: string]: NotificationModel;
  };
}

export interface Events extends StoreonEvents<State> {
  push: [string, NotificationModel, number?];
  remove: string;
}

const DEFAULT_DURATION = 4000;

export const notificationsModule: Module<State, Events> = appStore => {
  appStore.on('@init', () => ({ notifications: {} }));

  appStore.on('push', ({ notifications }, [id, newNotification]) => ({
    notifications: {
      ...notifications,
      [id]: newNotification,
    },
  }));

  appStore.on('remove', ({ notifications }, idToRemove) => ({
    notifications: Object.entries(notifications)
      .filter(([id]) => id !== idToRemove)
      .reduce(
        (prev, [id, notification]) => ({ ...prev, [id]: notification }),
        {},
      ),
  }));

  // remove notification after delay
  appStore.on('push', (_1, [id, _2, duration = DEFAULT_DURATION]) => {
    setTimeout(() => {
      appStore.dispatch('remove', id);
    }, duration);
  });
};

export const store = createStore([notificationsModule]);
