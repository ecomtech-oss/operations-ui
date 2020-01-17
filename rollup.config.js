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
    'react-input-mask',
    'react-hook-form',
    'classnames/bind',
    '@samokat/operations-icons',
    'klona',
    'nanoid',
  ],

  plugins: [
    postcss({
      modules: true,
      extract: 'dist/styles.css',
    }),
    typescript(),
  ],
};
