import React, { forwardRef } from 'react';
import cn from 'classnames/bind';

import Loader from '../../Loader';
import Icon, { IconElement } from '../../Icon';
import { BaseButtonsProps } from '../Base';
import * as baseStyles from '../Base.css';
import * as styles from './RoundButton.css';
import { Colors, loaderPresetMapper } from './loaderPresetsMapper';
import { ButtonSizes, iconSizeMapper } from './iconSizeMapper';
const cx = cn.bind(styles);

export interface RoundButtonProps {
  /**  Размер кнопки */
  size?: ButtonSizes;
  /**  В состоянии загрузке */
  loading?: boolean;
  /**  В состоянии disabled */
  disabled?: boolean;
  /**  Иконка  */
  icon: IconElement;
  /**  Цвет */
  color?: Colors;
  /** Дополнительный класс */
  className?: string;
}

export const RoundButton = forwardRef<
  HTMLButtonElement,
  RoundButtonProps & BaseButtonsProps
>(
  (
    {
      size = 'medium',
      loading = false,
      disabled = false,
      color = 'grey',
      icon,
      className,
      ...nativeProps
    },
    ref,
  ) => {
    const loaderPreset = Loader.presets[loaderPresetMapper[color]];
    const iconSize = iconSizeMapper[size];
    const isDisabled = loading || disabled;

    return (
      <button
        className={cx(
          baseStyles.button,
          'common',
          size,
          color,
          { loading },
          className,
        )}
        disabled={isDisabled}
        ref={ref}
        {...nativeProps}
      >
        {loading && (
          <div className={cx(baseStyles.loader)}>
            <Loader {...loaderPreset} />
          </div>
        )}
        <Icon
          children={icon}
          size={iconSize}
          className={cx('icon', { hide: loading })}
        />
      </button>
    );
  },
);
