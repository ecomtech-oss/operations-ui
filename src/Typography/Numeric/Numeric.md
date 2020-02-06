#### Использование

```jsx static
import { Typography } from '@samokat/operations-ui'

const { Numeric } = Typography

//...
<Numeric>5432</Numeric>
//...
```

#### Примеры

Обычное число | Number 13px / 16px Regular
```js
<Numeric>{1230}</Numeric>
```

Обычное число с акцентом (bold) | Number 13px / 16px Bold
```js
<Numeric bold={true}>{1230}</Numeric>
```

Деньги с разными валютам | Number 13px / 16px Regular
```js
<Numeric currency='RUB'>{123000}</Numeric>
<Numeric currency='USD'>{11.11}</Numeric>
<Numeric currency='EUR'>{7823.32}</Numeric>
```


Деньги с разными валютам с акцентом (bold)| Number 13px / 16px Bold
```js
<Numeric currency='RUB' bold={true}>{11.11}</Numeric>
```