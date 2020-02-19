#### Использование

```jsx static
import { Typography } from '@samokat/operations-ui'

const { Title } = Typography

//...
<Title>Самокат</Title>
//...
```

#### Примеры

Обычный заголовок | Title 24px / 38px Regular

```js
<Title tag="h1">Поспели к осени: хурма, гранат и другие фрукты из Абхазии</Title>
```

Жирный заголовок | Title 24px / 38px Bold
```js
<Title tag="h2" bold>Завтрак в Самокате: то, что надо для начала дня</Title>
```

Обычный заголовок | Title 32px / 32px Regular
```js
<Title size='normal' tag="h1">Поспели к осени: хурма, гранат и другие фрукты из Абхазии</Title>
```

Жирный заголовок | Title 32px / 32px Bold
```js
<Title size='normal' bold={true} tag="h1">Поспели к осени: хурма, гранат и другие фрукты из Абхазии</Title>
```