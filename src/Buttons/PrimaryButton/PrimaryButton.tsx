import React, { forwardRef, FC } from 'react';

import {
  IternalButton,
  ExternalButtonProps,
  IternalButtonProps,
} from '../Iternal/Iternal';

export const PrimaryButton: FC<ExternalButtonProps> = forwardRef<
  HTMLButtonElement,
  IternalButtonProps
>((props, ref) => <IternalButton color="primary" {...props} ref={ref} />);
