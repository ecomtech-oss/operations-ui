import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logout } from '@samokat/operations-icons';

import { RoundButton } from './RoundButton';

describe('RoundButton', () => {
  test('renderc content', () => {
    const { container } = render(<RoundButton icon={Logout} />);
    expect(container).toContainHTML('svg');
  });
  test('react on event', () => {
    const clickHanlder = jest.fn();
    const { container } = render(
      <RoundButton onClick={clickHanlder} icon={Logout} />,
    );
    fireEvent.click(container.querySelector('button'));
    expect(clickHanlder).toHaveBeenCalled();
  });

  test('if button is disabled dont react on events', () => {
    const clickHanlder = jest.fn();
    const { container } = render(
      <RoundButton onClick={clickHanlder} icon={Logout} disabled={true} />,
    );
    fireEvent.click(container.querySelector('button'));
    expect(clickHanlder).toBeCalledTimes(0);
  });

  test('if buttons is loading dont react on events', () => {
    const clickHanlder = jest.fn();
    const { container } = render(
      <RoundButton
        icon={Logout}
        onClick={clickHanlder}
        loading={true}
        disabled={false}
      />,
    );
    fireEvent.click(container.querySelector('button'));
    expect(clickHanlder).toBeCalledTimes(0);
  });
});
