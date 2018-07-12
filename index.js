#!/usr/bin/env node

const CSSJSON = require('cssjson');
const whitelist = require('./whitelist');

const fs = require('fs');
const path = require('path');
const {
    camelCase,
    kebabCase,
} = require('lodash');

const actionCommand = process.argv[2] || 'documentation';
const sourcePathName = process.argv[3];
const destPathName = process.argv[4];

// Global constants
const idCss = '#';
const classCss = '.';
const idJson = 'Id';
const classJson = 'ClassName'
const jsonSturcture = () => ({
    children: {},
    attributes: {},
});

const idsCssToJson = (str) => {
    return str[0] === '#' ? str.slice(1) + 'Id' : str[0] === '.' ? str.slice(1) + 'ClassName' : str; 
};
const idsJsonToCss = (str) => {
    return str.endsWith('Id') ? '#' + str.slice(0, str.length - 3) : str.endsWith('ClassName') ? '.' + str.slice(0, str.length - 10) + 'ClassName' : str; 
};
const oneElement = (str) => {
    return /\S/g.test(str) && !/[:@]/g.test(str);
};
const camelCaser = (obj) => {
    let data = {};
    for (let key in obj) {
        data[camelCase(key)] = obj[key].attributes;
    }
    return data;
};
const kebabCaser = (obj) => {
    let object = {};
    for (let key in obj) {
        object[kebabCase(key)] = obj[key];
    }
    return object;
};
const validJson = (obj) => {
    let objective = camelCaser(obj);
    for (let key in objective) {
        if (!whitelist[key]) delete objective[key];
    }
    return objective;
};

const docs = () => {
    console.log(`
RETRO CLI

Convert styles from web to mobile with CSS to JSON for React Native

retro documentation
retro css-to-json <source-path-to-css-file> <destintation-path-to-json>
retro json-to-css <source-path-to-json-file> <destintation-path-to-css>
retro json-to-js <source-path-to-json-file> <destintation-path-to-css>
retro js-to-json <source-path-to-json-file> <destintation-path-to-css>

// Shorthands
retro docs
retro c2j <source-path-to-json-file> <destintation-path-to-css>
retro j2c <source-path-to-json-file> <destintation-path-to-css>
retro json2js <source-path-to-json-file> <destintation-path-to-css>
retro js2json <source-path-to-json-file> <destintation-path-to-css>

    `)
};

const convertToJson = (obj) => {
    let storage = {};
    for (let key in obj) {
        key = idsCssToJson(key);
        if (oneElement(key)) {
            let object = camelCaser(obj[key]);
            storage[key] = validJson(object);
        }
    }
    return storage;
}

const convertToCss = (obj) => {
    let object = {};
    for (let key in obj) {
        key = idsJsonToCss(key);
        let copy = jsonSturcture();
        copy.attributes = kebabCaser(obj[key]);
        object[key] = copy;
    }
    return object;
}

// Convert css to json
const cssToJson = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.css')) {
        console.error(`Must have a valid source full path to file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.json')) {
        console.error(`Must have a valid destintion full path to file`);
        return;
    }

    const stringCSS = fs.readFileSync(srcPath);
    const json = CSSJSON.toJSON(stringCSS);

    const convertedObject = convertToJson(json);
    fs.writeFileSync(destPath, JSON.stringify(convertedObject, null, 4))

    console.log('CSS Converted to JSON')
};

// Convert json to css
const jsonToCss = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.json')) {
        console.error(`Must have a valid source full path to file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.css')) {
        console.error(`Must have a valid destintion full path to file`);
        return;
    }

    const json = require(srcPath);
    const css = CSSJSON.toCSS(convertToCss(json));

    fs.writeFileSync(destPath, css)
};

const jsonToJs = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.json')) {
        console.error(`Must have a valid source full path to file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.js')) {
        console.error(`Must have a valid destintion full path to file`);
        return;
    }

    const obj = require(srcPath);
    fs.writeFileSync(destPath, `module.exports = ${JSON.stringify(obj, null, 4)};`)

    console.log('JSON Converted to JS')
}

const jsToJson = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.js')) {
        console.error(`Must have a valid source full path to file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.json')) {
        console.error(`Must have a valid destintion full path to file`);
        return;
    }

    const obj = require(srcPath);
    fs.writeFileSync(destPath, JSON.stringify(obj, null, 4))

    console.log('JS Converted to JSON')
}

// Object Literal for Conversions
const handlingActions = {
    'css-to-json': cssToJson,
    'c2j': cssToJson,
    'json-to-css': jsonToCss,
    'j2c': jsonToCss,
    'js-to-json': jsToJson,
    'js2json': jsToJson,
    'json-to-js': jsonToJs,
    'json2js': jsonToJs,
    'j2c': jsonToCss,
    'documentation': docs,
    'docs': docs,
};

//  Execute CLI Command
const handler = handlingActions[actionCommand];
handler(sourcePathName, destPathName);
