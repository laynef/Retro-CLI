const {
    cssToJs,
    jsToCss,
    cssToJson,
    jsonToCss,
    jsToJson,
    jsonToJs,
    keywordSort,
    docs,
    generateStyleFile,
    createStyles,
} = require('../../actions');


module.exports = {

    handlingActions: {
        'css-to-js': cssToJs,
        'c2js': cssToJs,
        'js-to-css': jsToCss,
        'js2c': jsToCss,
        'css-to-json': cssToJson,
        'c2j': cssToJson,
        'json-to-css': jsonToCss,
        'j2c': jsonToCss,
        'js-to-json': jsToJson,
        'js2json': jsToJson,
        'json-to-js': jsonToJs,
        'json2js': jsonToJs,
        'j2c': jsonToCss,
        'g': generateStyleFile,
        'generate': generateStyleFile,
        'c': createStyles,
        'create': createStyles,
        'documentation': docs,
        'docs': docs,
        'keyword-sort': keywordSort,
        'ks': keywordSort,
    }

};
