import React, { useState, ReactNode } from 'react';
import klona from 'klona';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { PrimaryInput, ErrorText } from '../../Form';
import * as Typography from '../../Typography';
import { PrimaryButton } from '../../Buttons';
import { LoginResult, errorTextMapper, validationRules } from './constants';
import { formatPhone } from './formatPhone';
import { Logo } from './ui/Logo';
import styles from './Login.css';

const cx = classNames.bind(styles);

type FormData = {
  phoneNumber: string;
  password: string;
};

type Props = {
  /** Логотип */
  logo?: ReactNode;

  /** Функция вызывающияся на логин */
  onLogin(data: FormData): Promise<LoginResult>;

  /** Функция вызывающияся после успешного логина */
  afterLogin?(): void;
};

type ErrorResult = Exclude<LoginResult, LoginResult.Success>;

export const Login = ({ onLogin, logo = <Logo />, afterLogin }: Props) => {
  const [isLoading, setLoader] = useState(false);
  const [erorr, setError] = useState<ErrorResult | null>(null);
  const { handleSubmit, register, errors } = useForm<FormData>({
    reValidateMode: 'onBlur',
    submitFocusError: false,
  });

  const onSubmit = async (values: FormData) => {
    setLoader(true);
    setError(null);
    const { password, phoneNumber } = values;
    const result = await onLogin({
      password,
      phoneNumber: formatPhone(phoneNumber),
    }).catch(() => LoginResult.UnknownError);
    setLoader(false);
    const isResultSuccess = result === LoginResult.Success;

    if (isResultSuccess && afterLogin) {
      afterLogin();
    }

    if (!isResultSuccess) {
      setError(result as ErrorResult);
    }
  };

  return (
    <div className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      {logo}
      <form className={styles.form}>
        <Typography.Title bold tag="h1" className={cx('title')}>
          Войти
        </Typography.Title>
        <InputMask mask="+7 999 999-99-99" maskPlaceholder={null}>
          <PrimaryInput
            type="tel"
            label="Номер телефона"
            name="phoneNumber"
            autoComplete="on"
            className={styles.phone}
            ref={register(klona(validationRules.phone))} // seems like register mutating argument so we should create new instance on every render;
            errorText={errors.phoneNumber?.message}
          />
        </InputMask>
        <PrimaryInput
          className={styles.password}
          label="Пароль"
          type="password"
          name="password"
          autoComplete="password"
          ref={register(klona(validationRules.password))} // seems like register mutating argument so we should create new instance on every render;
          errorText={errors.password?.message}
        />
        {erorr && (
          <ErrorText className={cx('common-error')}>
            {errorTextMapper[erorr]}
          </ErrorText>
        )}
        <PrimaryButton
          size="large"
          type="submit"
          fullWidth={true}
          loading={isLoading}
        >
          Войти
        </PrimaryButton>
      </form>
    </div>
  );
};
