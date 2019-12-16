import React, { forwardRef, FC } from 'react';

import {
  IternalButton,
  ExternalButtonProps,
  IternalButtonProps,
} from '../Iternal/Iternal';

export const SecondaryButton: FC<ExternalButtonProps> = forwardRef<
  HTMLButtonElement,
  IternalButtonProps
>((props, ref) => <IternalButton color="secondary" {...props} ref={ref} />);
