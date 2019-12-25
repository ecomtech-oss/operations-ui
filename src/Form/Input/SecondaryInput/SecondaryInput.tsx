import React, { forwardRef, Ref, MouseEvent } from 'react';

import classNames from 'classnames/bind';

import { useCombinedRefs } from '../../../hooks/useCombinedRef';
import { mouseEventToChangeEvent } from '../helpers/mouseEventToChangeEvent';
import Icon, { IconElement } from '../../../Icon';
import * as Typography from '../../../Typography';

import { ErrorText } from '../../ErrorText';
import { placeholderHack } from '../internal/constants';
import { InputProps } from '../internal/types';
import { ClearButton } from './internal/ClearButton';
import { Size, textSizeMapper } from './textSizeMapper';
import * as styles from './SecondaryInput.css';

const cx = classNames.bind(styles);

type SecondaryInputProps = {
  /**  Размер кнопки */
  size?: Size;
  /**  иконка слева */
  icon?: IconElement | null;
  /**  ошибка */
  errorText?: string;
  /**  дополнительный класс */
  className?: string;
  /** Эвент, вызывающий при нажатия на ClearButton*/
  onClear?(): void;
};

export const SecondaryInput = forwardRef(
  (
    {
      icon = null,
      className,
      placeholder = placeholderHack,
      errorText,
      size = 'medium',
      onClear,
      ...inputProps
    }: InputProps<SecondaryInputProps>,
    ref: Ref<HTMLInputElement>,
  ) => {
    const hasError = Boolean(errorText);
    const hasLeftIcon = Boolean(icon);
    const iternalRef = useCombinedRefs<HTMLInputElement>(ref);
    const textSize = textSizeMapper[size];
    const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
      const input = iternalRef.current;
      const event = mouseEventToChangeEvent(input, e);
      input.value = '';
      input.focus();

      if (inputProps.onChange) {
        inputProps.onChange(event);
      }

      if (onClear) {
        onClear();
      }
    };

    return (
      <Typography.Text size={textSize} className={cx('wrapper', className)}>
        {hasLeftIcon && (
          <Icon size="small" className={cx('icon')}>
            {icon}
          </Icon>
        )}
        <input
          ref={iternalRef}
          {...inputProps}
          placeholder={placeholder}
          className={cx('input', size, {
            error: hasError,
            'left-padding': hasLeftIcon,
          })}
        />
        <ClearButton className={cx('clear-button')} onClick={handleClear} />

        {hasError && (
          <ErrorText className={cx('error-text')}>{errorText}</ErrorText>
        )}
      </Typography.Text>
    );
  },
);

SecondaryInput.displayName = 'SecondaryInput';
