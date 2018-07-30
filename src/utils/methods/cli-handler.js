const {
    cssToJs,
    jsToCss,
    cssToJson,
    jsonToCss,
    jsToJson,
    jsonToJs,
    keywordSort,
    documentation,
    generateStyleFile,
    createStyles,
} = require('../../actions');

const {
    cssToJsDocumentation,
    jsToCssDocumentation,
    cssToJsonDocumentation,
    jsonToCssDocumentation,
    jsToJsonDocumentation,
    jsonToJsDocumentation,
    keywordSortDocumentation,
    generateStyleFileDocumentation,
    createStylesDocumentation,
} = require('../../documentation');


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
        'documentation': documentation,
        'docs': documentation,
        'keyword-sort': keywordSort,
        'ks': keywordSort,
    },

    handlingDocumentation: {
        'css-to-js': cssToJsDocumentation,
        'c2js': cssToJsDocumentation,
        'js-to-css': jsToCssDocumentation,
        'js2c': jsToCssDocumentation,
        'css-to-json': cssToJsonDocumentation,
        'c2j': cssToJsonDocumentation,
        'json-to-css': jsonToCssDocumentation,
        'j2c': jsonToCssDocumentation,
        'js-to-json': jsToJsonDocumentation,
        'js2json': jsToJsonDocumentation,
        'json-to-js': jsonToJsDocumentation,
        'json2js': jsonToJsDocumentation,
        'j2c': jsonToCssDocumentation,
        'g': generateStyleFileDocumentation,
        'generate': generateStyleFileDocumentation,
        'c': createStylesDocumentation,
        'create': createStylesDocumentation,
        'keyword-sort': keywordSortDocumentation,
        'ks': keywordSortDocumentation,
        'documentation': documentation,
        'docs': documentation,
    }

};
