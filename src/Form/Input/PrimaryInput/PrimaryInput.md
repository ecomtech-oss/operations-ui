#### Использование

```jsx static
import { PrimaryInput } from '@samokat/operations-ui'

//...
<PrimaryInput defaultValue="hello world"/>
//...
```

#### Примеры

С плавающим лейблом
```js
<div>
  <PrimaryInput defaultValue="+7 896 910 50 59" label="Номер телефона"/>
</div>
```
С плейсхолдером
```js
<div>
  <PrimaryInput  placeholder="+7 999 999 99 99"/>
</div>
```

С Ошибкой
```js
<div>
  <PrimaryInput defaultValue="+7 896" label="Номер телефона" errorText="Телефон должен состоять из 11 цифр"/>
</div>
```

Отключенное поле 
```js
<div>
  <PrimaryInput disabled={true} defaultValue="+7 896" label="Номер телефона"/>
</div>
```