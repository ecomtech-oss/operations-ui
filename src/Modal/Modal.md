#### Использование

1. Добавляй `ModalContainer`-компонент в корень своего приложения
2. Используй `Modal`-компоненты в любом месте своего приложения

Для управленеия состоянием модального окна можно использовать хук `useModalState`.

#### Примеры

```js
import { ModalContainer } from './internal/ModalContainer'
import { useModalState } from './useModalState'

const ModalExample = () => {
  const modal1 = useModalState()
  const modal2 = useModalState()

  return (
    <>
      <ModalContainer />
      <Modal
        open={modal1.isOpen}
        onDismiss={modal1.close}
      >
        <p>Это модальное окно смотнитровалось через портал</p>
        <p>Все дети средерились сразу</p>
      </Modal>
      <Modal
        open={modal2.isOpen}
        onDismiss={modal2.close}
      >
      {() => (
        <>
          {console.log(`Произошел рендеринг детей в ${new Date().toLocaleTimeString()}`)}
          <p>Это модальное окно смотнитровалось через портал</p>
          <p>А дети в нем отрендерились только после открытия окна</p>
          <p>Посмотри в консоль при закрытой модалке и при открытой</p>
        </>
      )}
      </Modal>
      <button onClick={modal1.open}>Открыть первую модалку</button>
      <button onClick={modal2.open}>Открыть вторую модалку</button>
    </>
  )
}

<ModalExample />
```
