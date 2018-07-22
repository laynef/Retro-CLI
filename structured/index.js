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

const obj = Object.assign({}, directoryHandler('base', baseFiles), directoryHandler('components', componentsFiles));
module.exports = obj;

