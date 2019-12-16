#### Использование

```jsx static
import { RoundButton } from '@samokat/operations-ui'
import { Plus } from '@samokat/operations-icons'

//...
<RoundButton icon={Plus}/>
//...
```

#### Примеры

Размеры: medium, large
```js
import { Logout } from '@samokat/operations-icons';

<div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
  <RoundButton size="medium" icon={Logout} />
  <RoundButton size="large" icon={Logout} />
</div>
```

Цвета: blue, white, grey
```js
import { Logout } from '@samokat/operations-icons';

<div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
  <RoundButton color="blue" icon={Logout} size="large" disabled={false}/>
  <RoundButton color="white" icon={Logout} size="large" disabled={false}/>
  <RoundButton color="grey" icon={Logout}  size="large" disabled={false}/>
</div>
```

В состоянии loading=true
```js
import { Logout } from '@samokat/operations-icons';

<div style={{ width: '300px', display: 'flex', justifyContent: 'space-between' }}>
  <RoundButton color="blue" icon={Logout} size="large" disabled={false} loading={true}/>
  <RoundButton color="white" icon={Logout} size="large" disabled={false} loading={true}/>
  <RoundButton color="grey" icon={Logout}  size="large" disabled={false} loading={true}/>
</div>
```

