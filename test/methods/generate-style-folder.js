const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { createStyles } = require('../../src/actions');


module.exports = () => {
    if (fs.existsSync(path.join(__dirname, '..', 'styles'))) {
        fs.rmdirSync(path.join(__dirname, '..', 'styles'));
    }
    createStyles();
    describe('Generate a new styles folder', () => {
        it('Folder exists', () => {
            expect(fs.existsSync(path.join(__dirname, '..', 'styles'))).to.be.true;
        })
    })
};
