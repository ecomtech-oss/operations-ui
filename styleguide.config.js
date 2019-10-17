module.exports = {
  components: 'src/**/[A-Z]*.tsx',
  defaultExample: true,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  title: 'Samokat Operations UI kit',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { modules: true, importLoaders: 1 },
            },
            'postcss-loader',
          ],
        },
      ],
    },
  },
};
