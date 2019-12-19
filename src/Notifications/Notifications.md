### Использование

1. Добавляй `Notification`-компонент в корень своего приложения
2. Используй `actions` для отображения уведомлений

Местом отображения нотификаций можно управлять через пропсы `Notification`-компонента.

#### Доступные действия

##### `push`

Показывает любое уведомление. Вторым аргументом принимает объект с настройками:
+ `duration` — длительность, по умолчанию 4 секунды
+ `id` — специальный идентификатор, по умолчанию генерируется через `nanoid`

```ts
import { Notifications } from '@samokat/operations-ui'

Notifications.actions.push({title: 'Уведомляю!', text: 'Произошло уведомление' })
```

##### `pushDefaultError`

Показывает стандартное сообщение об ошибке.

```ts
import { Notifications } from '@samokat/operations-ui'

Notifications.actions.pushDefaultError()
```

#### Примеры


```js
import * as actions from './actions';

<div>
  <Notifications />

  <button onClick={
    () => actions.push({title: 'Уведомляю!', text: 'Произошло уведомление' })
  }>
    Отправить уведомление с особенным текстом
  </button>

  <button onClick={actions.pushDefaultError}>
    Отправить стандартное уведомление об ошибке
  </button>
</div>
```
