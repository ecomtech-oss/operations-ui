const { src } = require('gulp');
const cleanTask = require('gulp-clean');

const clean = destination =>
  function cleanDestination() {
    return src(destination, { allowEmpty: true }).pipe(cleanTask());
  };

module.exports = {
  clean,
};
