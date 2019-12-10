module.exports = {
  defaultExample: true,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  title: 'Samokat Operations UI kit',
  skipComponentsWithoutExample: true,
  sections: [
    {
      content: 'README.md',
    },
    {
      name: 'UI Components',
      exampleMode: 'collapse',
      usageMode: 'collapse',
      sections: [
        {
          name: 'Typography',
          content: 'src/Typography/Typography.md',
          components: 'src/Typography/**/[A-Z]*.tsx',
          exampleMode: 'collapse',
          usageMode: 'collapse',
        },
        {
          name: 'Graphic',
          components: 'src/{Icon,Loader}/[A-Z]*.tsx',
          exampleMode: 'collapse',
          usageMode: 'collapse',
        },
      ],
    },
  ],
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
