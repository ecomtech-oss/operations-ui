import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Search } from '@samokat/operations-icons';

import { SecondaryInput } from './SecondaryInput';

describe('SecondaryInput', () => {
  test('renders input', () => {
    const { container } = render(<SecondaryInput />);
    expect(container).toContainHTML('input');
  });

  test('react on event', () => {
    const changeEvent = jest.fn();
    const { container } = render(<SecondaryInput onChange={changeEvent} />);

    const input = container.querySelector('input');
    if (input) {
      fireEvent.change(input, { target: { value: 'test' } });
    }

    expect(changeEvent).toHaveBeenCalled();
  });

  test('if disabled dont trigger event', () => {
    const focusEvent = jest.fn();
    const { container } = render(
      <SecondaryInput onFocus={focusEvent} disabled={true} />,
    );

    const input = container.querySelector('input');
    if (input) {
      fireEvent.click(input);
    }

    expect(focusEvent).toHaveBeenCalledTimes(0);
  });
  test('render icon', () => {
    const { container } = render(<SecondaryInput icon={Search} />);
    expect(container).toContainHTML('svg');
  });
  test('show error', () => {
    const errorText = 'Field is required';
    const { container } = render(<SecondaryInput errorText={errorText} />);
    expect(container).toHaveTextContent(errorText);
  });

  test('clear button onclick', () => {
    const changeEvent = jest.fn();
    const clearEvent = jest.fn();
    const { container } = render(
      <SecondaryInput
        value={'world'}
        onChange={changeEvent}
        onClear={clearEvent}
      />,
    );
    const button = container.querySelector('button');
    const input = container.querySelector('input');

    if (button) {
      fireEvent.click(button);
    }

    expect(changeEvent).toBeCalled();
    expect(clearEvent).toBeCalled();
    expect(input?.value).toBe('');
  });
});
