#### Использование

#### Примеры

```js
import Frame from 'react-frame-component';
const styles = Array.from(document.querySelectorAll('style'));


<Frame style={{ width: '100%', height: '700px' }} id="LoginFrame" contentDidMount={() => {
  const iframe = document.getElementById('LoginFrame');
  const iframeDoc = iframe.contentWindow.document;
  const head = iframeDoc.getElementsByTagName("head")[0];
  const length = styles.length;
  styles.forEach(item => {
    const clone = item.cloneNode(true);
    head.appendChild(clone);
  });
}}>
  <Login />
</Frame>
```
