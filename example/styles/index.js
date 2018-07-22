const directoryHandler = (pathname, files) => {
    return files.reduce((acculum, item) => {
        const filename = item.slice(obj, item.length - 4);
        acculum[item] = require(`./${pathname}/${filename}`);
        return acculum;
    }, {});
};

const baseFiles = [
    // LEAVE FOR CLI: BASE
'./base/base',
];

const componentsFiles = [
    // LEAVE FOR CLI: COMPONENTS
];

const obj = Object.assign({}, directoryHandler('base', baseFiles), directoryHandler('components', componentsFiles));
module.exports = obj;
