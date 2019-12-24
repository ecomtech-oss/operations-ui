import { useLayoutEffect, RefObject } from 'react';

export function useOnEventOutside<E extends keyof DocumentEventMap>(
  ref: RefObject<Element>,
  eventName: E,
  handler: (e: DocumentEventMap[E]) => any,
) {
  const listener = (event: DocumentEventMap[E]) => {
    if (
      !ref.current ||
      ref.current.compareDocumentPosition(event.target as any) &
        Node.DOCUMENT_POSITION_CONTAINED_BY
    ) {
      return;
    }

    handler(event);
  };

  useLayoutEffect(() => {
    document.addEventListener(eventName, listener);

    return () => {
      document.removeEventListener(eventName, listener);
    };
  }, [ref, handler, eventName]);
}
