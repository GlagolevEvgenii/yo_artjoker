"use strict";

var _ = require("lodash");
var path = require("path");
var mkdirp = require("mkdirp");

module.exports = function() {
  var props = this.props;
  var destPath = this.destinationPath();

  props._ = {
    kebabCase: _.kebabCase,
    camelCase: _.camelCase,
    capitalize: _.capitalize
  };

  // Create directories
  mkdirp(path.join(destPath, "app/fonts"));
  mkdirp(path.join(destPath, "app/img"));

  // Dotfiles
  this.fs.copy(this.templatePath(".gitignore"), ".gitignore");
  this.fs.copyTpl(this.templatePath("gulpfile.js"), "gulpfile.js", props);
  this.fs.copyTpl(this.templatePath("package.json"), "package.json", props);

  // Common tasks
  this.fs.copyTpl(this.templatePath("gulp/default.js"), "gulp/default.js");
  this.fs.copy(this.templatePath("gulp/server.js"), "gulp/server.js");
  this.fs.copy(this.templatePath("gulp/script.js"), "gulp/script.js");
  this.fs.copy(this.templatePath("gulp/sass.js"), "gulp/sass.js");
  this.fs.copyTpl(this.templatePath("gulp/copy.js"), "gulp/copy.js", props);

  this.sprites = props.sprites; // Or in /templates/app/sass/_sprite_template.scss use options.sprites
  // compile templates tasks
  switch (props.templates) {
    case "nunjucks":
      this.fs.copy(
        this.templatePath("gulp/tasks/nunjucks.js"),
        "gulp/tasks/nunjucks.js"
      );
      break;
    case "pug":
      this.fs.copy(this.templatePath("gulp/pug.js"), "gulp/pug.js");
      break;
  }

  if (props.sprites.length) {
    this.fs.copy(
      this.templatePath("app/i/icons/check.svg"),
      "app/i/icons/check.svg"
    );
    this.fs.copy(
      this.templatePath("app/i/icons/empty.svg"),
      "app/i/icons/empty.svg"
    );
    this.fs.copy(
      this.templatePath("app/i/sprite/sprite.svg"),
      "app/i/sprite/sprite.svg"
    );
    this.fs.copy(
      this.templatePath("app/sass/_sprite_template.scss"),
      "app/sass/_sprite_template.scss"
    );
    this.fs.copy(
      this.templatePath("app/i/sprite/symbol/sprite.symbol.html"),
      "app/i/sprite/symbol/sprite.symbol.html"
    );
    this.fs.copyTpl(
      this.templatePath("gulp/svg-sprite.js"),
      "gulp/svg-sprite.js",
      props
    );
  }

  // Iconfont task

  if (props.sprites.indexOf("iconfont") !== -1) {
    this.fs.copy(this.templatePath("gulp/iconfont.js"), "gulp/iconfont.js");
    this.fs.copy(
      this.templatePath("app/sass/_icons.scss"),
      "app/sass/_icons.scss"
    );
  }

  // Copy directories

  this.fs.copy(this.templatePath("app/sass"), "app/sass");
  this.fs.copy(this.templatePath("app/js"), "app/js");

  switch (props.templates) {
    case "pug":
      this.fs.copy(this.templatePath("app/pug/index.pug"), "app/pug/index.pug");
      break;
    case "html":
      this.fs.copy(this.templatePath("app/index.html"), "app");
      break;
  }
};
