const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { cssToJson } = require('../../src/actions');


module.exports = () => {
    cssToJson(path.join(__dirname, 'conversions', 'bootstrap4.css'), path.join(__dirname, 'conversions', 'retro-bootstrap.json'));
    const json = require(path.join(__dirname, 'conversions', 'retro-bootstrap.json'));
    describe('CSS to JSON: "./conversions/retro-bootstrap.json"', () => {
        expect(json.html)
    })
};
