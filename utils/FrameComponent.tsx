import React, { ReactNode } from 'react';
import Frame from 'react-frame-component';

interface Props {
  width: string;
  height: string;
  frameId: string;
  children: ReactNode;
}

export const FrameComponent = ({
  width = '100%',
  height = '100%',
  frameId,
  children,
}: Props) => {
  return (
    <Frame
      style={{ width, height }}
      id={frameId}
      contentDidMount={() => {
        const styles = Array.from(document.querySelectorAll('style'));
        const iframe = document.getElementById(frameId) as HTMLFrameElement;
        const iframeDoc = iframe.contentWindow.document;
        const head = iframeDoc.getElementsByTagName('head')[0];
        styles.forEach(item => {
          const clone = item.cloneNode(true);
          head.appendChild(clone);
        });
      }}
    >
      {children}
    </Frame>
  );
};
