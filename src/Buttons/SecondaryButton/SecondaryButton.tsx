import React, { forwardRef } from 'react';

import { IternalButton, IternalButtonProps } from '../Internal/Internal';

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  Omit<IternalButtonProps, 'color'>
>((props, ref) => <IternalButton color="secondary" {...props} ref={ref} />);

SecondaryButton.displayName = 'SecondaryButton';
