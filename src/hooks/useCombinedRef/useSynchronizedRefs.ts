import { useRef, useEffect, Ref, MutableRefObject } from 'react';

export const useSynchronizedRefs = <T>(
  ...refs: Ref<T>[]
): MutableRefObject<T | null> => {
  const externalRef = useRef<T>(null);
  const targetRef = useRef<T>(null);
  refs.push(externalRef);
  useEffect(() => {
    refs.filter(Boolean).forEach(ref => {
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        (ref as MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};
