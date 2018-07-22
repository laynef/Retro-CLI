const directoryHandler = (pathname, files) => {
    return files.reduce((acculum, item) => {
        acculum[item] = require(`./${pathname}/${item}`);
        return acculum;
    }, {});
};

const baseFiles = [
    // LEAVE FOR CLI: BASE
];

const componentsFiles = [
    // LEAVE FOR CLI: COMPONENTS
];

const utilsFiles = [
    // LEAVE FOR CLI: UTILITIES
];

const helpersFiles = [
    // LEAVE FOR CLI: HELPERS
];

const validatorFiles = [
    // LEAVE FOR CLI: VALIDATORS
];

const obj = Object.assign({}, directoryHandler('base', baseFiles), directoryHandler('components', componentsFiles), directoryHandler('utils', utilsFiles), directoryHandler('helpers', helpersFiles), directoryHandler('validator', validatorFiles))

module.exports = obj;

