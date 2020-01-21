import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { render, fireEvent, act } from '@testing-library/react';

import { Login } from './Login';
import { LoginResult } from './constants';

describe('Login page', () => {
  const setupLoginPage = (onLogin, afterLogin) => {
    const renderResult = render(
      <Login onLogin={onLogin} afterLogin={afterLogin} />,
    );
    const tel = renderResult.container.querySelector(
      'input[type="tel"]',
    ) as HTMLInputElement;
    const password = renderResult.container.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;
    const loginButton = renderResult.container.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    return {
      renderResult,
      tel,
      password,
      loginButton,
      onLogin,
      afterLogin,
    };
  };

  test('it correct renders', () => {
    const { tel, password, loginButton, renderResult } = setupLoginPage(
      jest.fn().mockResolvedValue(LoginResult.Success),
      jest.fn(),
    );
    const { queryByTestId } = renderResult;
    expect(tel).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(queryByTestId('logo')).toBeInTheDocument();
  });

  test('success login', async () => {
    const { tel, password, loginButton, onLogin, afterLogin } = setupLoginPage(
      jest.fn().mockResolvedValue(LoginResult.Success),
      jest.fn(),
    );

    tel.value = '+7 901 500-02-02';
    fireEvent.change(password, { target: { value: 'secret' } });
    ReactTestUtils.Simulate.input(tel); // using simulate instead of fireevent because of react-input-mask;

    await act(async () => {
      fireEvent.click(loginButton);
    });

    expect(tel.value).toBe('+7 901 500-02-02');
    expect(password.value).toBe('secret');
    expect(onLogin).toBeCalledTimes(1);
    expect(afterLogin).toBeCalledTimes(1);
  });

  test('error invalid credentials', async () => {
    const {
      renderResult,
      tel,
      password,
      loginButton,
      onLogin,
      afterLogin,
    } = setupLoginPage(
      jest.fn().mockResolvedValue(LoginResult.Success),
      jest.fn(),
    );
    const { queryByText } = renderResult;

    tel.value = '+7 901 500-02-0';
    fireEvent.change(password, { target: { value: '' } });
    ReactTestUtils.Simulate.input(tel); // using simulate instead of fireevent because of react-input-mask;
    await act(async () => {
      fireEvent.click(loginButton);
    });

    expect(queryByText('Номер должен состоять из 11 цифр')).toBeInTheDocument();
    expect(queryByText('Для входа нужен пароль')).toBeInTheDocument();
    expect(onLogin).toBeCalledTimes(0);
    expect(afterLogin).toBeCalledTimes(0);
  });

  test('ForibdenError', async () => {
    const {
      renderResult,
      tel,
      password,
      loginButton,
      onLogin,
      afterLogin,
    } = setupLoginPage(
      jest.fn().mockResolvedValue(LoginResult.ForbiddenError),
      jest.fn(),
    );
    const { queryByText } = renderResult;

    tel.value = '+7 901 500-02-01';
    fireEvent.change(password, { target: { value: 'pass' } });
    ReactTestUtils.Simulate.input(tel); // using simulate instead of fireevent because of react-input-mask;
    await act(async () => {
      fireEvent.click(loginButton);
    });

    expect(onLogin).toBeCalledTimes(1);
    expect(queryByText('Недостачно прав')).toBeInTheDocument();
    expect(afterLogin).toBeCalledTimes(0);
  });
});

// });
