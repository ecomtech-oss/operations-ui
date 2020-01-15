import { NotificationModel } from './NotificationModel';
import { createPushEvent, PushConfig, createCloseEvent } from './events';

export const push = (notification: NotificationModel, config?: PushConfig) =>
  document.dispatchEvent(createPushEvent(notification, config));

export const close = (id: string) =>
  document.dispatchEvent(createCloseEvent(id));

export const pushDefaultError = () =>
  push({
    title: 'Что-то сломалось',
    text: 'Проверьте интернет или перезагрузите страницу',
  });
