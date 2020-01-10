import { useState, useEffect } from 'react';
import nanoid from 'nanoid';

import {
  PUSH_EVENT,
  PushEventDetail,
  CloseEventDetail,
  CLOSE_EVENT,
} from './events';
import { NotificationModel } from './NotificationModel';

interface Store {
  [key: string]: NotificationModel;
}

const DEFAULT_DURATION = 4000;

export const useNotificationStore = () => {
  const [notifications, setNotifications] = useState<Store>({});

  const push = (id: string, newNotification: NotificationModel) =>
    setNotifications(oldNotifications => ({
      ...oldNotifications,
      [id]: newNotification,
    }));

  const remove = (idToRemove: string) =>
    setNotifications(oldNotifications =>
      Object.entries(oldNotifications)
        .filter(([id]) => id !== idToRemove)
        .reduce(
          (prev, [id, notification]) => ({ ...prev, [id]: notification }),
          {},
        ),
    );

  const handlePushEvent = ({ detail }: CustomEvent<PushEventDetail>) => {
    const id = detail.config.id || nanoid();
    push(id, detail.notification);

    setTimeout(() => remove(id), detail.config.duration || DEFAULT_DURATION);
  };

  const handleCloseEvent = ({ detail }: CustomEvent<CloseEventDetail>) =>
    remove(detail.id);

  useEffect(() => {
    document.addEventListener(PUSH_EVENT, handlePushEvent as EventListener);
    document.addEventListener(CLOSE_EVENT, handleCloseEvent as EventListener);

    return () => {
      document.removeEventListener(
        PUSH_EVENT,
        handlePushEvent as EventListener,
      );
      document.removeEventListener(
        CLOSE_EVENT,
        handleCloseEvent as EventListener,
      );
    };
  }, []);

  return notifications;
};
