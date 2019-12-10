import React, { forwardRef } from 'react';

import { IternalButton, ExternalButtonProps } from '../Iternal/Iternal';

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  ExternalButtonProps
>((props: ExternalButtonProps, ref) => (
  <IternalButton color="secondary" {...props} ref={ref} />
));
