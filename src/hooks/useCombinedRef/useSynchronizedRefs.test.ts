import { act, renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';

import { useSynchronizedRefs } from './useSynchronizedRefs';

describe('useCombinedRef', () => {
  const mockObject = { data: 1 };
  type refType = typeof mockObject;

  test('pass no ref', () => {
    const { result } = renderHook(() => {
      const resultRef = useSynchronizedRefs<refType>();
      resultRef.current = mockObject;
      return {
        resultRef,
      };
    });
    expect(result.current.resultRef.current).toEqual(mockObject);
  });
  test('pass single ref', () => {
    const { result } = renderHook(() => {
      const originalRef = useRef<refType>();
      const resultRef = useSynchronizedRefs<refType>(originalRef);
      resultRef.current = mockObject;
      return { originalRef, resultRef };
    });
    expect(result.current.originalRef.current).toEqual(mockObject);
    act(() => {
      result.current.resultRef.current.data = 12;
    });
    expect(result.current.originalRef.current).toEqual({ data: 12 });
  });

  test('pass multiple ref', () => {
    const { result } = renderHook(() => {
      const ref1 = useRef<refType>();
      const ref2 = useRef<refType>();
      const resultRef = useSynchronizedRefs<refType>(ref1, ref2);
      resultRef.current = mockObject;
      return { ref1, ref2, resultRef };
    });
    expect(result.current.ref1.current).toEqual(mockObject);
    expect(result.current.ref2.current).toEqual(mockObject);

    act(() => {
      result.current.resultRef.current.data = 7;
    });

    expect(result.current.ref1.current).toEqual({ data: 7 });
    expect(result.current.ref2.current).toEqual({ data: 7 });
  });
});
