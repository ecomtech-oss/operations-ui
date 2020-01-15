#### Использование

#### Примеры

```js
import { FrameComponent } from '../../../utils/FrameComponent';

import { LoginResult } from './constants';

<FrameComponent width='100%' height='700px' frameId="LoginFrame">
  <Login 
    onLogin={({ phoneNumber, password }) => { 
      console.log('Попытка входа', phoneNumber, password);
      return new Promise((resolve) => {
        window.setTimeout(() => {
        resolve(LoginResult.Success);
      }, 3000);
    })
    }}
    afterLogin={() => console.log('Успешно!')}
  />
</FrameComponent>
```
