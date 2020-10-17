"use strict";

module.exports = [
  {
    type: "input",
    name: "name",
    message: "Input project name",
    default: "app"
  },
  {
    type: "list",
    name: "templates",
    message: "Choose template engine",
    choices: [
      {
        name: "Nunjucks",
        value: "nunjucks"
      },
      {
        name: "Pug",
        value: "pug"
      }
      // {
      //   name: 'No templates, just pure html',
      //   value: 'html'
      // }
    ],
    default: 0
  },
  {
    type: "checkbox",
    name: "sprites",
    message: "How will we handle icons-sprites?",
    choices: [
      {
        name: "SVG sprites",
        value: "svg",
        checked: true
      },
      {
        name: "Iconfonts",
        value: "iconfont",
        checked: false
      }
    ]
  },
  {
    type: "confirm",
    name: "install",
    message: "Install dependencies right now?",
    default: false
  }
];
