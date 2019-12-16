import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logout } from '@samokat/operations-icons';

import { SecondaryButton } from './SecondaryButton';

describe('SecondaryButton', () => {
  test('react on event', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <SecondaryButton onClick={clickHanlder}>Test</SecondaryButton>,
    );
    fireEvent.click(getByText('Test'));
    expect(clickHanlder).toHaveBeenCalled();
  });

  test('if button is disabled dont react on events', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <SecondaryButton onClick={clickHanlder} disabled={true}>
        Test
      </SecondaryButton>,
    );
    fireEvent.click(getByText('Test'));
    expect(clickHanlder).toBeCalledTimes(0);
  });

  test('if buttons is loading dont react on events', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <SecondaryButton onClick={clickHanlder} loading={true} disabled={false}>
        Exit
      </SecondaryButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toBeCalledTimes(0);
  });

  test('it renders icon', () => {
    const { container } = render(
      <SecondaryButton startIcon={Logout}>Exit</SecondaryButton>,
    );
    expect(container).toContainHTML('svg');
  });
});
