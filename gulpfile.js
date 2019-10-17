const { series } = require('gulp');

const { clean } = require('./build/clean');
const { code } = require('./build/code');
const { styles } = require('./build/styles');

const DESTINATION = 'dist';

module.exports.default = series(
  clean(DESTINATION),
  styles(DESTINATION),
  code(DESTINATION),
);
