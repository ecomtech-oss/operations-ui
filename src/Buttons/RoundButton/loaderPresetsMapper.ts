export type Colors = 'blue' | 'white' | 'grey';

export const loaderPresetMapper: { [key in Colors]: Colors } = {
  blue: 'white',
  white: 'blue',
  grey: 'grey',
};
