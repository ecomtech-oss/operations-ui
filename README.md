# Samokat Operations UI kit

*Внимание! Это очень ранний релиз. Рекомендуем импользовать его с осторожностью.*

UI-кит для внутренних продуктов Самоката.

## Установка

+ Ставь зависимость из npm

```shell
yarn add @samokat/operations-ui
```

+ Включай в бандл css-файл

```ts
import '@samokat/operations-ui/dist/styles.css'
```

+ Используй компоненты

```ts
import { Typography } from '@samokat/opearations-io'

const { Text } = Typography

//...

const App = () => {
  return (
    <Text>Здравствуй, UI-кит!</Text>
  )
}

//...
```

+ Восхитительно!
