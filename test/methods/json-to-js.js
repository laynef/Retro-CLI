const path = require('path');
const { expect } = require('chai');
const { jsonToJs } = require('../../src/actions');
const { isEqual } = require('lodash');


module.exports = () => {
    jsonToJs(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.json'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    const js = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    const json = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.json'));
    describe('JSON to JS: "./conversions/retro-bootstrap.js"', () => {
        it('The object is the same', () => {
            expect(isEqual(js, json)).to.be.true
        })
    })
};
