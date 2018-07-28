const path = require('path');
const { expect } = require('chai');
const { cssToJson } = require('../../src/actions');
const { isEmpty } = require('lodash');


module.exports = () => {
    cssToJson(path.join(__dirname, 'conversions', 'bootstrap4.css'), path.join(__dirname, 'conversions', 'retro-bootstrap.json'));
    const json = require(path.join(__dirname, 'conversions', 'retro-bootstrap.json'));
    describe('CSS to JSON: "./conversions/retro-bootstrap.json"', () => {
        it('File is not empty', () => {
            expect(!isEmpty(json)).to.be.true
        })
    })
};
