import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames/bind';

import * as Typography from '../../../Typography';
import { ErrorText } from '../../ErrorText';
import { placeholderHack } from '../internal/constants';
import { InputProps } from '../internal/types';
import styles from './PrimaryInput.css';

const cx = classNames.bind(styles);

type PrimaryInputProps = {
  /** Текст плавающего лейбла, если не передан то лейбл не показывается. */
  label?: string;

  /** Текст ошибки */
  errorText?: string;

  /** Дополнительный класс */
  className?: string;
};

export const PrimaryInput = forwardRef(
  (
    {
      className,
      placeholder = placeholderHack,
      label,
      errorText,
      ...inputProps
    }: InputProps<PrimaryInputProps>,
    ref: Ref<HTMLInputElement>,
  ) => {
    const hasError = Boolean(errorText);
    const hasLabel = Boolean(label);

    return (
      <Typography.Text className={cx('wrapper', className)}>
        <input
          ref={ref}
          {...inputProps}
          placeholder={placeholder}
          className={cx('input', {
            'with-label': hasLabel,
            error: hasError,
          })}
        />
        {<Typography.Text className={cx('label')}>{label}</Typography.Text>}
        {hasError && (
          <ErrorText className={cx('error-text')}>{errorText}</ErrorText>
        )}
      </Typography.Text>
    );
  },
);
PrimaryInput.displayName = 'PrimaryInput';
