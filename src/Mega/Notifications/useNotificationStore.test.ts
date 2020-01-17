import { renderHook, act } from '@testing-library/react-hooks';

import { useNotificationStore } from './useNotificationStore';
import * as actions from './actions';

describe('useNotificationStore', () => {
  test('should return one notification after one push', () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      actions.push({ title: 'Test title', text: 'Test text' });
    });

    expect(Object.values(result.current)).toEqual([
      { title: 'Test title', text: 'Test text' },
    ]);
  });

  test('should return two notifications after two push', () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      actions.push({ title: 'Test title 1', text: 'Test text 1' });
      actions.push({ title: 'Test title 2', text: 'Test text 2' });
    });

    expect(Object.values(result.current)).toEqual([
      { title: 'Test title 1', text: 'Test text 1' },
      { title: 'Test title 2', text: 'Test text 2' },
    ]);
  });

  test('should return zero notifications after push and wait', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useNotificationStore(),
    );

    act(() => {
      actions.push(
        { title: 'Test title', text: 'Test text' },
        { duration: 1000 },
      );
    });

    await Promise.all([
      waitForNextUpdate(),
      new Promise(resolve => setTimeout(resolve, 1000)),
    ]);

    expect(result.current).toEqual({});
  });

  test('should return zero notification after push and force close', () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      actions.push(
        { title: 'Test title', text: 'Test text' },
        { id: '1', duration: 1000 },
      );
      actions.close('1');
    });

    expect(result.current).toEqual({});
  });
});
