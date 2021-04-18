'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

var prompts = require('./prompts');
var writeFiles = require('./writing');

require('colors');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  prompting() {

    this.log(yosay(
      'Welcome to the first-rate ' + chalk.red('generator-artjoker') + ' generator!'
    ));

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing () {

    console.log(writeFiles,'WRITE');
    writeFiles.call(this);
    // writeFiles();
  }

  install () {
    if (this.props.install) {
      this.installDependencies({
        bower: false,
        npm: true
      });
    } else {
      this.log('Run ' + chalk.blue('npm install') + ' to install dependencies later');
    }
  }

  end () {
    if (this.props.sprites.indexOf('svg') > -1) {
      this.log(
        '\n'
        + chalk.red('DON\'T FORGET')
        + chalk.green(' create git for your project ¯\\_(ツ)_/¯')
        + '\n'
      );
    }
    this.log(chalk.green('Done!'));
  }
};
