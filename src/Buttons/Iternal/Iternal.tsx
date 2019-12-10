import React, { forwardRef } from 'react';
import cn from 'classnames/bind';

import Loader from '../../Loader';
import Icon, { IconElement } from '../../Icon';
import { BaseButtonsProps } from '../Base';
import * as baseStyles from '../Base.css';
import * as iternalStyles from './Iternal.css';

const cx = cn.bind(iternalStyles);

export interface ExternalButtonProps {
  /**  Размер кнопки */
  size?: 'small' | 'medium' | 'large';
  /**  Кнопка принимает ширину родителя */
  full?: boolean;
  /**  В состоянии загрузке */
  loading?: boolean;
  /**  В состоянии disabled */
  disabled?: boolean;
  /**  Иконка слева */
  startIcon: IconElement | null;

  /**  Иконка справа */
  endIcon: IconElement | null;
  /** Дополнительный класс */
  className?: string;
}

interface IternalButtonProps extends ExternalButtonProps {
  color: 'primary' | 'secondary';
}

export const IternalButton = forwardRef<
  HTMLButtonElement,
  IternalButtonProps & BaseButtonsProps
>(
  (
    {
      size = 'medium',
      full = false,
      loading = false,
      disabled = false,
      color,
      children,
      startIcon = null,
      endIcon = null,
      className,
      ...nativeProps
    },
    ref,
  ) => {
    const loaderPreset =
      color === 'primary' ? Loader.presets.white : Loader.presets.grey;
    const iconSize = size === 'small' ? 'small' : 'medium';
    return (
      <button
        className={cx(
          baseStyles.button,
          size,
          color,
          { full, [baseStyles.loading]: loading },
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...nativeProps}
      >
        {loading && (
          <div className={cx(baseStyles.loader)}>
            <Loader {...loaderPreset} />
          </div>
        )}
        <div className={cx('content', { hide: loading })}>
          {startIcon && (
            <Icon
              children={startIcon}
              size={iconSize}
              className={cx('icon', 'start-icon')}
            />
          )}
          <div>{children}</div>
          {endIcon && (
            <Icon
              children={endIcon}
              size={iconSize}
              className={cx('icon', 'end-icon')}
            />
          )}
        </div>
      </button>
    );
  },
);
