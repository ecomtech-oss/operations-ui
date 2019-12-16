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
  <SecondaryButton size="large" startIcon={People}>Назад</SecondaryButton>
  <SecondaryButton size="medium">Отменить</SecondaryButton>
  <SecondaryButton size="small">Отменить</SecondaryButton>
</div>
```

fullWidth=true
```js
<SecondaryButton size="large" fullWidth={true}>Отменить</SecondaryButton>
```

disabled=true
```js
<SecondaryButton size="large" disabled={true}>Отменить</SecondaryButton>
```

loading=true
```js
<SecondaryButton size="large" loading={true}>
  Отменить
</SecondaryButton>
```