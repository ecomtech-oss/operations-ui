#### Использование

```jsx static
import { PrimaryButton } from '@samokat/operations-ui'


//...
<PrimaryButton>Войти</PrimaryButton>
//...
```

#### Примеры

Размеры: large, medium, small
```js
<div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
  <PrimaryButton size="large">Войти</PrimaryButton>
  <PrimaryButton size="medium">Войти</PrimaryButton>
  <PrimaryButton size="small">Войти</PrimaryButton>
</div>
```

Кнопка, занимающая всю ширину родительского блока
```js
<PrimaryButton size="large" fullWidth={true}>Войти</PrimaryButton>
```

Отключенная кнопка
```js
<PrimaryButton size="large" disabled={true}>Войти</PrimaryButton>
```

Кнопка, в состоянии загрузки
```js
<PrimaryButton size="large" loading={true}>Войти</PrimaryButton>
```