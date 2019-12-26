import React, { forwardRef, FC } from 'react';

import {
  IternalButton,
  ExternalButtonProps,
  IternalButtonProps,
} from '../Internal/Internal';

export const SecondaryButton: FC<ExternalButtonProps> = forwardRef<
  HTMLButtonElement,
  IternalButtonProps
>((props, ref) => <IternalButton color="secondary" {...props} ref={ref} />);

SecondaryButton.displayName = 'SecondaryButton';
