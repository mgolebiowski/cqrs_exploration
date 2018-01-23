## Installation:
https://github.com/rails/webpacker/blob/master/README.md

## yarn modules
  packages.json
```
  $ yarn install
```
## Babel configuration:
.babelrc

  If you want to use Object.assign babel needs a "transform-object-assign" plugin in babelrc file

## Eslint configuration
  .eslintrc.json
  .eslintignore

  pre-commit hook:
  $project/.git/pre-commit

## Bootstrap and JQuery
  javascript/packs/js/application.js     - file with bootstrap.js and jquery
  javascript/packs/sass/application.sass - file with bootstrap.css

  additionally:
    config/webpack/environment.js - jquery as plugin for bootstrap