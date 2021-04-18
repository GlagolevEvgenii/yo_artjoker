'use strict';

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Input project name',
    default: 'app'
  },
  {
    type: 'list',
    name: 'templates',
    message: 'Choose template engine',
    choices: [
      {
        name: 'Pug',
        value: 'pug'
      },
      {
        name: 'No templates, just pure html',
        value: 'html'
      },
      {
        name: 'Nunjucks',
        value: 'nunjucks'
      }
    ],
    default: 0
  },
  {
    type: 'list',
    name: 'sprites',
    message: 'How will we handle icons-sprites?',
    choices: [
      {
        name: 'SVG sprites',
        value: 'svg'
      },
       {
         name: 'Iconfonts',
         value: 'iconfont'
       },
    ],
    default: 0
  },
  {
    type: 'confirm',
    name: 'install',
    message: 'Install dependencies right now?',
    default: false
  }
];
