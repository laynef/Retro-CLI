#!/usr/bin/env node

const CSSJSON = require('cssjson');

const fs = require('fs');
const path = require('path');

const actionCommand = process.argv[2] || 'documentation';
const sourcePathName = process.argv[3];
const destPathName = process.argv[4];

// Global constants
const idCss = '#';
const classCss = '.';
const idJson = 'Id';
const classJson = 'ClassName'

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

    const css = CSSJSON.toCSS(json);

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
