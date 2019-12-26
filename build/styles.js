const { src, dest, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const { Subject, from } = require('rxjs');
const { mergeMap, map } = require('rxjs/operators');
const modules = require('postcss-modules');
const fs = require('fs-extra');
const path = require('path');
const concat = require('gulp-concat');

const postCssConfig = require('../postcss.config');

const getJSONFromCssModules = subject => (cssFileName, data) => {
  const cssName = path.relative(
    path.resolve(__dirname, '..', 'src'),
    cssFileName,
  );
  const fileName = `${cssName}.json`;

  subject.next({
    fileName,
    data,
  });
};

const styles = destination => {
  const jsonSubject = new Subject().pipe(
    map(({ fileName, data }) => ({
      filePath: path.resolve(__dirname, '..', destination, fileName),
      data,
    })),
    mergeMap(({ filePath, data }) =>
      from(
        Promise.resolve()
          .then(() => fs.ensureFile(filePath))
          .then(() => fs.writeJSON(filePath, data)),
      ),
    ),
  );

  const compileCss = () =>
    src('./src/*.css')
      .pipe(
        postcss(
          [
            ...postCssConfig.plugins,
            modules({ getJSON: getJSONFromCssModules(jsonSubject) }),
          ],
          postCssConfig,
        ),
      )
      .on('finish', () => jsonSubject.complete())
      .pipe(concat('styles.css'))
      .pipe(dest(destination));

  const generateCssModulesDefinitions = () => jsonSubject;

  const compileStyles = parallel(compileCss, generateCssModulesDefinitions);

  return compileStyles;
};

module.exports = {
  styles,
};
