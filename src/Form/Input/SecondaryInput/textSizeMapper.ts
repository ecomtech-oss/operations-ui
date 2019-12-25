export type Size = 'small' | 'medium';

export const textSizeMapper: { [key in Size]: 'small' | 'normal' } = {
  small: 'small',
  medium: 'normal',
};
