'use strict';

const email = require('./lib/email');

module.exports = agent => {
    if (agent.config.app.agent) email(agent);
};
