"use strict";

const nodemailer = require('nodemailer');
const assert = require('assert');

module.exports = app => {
    app.addSingleton('email', createOneClient);
};

function createOneClient(config, app) {
    assert(config.host && config.secureConnection && config.port && config.auth,
    `[egg-email] 'host: ${config.host}', 'port: ${config.port}', 'secureConnection: ${config.secureConnection}', 'auth: ${config.auth}' are require on config`);

    app.coreLogger.info('[egg-email] connecting %s@%s:%s/%',
    config.host, config.port, config.auth);

    const stmpTransport = nodemailer.createTransport('SMTP', config);

    return stmpTransport;
}