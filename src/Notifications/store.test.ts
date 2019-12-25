import createStore, { Store } from 'storeon';

import { notificationsModule, State, Events } from './store';

describe('notification store', () => {
  let store: Store<State, Events>;

  beforeAll(() => {
    store = createStore([notificationsModule]);
  });

  test('push should add new notification', () => {
    store.dispatch('push', ['id1', { title: 'test title', text: 'test text' }]);

    expect(store.get().notifications).toEqual({
      id1: { title: 'test title', text: 'test text' },
    });
  });

  test('remove should delete notification', () => {
    store.dispatch('push', ['id1', { title: 'test title', text: 'test text' }]);
    store.dispatch('remove', 'id1');

    expect(store.get().notifications).toEqual({});
  });

  test('push should delete notification with delay', async () => {
    store.dispatch('push', [
      'id1',
      { title: 'test title', text: 'test text' },
      1000,
    ]);

    expect(store.get().notifications).toEqual({
      id1: { title: 'test title', text: 'test text' },
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(store.get().notifications).toEqual({});
  });

  test('push should add any amount of notifications', async () => {
    store.dispatch('push', ['id1', { title: 'test title', text: 'test text' }]);
    store.dispatch('push', ['id2', { title: 'test title', text: 'test text' }]);
    store.dispatch('push', ['id3', { title: 'test title', text: 'test text' }]);
    store.dispatch('push', ['id4', { title: 'test title', text: 'test text' }]);

    expect(Object.entries(store.get().notifications)).toHaveLength(4);
  });
});
