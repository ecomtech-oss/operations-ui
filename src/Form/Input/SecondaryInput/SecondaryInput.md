#### Использование

```jsx static
import { SecondaryInput } from '@samokat/operations-ui'

//...
<SecondaryInput value="hello world" onChange={event => console.log(event)}/>
//...
```

#### Примеры

Размеры: small, medium
```js
<div style={{ marginBottom: '10px' }}>
  <SecondaryInput defaultValue="hello" size="small"/>
</div>
<div>
  <SecondaryInput defaultValue="world" size="medium"/>
</div>
```

С плейсхолдером
```js
<div>
  <SecondaryInput placeholder="+7 999 999 99 99"/>
</div>
```

С иконкой 
```js
import { Search } from '@samokat/operations-icons';
<div>
  <SecondaryInput  placeholder="+7 999 999 99 99" icon={Search}/>
</div>
```

С Ошибкой
```js
<div>
  <SecondaryInput defaultValue="+7 896" label="Номер телефона" errorText="Телефон должен состоять из 11 цифр"/>
</div>
```

Отключенное поле 
```js
<div>
  <SecondaryInput disabled={true} defaultValue="+7 896" label="Номер телефона"/>
</div>
```

