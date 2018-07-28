const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { generateStyleFile, createStyles } = require('../../src/actions');


module.exports = () => {
    createStyles();
    generateStyleFile('base', 'base');
    describe('Generate a new styles file', () => {
        it('Folder exists', () => {
            expect(fs.existsSync(path.join(__dirname, '..', 'styles'))).to.be.true;
        });
        it('File exists', () => {
            expect(fs.existsSync(path.join(__dirname, '..', 'styles', 'base', 'base.js'))).to.be.true;
        });
    });
};
