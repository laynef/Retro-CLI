const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { jsonToCss } = require('../../src/actions');


module.exports = () => {
    jsonToCss(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.json'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.css'));
    const css = fs.readFileSync(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.css'), { encoding: 'utf8' });
    const cssNewLines = css.split('\n');
    describe('JSON to CSS: "./conversions/retro-bootstrap.css"', () => {
        it('File is not empty', () => {
            expect(cssNewLines.length > 1).to.be.true
        })
    })
};
