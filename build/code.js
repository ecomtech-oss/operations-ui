const { dest } = require('gulp');
const { createProject } = require('gulp-typescript');
const path = require('path');

const tsProject = createProject(path.resolve(__dirname, '..', 'tsconfig.json'));

const code = destination =>
  function compileCode() {
    return tsProject
      .src()
      .pipe(tsProject())
      .pipe(dest(destination));
  };

module.exports = {
  code,
};
