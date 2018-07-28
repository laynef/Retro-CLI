const path = require('path');
const { expect } = require('chai');
const { jsToJson } = require('../../src/actions');
const { isEqual } = require('lodash');


module.exports = () => {
    jsToJson(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.json'));
    const js = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    const json = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.json'));
    describe('JS to JSON: "./conversions/retro-bootstrap.json"', () => {
        it('The object is the same', () => {
            expect(isEqual(js, json)).to.be.true
        })
    })
};
