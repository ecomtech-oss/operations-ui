import React, { forwardRef, FC } from 'react';
import cn from 'classnames/bind';

import Loader from '../../Loader';
import Icon, { IconElement } from '../../Icon';
import { Text } from '../../Typography';
import { BaseButtonsProps } from '../Base';
import * as baseStyles from '../Base.css';
import * as iternalStyles from './Iternal.css';

const cx = cn.bind(iternalStyles);

export interface ExternalButtonPropsInner {
  /**  Размер кнопки */
  size?: 'small' | 'medium' | 'large';
  /**  Кнопка принимает ширину родителя */
  fullWidth?: boolean;
  /**  В состоянии загрузке */
  loading?: boolean;
  /**  В состоянии disabled */
  disabled?: boolean;
  /**  Иконка слева */
  startIcon?: IconElement | null;

  /**  Иконка справа */
  endIcon?: IconElement | null;
  /** Дополнительный класс */
  className?: string;
}

export type ExternalButtonProps = ExternalButtonPropsInner & BaseButtonsProps;

interface IternalButtonPropsInner extends ExternalButtonPropsInner {
  color: 'primary' | 'secondary';
}

export type IternalButtonProps = IternalButtonPropsInner & BaseButtonsProps;

export const IternalButton = forwardRef<HTMLButtonElement, IternalButtonProps>(
  (
    {
      size = 'medium',
      fullWidth = false,
      loading = false,
      disabled = false,
      color,
      children,
      startIcon = null,
      endIcon = null,
      className,
      ...nativeProps
    }: IternalButtonProps,
    ref,
  ) => {
    const loaderPreset =
      color === 'primary' ? Loader.presets.white : Loader.presets.grey;
    const isDisabled = loading || disabled;
    const iconSize = size === 'small' ? 'small' : 'medium';
    const textSize = size === 'small' ? 'small' : 'normal';
    return (
      <button
        className={cx(
          baseStyles.button,
          size,
          color,
          { 'full-width': fullWidth, loading },
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
        <div className={cx('content', { hide: loading })}>
          {startIcon && (
            <Icon
              children={startIcon}
              size={iconSize}
              className={cx('icon', 'start-icon')}
            />
          )}
          <Text size={textSize} className={cx('text')}>
            {children}
          </Text>
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
