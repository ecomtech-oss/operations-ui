#### Использование

```jsx static
import { SecondaryButton } from '@samokat/operations-ui'


//...
<SecondaryButton>Отменить</SecondaryButton>
//...
```

#### Примеры

Размеры: large, medium, small
```jsx

import Icon from '../../Icon';
import { People } from '@samokat/operations-icons';

<div style={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
  <SecondaryButton size="large" leftIcon={People}>Назад</SecondaryButton>
  <SecondaryButton size="medium">Отменить</SecondaryButton>
  <SecondaryButton size="small">Отменить</SecondaryButton>
</div>
```

Кнопка, занимающая всю ширину родительского блока
```js
<SecondaryButton size="large" fullWidth={true}>Отменить</SecondaryButton>
```

Отключенная кнопка
```js
<SecondaryButton size="large" disabled={true}>Отменить</SecondaryButton>
```

Кнопка, в состоянии загрузки
```js
<SecondaryButton size="large" loading={true}>
  Отменить
</SecondaryButton>
```