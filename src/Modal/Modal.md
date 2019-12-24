#### Примеры

Простое модальное окно

```js
import { useState } from 'react'

const ModalExample = () => {
  const [modelOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        open={modelOpen}
        onDismiss={() => setModalOpen(false)}
      >
        <p>Это модальное окно смотнитровалось просто так</p>
      </Modal>
      <button onClick={() => setModalOpen(true)}>Открыть</button>
    </>
  )
}

<ModalExample />
```

Модальное окно, будет смонтировано в элемент-контейнер (передается напрямую).

```js
import { useState, useRef } from 'react'

const ModalExample = () => {
  const [modelOpen, setModalOpen] = useState(false)
  const containerRef = useRef()

  return (
    <>
      <Modal
        open={modelOpen}
        container={containerRef.current}
        onDismiss={() => setModalOpen(false)}
      >
        <p>Это модальное окно смотнитровалось через портал, используя ref</p>
      </Modal>
      <div id="container" ref={containerRef}></div>
      <button onClick={() => setModalOpen(true)}>Открыть</button>
    </>
  )
}

<ModalExample />
```

Модальное окно, будет смонтировано в элемент-контейнер (передается только идентификатор).

```js
import { useState } from 'react'

const ModalExample = () => {
  const [modelOpen, setModalOpen] = useState(false)

  return (
    <>
      <Modal
        open={modelOpen}
        container={container}
        onDismiss={() => setModalOpen(false)}
      >
        <p>Это модальное окно смотнитровалось через портал, используя id</p>
      </Modal>
      <div id="container"></div>
      <button onClick={() => setModalOpen(true)}>Открыть</button>
    </>
  )
}

<ModalExample />
```