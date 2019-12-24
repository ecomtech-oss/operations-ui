#### Использование

1. Добавляй `ModalContainer`-компонент в корень своего приложения
2. Используй `Modal`-компоненты в любом месте своего приложения

#### Примеры

```js
import { useState, useRef } from 'react'

import { ModalContainer } from './ModalContainer'

const ModalExample = () => {
  const [modelOpen, setModalOpen] = useState(false)
  const containerRef = useRef()

  return (
    <>
      <ModalContainer />
      <Modal
        open={modelOpen}
        onDismiss={() => setModalOpen(false)}
      >
        <p>Это модальное окно смотнитровалось через портал</p>
      </Modal>
      <button onClick={() => setModalOpen(true)}>Открыть</button>
    </>
  )
}

<ModalExample />
```
