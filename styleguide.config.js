const path = require('path');

module.exports = {
  defaultExample: true,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap',
        },
      ],
    },
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  require: [path.join(__dirname, 'src/variables.css')],
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
        {
          name: 'Button',
          content: 'src/Buttons/Button.md',
          components: 'src/Buttons/**/[A-Z]*.tsx',
          exampleMode: 'collapse',
          usageMode: 'collapse',
        },
        {
          name: 'Forms',
          content: 'src/Form/Form.md',
          components: 'src/Form/**/[A-Z]*.tsx',
          exampleMode: 'collapse',
          usageMode: 'collapse',
        },
        {
          name: 'Mega',
          components: 'src/Mega/**/[A-Z]*.tsx',
          exampleMode: 'collapse',
          usageMode: 'collapse',
        },
        {
          name: 'Pages',
          components: 'src/Pages/**/[A-Z]*.tsx',
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
