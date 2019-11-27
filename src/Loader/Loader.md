### Использование

```jsx static
import { Loader, LoaderPresets } from '@samokat/operations-ui';

<Loader {...LoaderPresets.white}/>
```

#### Примеры
size=small
```js
<Loader size="small"/>
```
size=medium
```js
<Loader size="medium"/>
```
По умолчанию
```js
<Loader />
```

С пресетом white
```js
import * as LoaderPresets from './presets';

<div style={{ background: '#198CFF' }}>
  <Loader {...LoaderPresets.white}/>
</div>
```
С пресетом grey

```js
import * as LoaderPresets from './presets';

<Loader {...LoaderPresets.grey}/>
```
С пресетом blue
```js
import * as LoaderPresets from './presets';

<Loader {...LoaderPresets.blue}/>
```