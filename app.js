'use strict';

const email = require('./lib/email');

module.exports = app => {
  if (app.config.email.app) email(app);
};

