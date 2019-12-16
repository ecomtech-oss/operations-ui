import { IconSize } from '../../Icon';

export type ButtonSize = 'medium' | 'large';

export const iconSizeMapper: { [key in ButtonSize]: IconSize } = {
  large: 'medium',
  medium: 'small',
};
