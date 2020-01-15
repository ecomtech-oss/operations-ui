import { NotificationModel } from './NotificationModel';

export const PUSH_EVENT = '@samokat/operations-ui/notifications/push';
export const CLOSE_EVENT = '@samokat/operations-ui/notifications/close';

export interface PushConfig {
  id?: string;
  duration?: number;
}

export interface PushEventDetail {
  notification: NotificationModel;
  config: PushConfig;
}

export interface CloseEventDetail {
  id: string;
}

export const createPushEvent = (
  notification: NotificationModel,
  config: PushConfig = {},
) =>
  new CustomEvent<PushEventDetail>(PUSH_EVENT, {
    detail: { notification, config },
  });

export const createCloseEvent = (id: string) =>
  new CustomEvent<CloseEventDetail>(CLOSE_EVENT, { detail: { id } });
