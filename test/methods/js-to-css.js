const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { jsToCss } = require('../../src/actions');


module.exports = () => {
    jsToCss(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.css'));
    const css = fs.readFileSync(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.css'), { encoding: 'utf8' });
    const cssNewLines = css.split('\n');
    describe('JS to CSS: "./conversions/retro-bootstrap.js"', () => {
        it('File is not empty', () => {
            expect(cssNewLines.length > 1).to.be.true
        })
    })
};
