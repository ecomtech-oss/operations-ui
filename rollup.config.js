import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist/',
    format: 'es',
  },
  external: [
    'react',
    'react-dom',
    'react-focus-lock',
    'klona',
    'react-hook-form',
    'classnames/bind',
    'react-input-mask',
    'nanoid',
    '@samokat/operations-icons',
  ],

  plugins: [
    postcss({
      modules: true,
      extract: 'dist/styles.css',
    }),
    typescript(),
  ],
};
