#### Использование

1. Добавляй `ModalContainer`-компонент в корень своего приложения
2. Используй `Modal`-компоненты в любом месте своего приложения

Для управленеия состоянием модального окна можно использовать хук `useModalState`.

#### Примеры

```js
import { ModalContainer } from './internal/ModalContainer'
import { useModalState } from './useModalState'

const ModalExample = () => {
  const { isOpen, open, close } = useModalState()

  return (
    <>
      <ModalContainer />
      <Modal
        open={isOpen}
        onDismiss={close}
      >
        <p>Это модальное окно смотнитровалось через портал</p>
      </Modal>
      <button onClick={open}>Открыть</button>
    </>
  )
}

<ModalExample />
```
