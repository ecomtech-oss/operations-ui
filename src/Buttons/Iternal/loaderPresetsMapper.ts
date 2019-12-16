import { LoaderPreset, white, grey } from '../../Loader/presets';

export type Colors = 'primary' | 'secondary';

export const loaderPresetsMapper: { [key in Colors]: LoaderPreset } = {
  primary: white,
  secondary: grey,
};
