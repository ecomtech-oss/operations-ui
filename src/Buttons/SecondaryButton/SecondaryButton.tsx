import React, { forwardRef } from 'react';

import { IternalButton, IternalButtonProps } from '../Internal/Internal';

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  IternalButtonProps
>((props, ref) => <IternalButton color="secondary" {...props} ref={ref} />);

SecondaryButton.displayName = 'SecondaryButton';
