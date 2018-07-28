const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { keywordSort, generateStyleFile, cssToJs } = require('../../src/actions');


module.exports = () => {

    // const keyword = 'text';

    // generateStyleFile('base', 'text');
    // cssToJs(path.join(__dirname, '..', 'conversions', 'bootstrap4.css'), path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    // const json = require(path.join(__dirname, '..', 'conversions', 'retro-bootstrap.js'));
    // fs.writeFileSync(path.join(__dirname, '..', 'styles', 'base', 'base.js'), `module.exports = ${JSON.stringify(json, null, 4)};`)
    // keywordSort(keyword, path.join(__dirname, '..', 'styles', 'base', 'base.js'), path.join(__dirname, '..', 'styles', 'base', 'text.js'));

    // const keywordMatching = (kword, object) => {
    //     const regex = new RegExp(`(?=${kword})`, 'ig');
    //     for (let key in object) {
    //         if (!regex.test(key)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    // describe('Sort keywords', () => {
    //     it('Folder exists', () => {
    //         expect(fs.existsSync(path.join(__dirname, '..', 'styles'))).to.be.true;
    //     });
    //     it('Base file exists', () => {
    //         expect(fs.existsSync(path.join(__dirname, '..', 'styles', 'base', 'base.js'))).to.be.true;
    //     });
    //     it('Text file exists', () => {
    //         expect(fs.existsSync(path.join(__dirname, '..', 'styles', 'base', 'text.js'))).to.be.true;
    //     });
    //     it('Check keyword', () => {
    //         expect(keywordMatching(keyword, require(path.join(__dirname, '..', 'styles', 'base', 'text.js')))).to.be.true;
    //     });
    // });
};
