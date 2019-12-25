import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PrimaryInput } from './PrimaryInput';

describe('PrimaryInput', () => {
  test('renders input', () => {
    const { container } = render(<PrimaryInput />);
    expect(container).toContainHTML('input');
  });
  test('react on event', () => {
    const changeEvent = jest.fn();
    const { container } = render(<PrimaryInput onChange={changeEvent} />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(changeEvent).toHaveBeenCalled();
  });

  test('if disabled dont trigger event', () => {
    const focusEvent = jest.fn();
    const { container } = render(
      <PrimaryInput onFocus={focusEvent} disabled={true} />,
    );
    const input = container.querySelector('input');
    fireEvent.click(input);
    expect(focusEvent).toHaveBeenCalledTimes(0);
  });
  test('show error', () => {
    const errorText = 'Field is required';
    const { container } = render(<PrimaryInput errorText={errorText} />);

    expect(container).toHaveTextContent(errorText);
  });
});
