import React from 'react';
import cn from 'classnames/bind';

import * as styles from './Loader.css';
import * as presets from './presets';
const cx = cn.bind(styles);

interface Props {
  /** Цвет в HEX */
  color?: string;
  /** Прозрачность */
  opacity?: number;
  /** Размер */
  size?: 'small' | 'medium';

  presets: typeof presets;
  /** Дополнительный класс */
  className?: string;
}

export const Loader = ({
  className,
  color = '#8F99A3',
  opacity = 1,
  size = 'medium',
}: Props) => {
  return (
    <div className={cx('loader', size, className)}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1425 6.85723h1.7144V-.000075h-1.7144V6.85723zm-.9718.26062l-1.48465.85716L5.2574 2.03642l1.48465-.85717 3.42865 5.9386zM7.11698 10.1714l.85716-1.48464-5.9386-3.42865-.85716 1.48465 5.9386 3.42864zm-.25964.9718v1.7144H.000042v-1.7144H6.85734zm1.11709 4.1711l-.85716-1.4847-5.9386 3.4287.85716 1.4846 5.9386-3.4286zm.71198.7116l1.48469.8571-3.4287 5.9386-1.48464-.8571 3.42865-5.9386zm2.45629 1.1176h1.7143v6.8573h-1.7143v-6.8573zm4.1709-9.16819l-1.4847-.85716 3.4287-5.9386 1.4846.85717-3.4286 5.93859zm.7115.71121l.8572 1.48468 5.9386-3.42868-.8572-1.48465-5.9386 3.42865zm1.1176 4.17098v-1.7144H24v1.7144h-6.8573zm-1.8292 3.1683l-1.4847.8572 3.4287 5.9386 1.4846-.8572-3.4286-5.9386z"
          fill={color}
          fillOpacity={opacity}
        />
      </svg>
    </div>
  );
};

Loader.presets = presets;
