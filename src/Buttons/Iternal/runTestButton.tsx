import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logout } from '@samokat/operations-icons';

export const runTestButton = AbstractButtonComponent => {
  return describe(AbstractButtonComponent.displayName, () => {
    test('react on event', () => {
      const clickHanlder = jest.fn();
      const { getByText } = render(
        <AbstractButtonComponent onClick={clickHanlder}>
          Exit
        </AbstractButtonComponent>,
      );
      fireEvent.click(getByText('Exit'));
      expect(clickHanlder).toHaveBeenCalled();
    });

    test('if button is disabled dont react on events', () => {
      const clickHanlder = jest.fn();
      const { getByText } = render(
        <AbstractButtonComponent onClick={clickHanlder} disabled={true}>
          Exit
        </AbstractButtonComponent>,
      );
      fireEvent.click(getByText('Exit'));
      expect(clickHanlder).toBeCalledTimes(0);
    });

    test('if buttons is loading dont react on events', () => {
      const clickHanlder = jest.fn();
      const { getByText } = render(
        <AbstractButtonComponent
          onClick={clickHanlder}
          loading={true}
          disabled={false}
        >
          Exit
        </AbstractButtonComponent>,
      );
      fireEvent.click(getByText('Exit'));
      expect(clickHanlder).toBeCalledTimes(0);
    });

    test('it renders icon', () => {
      const { container } = render(
        <AbstractButtonComponent leftIcon={Logout}>
          Exit
        </AbstractButtonComponent>,
      );
      expect(container).toContainHTML('svg');
    });
  });
};
