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
    'classnames/bind',
    'nanoid',
    'react-focus-lock',
    'react-dom',
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
