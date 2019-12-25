import { ChangeEvent } from 'react';

export const mouseEventToChangeEvent = (
  target: HTMLInputElement,
  e: React.MouseEvent<HTMLElement, MouseEvent>,
): ChangeEvent<HTMLInputElement> => {
  const event: ChangeEvent<HTMLInputElement> = Object.create(e);
  event.type = 'change';
  event.target = target;
  event.currentTarget = target;
  return event;
};
