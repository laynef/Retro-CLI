#!/usr/bin/env node

const { handlingActions } = require('../utils');
const actionCommand = process.argv[2] || 'documentation';

//  Execute CLI Command
const handler = handlingActions[actionCommand];
const args = process.argv.slice(3);
handler(...args);
