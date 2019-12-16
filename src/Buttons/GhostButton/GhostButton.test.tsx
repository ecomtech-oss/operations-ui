import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Clock } from '@samokat/operations-icons';

import { GhostButton } from './GhostButton';

describe('GhostButton', () => {
  test('react on event', () => {
    const clickHanlder = jest.fn();
    const { getByText } = render(
      <GhostButton onClick={clickHanlder}>Exit</GhostButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toHaveBeenCalled();
  });

  test('if disabled dont react on events', () => {
    const clickHanlder = jest.fn();
    const focusHandler = jest.fn();
    const { getByText } = render(
      <GhostButton
        onClick={clickHanlder}
        onFocus={focusHandler}
        disabled={true}
      >
        Exit
      </GhostButton>,
    );
    fireEvent.click(getByText('Exit'));
    expect(clickHanlder).toBeCalledTimes(0);
    expect(focusHandler).toBeCalledTimes(0);
  });

  test('it renders icon', () => {
    const { container } = render(<GhostButton icon={Clock}>Ghost</GhostButton>);
    expect(container).toContainHTML('svg');
  });
});
