const path = require('path');
const { expect } = require('chai');
const { cssToJs } = require('../../src/actions');
const { isEmpty } = require('lodash');


module.exports = () => {
    cssToJs(path.join(__dirname, '..', 'conversions', 'bootstrap4.css'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    const js = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    describe('CSS to JS: "./conversions/retro-bootstrap.js"', () => {
        it('File is not empty', () => {
            expect(!isEmpty(js)).to.be.true
        })
    })
};
