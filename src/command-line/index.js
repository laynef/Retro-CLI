#!/usr/bin/env node

const { 
    handlingActions, 
    handlingDocumentation,
} = require('../utils');

//  Execute CLI Command
const user = process.argv.slice(2);

const args = [];
const help = new RegExp(/help/ig);
let actionCommand = user[0] || 'documentation';
let handler = null;

if (actionCommand === '--help') {
    actionCommand = 'documentation';
}

for (var i = 1; i < user.length; i++) {
    if (help.test(user[i])) {
        handler = handlingDocumentation[actionCommand];
    } else {
        args.push(user[i]);
    }
}

handler = handler && typeof handler === 'function' ? handler : handlingActions[actionCommand];
handler(...args);
