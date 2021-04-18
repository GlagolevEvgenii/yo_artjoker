'use strict';

var _ = require('lodash');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function () {


  var props = this.props;
  var destPath = this.destinationPath();

  props._ = {
    kebabCase: _.kebabCase,
    camelCase: _.camelCase,
    capitalize: _.capitalize
  };

  // create directories
  mkdirp(path.join(destPath, 'app/fonts'));
  mkdirp(path.join(destPath, 'app/img'));

  // copy directories
  this.fs.copy(this.templatePath('app/sass/components'), 'app/sass/components');
  this.fs.copy(this.templatePath('app/sass/_fonts.scss'), 'app/sass/_fonts.scss');
  this.fs.copy(this.templatePath('app/sass/_global.scss'), 'app/sass/_global.scss');
  this.fs.copy(this.templatePath('app/sass/_layout.scss'), 'app/sass/_layout.scss');
  this.fs.copy(this.templatePath('app/sass/_mixins.scss'), 'app/sass/_mixins.scss');
  this.fs.copy(this.templatePath('app/sass/_reset.scss'), 'app/sass/_reset.scss');
  this.fs.copy(this.templatePath('app/sass/_variables.scss'), 'app/sass/_variables.scss');
  this.fs.copy(this.templatePath('app/sass/main.scss'), 'app/sass/main.scss');
  this.fs.copy(this.templatePath('app/sass/without-js.scss'), 'app/sass/without-js.scss');
  this.fs.copy(this.templatePath('app/i/icons/check.svg'), 'app/i/icons/check.svg');
  this.fs.copy(this.templatePath('app/i/icons/empty.svg'), 'app/i/icons/empty.svg');
  this.fs.copy(this.templatePath('app/js'), 'app/js');

  // dotfiles
  this.fs.copy(this.templatePath('.gitignore'), '.gitignore');
  this.fs.copyTpl(this.templatePath('gulpfile.js'), 'gulpfile.js', props);
  this.fs.copyTpl(this.templatePath('package.json'),'package.json', props);


  switch (props.sprites) {
    case 'svg':
      this.fs.copy(this.templatePath('app/i/sprite/sprite.svg'), 'app/i/sprite/sprite.svg');
      this.fs.copy(this.templatePath('app/sass/_sprite_template.scss'), 'app/sass/_sprite_template.scss');
      this.fs.copy(this.templatePath('app/i/sprite/symbol/sprite.symbol.html'), 'app/i/sprite/symbol/sprite.symbol.html');
      break;
    case 'iconfont':
      this.fs.copy(this.templatePath('app/sass/iconfont'),'app/sass/iconfont');
      break;
  }

  switch (props.templates) {
    case 'nunjucks':
      this.fs.copy(this.templatePath('app/template-nunjucks'), 'app/templates');
      break;
    case 'pug':
      this.fs.copy(this.templatePath('app/template-pug'), 'app/templates');
      break;
    case 'html':
      this.fs.copy(this.templatePath('app/template-html'), 'app/templates');
      break;
  }
};
