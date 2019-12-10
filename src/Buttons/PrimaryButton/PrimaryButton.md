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

full=true
```js
<PrimaryButton size="large" full={true}>Войти</PrimaryButton>
```

disabled=true
```js
<PrimaryButton size="large" disabled={true}>Войти</PrimaryButton>
```

loading=true
```js
<PrimaryButton size="large" loading={true}>Войти</PrimaryButton>
```