import React, { forwardRef } from 'react';

import { IternalButton, ExternalButtonProps } from '../Iternal/Iternal';

export const PrimaryButton = forwardRef<HTMLButtonElement, ExternalButtonProps>(
  (props: ExternalButtonProps, ref) => (
    <IternalButton color="primary" {...props} ref={ref} />
  ),
);
