### Использование


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
