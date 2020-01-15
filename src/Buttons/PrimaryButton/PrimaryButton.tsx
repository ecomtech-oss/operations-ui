import React, { forwardRef } from 'react';

import { IternalButton, IternalButtonProps } from '../Internal/Internal';

export const PrimaryButton = forwardRef<HTMLButtonElement, IternalButtonProps>(
  (props, ref) => <IternalButton color="primary" {...props} ref={ref} />,
);

PrimaryButton.displayName = 'PrimaryButton';
