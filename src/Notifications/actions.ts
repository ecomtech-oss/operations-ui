import nanoid from 'nanoid';

import { NotificationModel } from './NotificationModel';
import { store } from './store';

interface PushConfig {
  id?: string;
  duration?: number;
}

export const push = (
  notification: NotificationModel,
  { id, duration }: PushConfig = {},
) => {
  const finalId = id || nanoid();

  store.dispatch('push', [finalId, notification, duration]);
};

export const pushDefaultError = () =>
  push({
    title: 'Что-то сломалось',
    text: 'Проверьте интернет или перезагрузите страницу',
  });
