import React, { forwardRef, FC } from 'react';
import cn from 'classnames/bind';

import Loader from '../../Loader';
import Icon, { IconElement } from '../../Icon';
import { Text } from '../../Typography';
import { BaseButtonsProps } from '../Base';
import baseStyles from '../Base.css';
import iternalStyles from './Internal.css';
import { iconSizeMapper } from './iconSizeMapper';
import { ButtonSize } from './types';
import { Colors, loaderPresetsMapper } from './loaderPresetsMapper';
import { textSizeMapper } from './textSizeMapper';
const cx = cn.bind(iternalStyles);
export interface ExternalButtonPropsInner {
  /**  Размер кнопки */
  size?: ButtonSize;
  /**  Кнопка принимает ширину родителя */
  fullWidth?: boolean;
  /**  В состоянии загрузке */
  loading?: boolean;
  /**  В состоянии disabled */
  disabled?: boolean;
  /**  Иконка слева */
  leftIcon?: IconElement | null;

  /**  Иконка справа */
  rightIcon?: IconElement | null;
  /** Дополнительный класс */
  className?: string;
}

export type ExternalButtonProps = ExternalButtonPropsInner & BaseButtonsProps;

interface IternalButtonPropsInner extends ExternalButtonPropsInner {
  color: Colors;
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
      leftIcon = null,
      rightIcon = null,
      className,
      ...nativeProps
    }: IternalButtonProps,
    ref,
  ) => {
    const loaderPreset = loaderPresetsMapper[color];
    const iconSize = iconSizeMapper[size];
    const textSize = textSizeMapper[size];
    const isDisabled = loading || disabled;

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
          {leftIcon && (
            <Icon size={iconSize} className={cx('icon', 'start-icon')}>
              {leftIcon}
            </Icon>
          )}
          <Text size={textSize} className={cx('text')}>
            {children}
          </Text>
          {rightIcon && (
            <Icon size={iconSize} className={cx('icon', 'end-icon')}>
              {rightIcon}
            </Icon>
          )}
        </div>
      </button>
    );
  },
);

IternalButton.displayName = 'IternalButton';
