export type ButtonSizes = 'medium' | 'large';

export const iconSizeMapper: { [key in ButtonSizes]: 'medium' | 'small' } = {
  large: 'medium',
  medium: 'small',
};
