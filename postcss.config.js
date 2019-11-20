module.exports = {
  plugins: [
    require('postcss-import')({
      path: './src/',
    }),
    require('autoprefixer'),
    require('postcss-nested'),
  ],
};
