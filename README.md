# Operations UI kit

*Внимание! Это очень ранний релиз. Рекомендуем импользовать его с осторожностью.*

UI-кит для внутренних продуктов.

## Установка

+ Ставь зависимость из npm

```shell
yarn add @samokat/operations-ui
```

+ Включай в бандл css-файл

```ts
import '@samokat/operations-ui/dist/styles.css'
```

+ Добавь RobotoMono шрифт

```html
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet"> 
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


## HowTo: Release

1. Make your changes and commit it
2. Run `yarn s release`
3. Run `git push --follow-tags`
4. Travis will publish it to NPM
5. Brilliant!
