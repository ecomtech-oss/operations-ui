import { useRef, useEffect, Ref, RefObject, MutableRefObject } from 'react';

export const useCombinedRefs = <T>(...refs: Ref<T>[]): RefObject<T> => {
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
