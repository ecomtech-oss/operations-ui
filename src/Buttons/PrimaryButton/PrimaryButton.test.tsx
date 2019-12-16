import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logout } from '@samokat/operations-icons';

import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  test('react on event', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={clickHanlder}>Exit</PrimaryButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toHaveBeenCalled();
  });

  test('if button is disabled dont react on events', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={clickHanlder} disabled={true}>
        Exit
      </PrimaryButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toBeCalledTimes(0);
  });

  test('if buttons is loading dont react on events', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={clickHanlder} loading={true} disabled={false}>
        Exit
      </PrimaryButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toBeCalledTimes(0);
  });

  test('it renders icon', () => {
    const { container } = render(
      <PrimaryButton startIcon={Logout}>Exit</PrimaryButton>,
    );
    expect(container).toContainHTML('svg');
  });
});
