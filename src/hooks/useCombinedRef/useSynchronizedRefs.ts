import { useRef, useEffect, Ref, MutableRefObject } from 'react';

export const useSynchronizedRefs = <T>(
  ...refs: Ref<T>[]
): MutableRefObject<T> => {
  const externalRef = useRef<T>();
  const targetRef = useRef<T>();
  refs.push(externalRef);
  useEffect(() => {
    refs.filter(Boolean).forEach(ref => {
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        (ref as MutableRefObject<T>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};
