#!/usr/bin/env node

const CSSJSON = require('cssjson');
const whitelist = require('./whitelist');

const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const {
    camelCase,
    kebabCase,
    isEmpty,
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

const indexProps = fs.readdirSync(path.join(__dirname, 'props')).reduce((acculum, item) => {
    const filename = item.replace(/\.js/g, '');
    acculum[filename] = require(`./props/${item}`);
    return acculum;
}, {});
const idsCssToJson = (str) => {
    return str[0] === '#' ? str.slice(1) + 'Id' : str[0] === '.' ? str.slice(1) + 'ClassName' : str; 
};
const idsJsonToCss = (str) => {
    let temp = '';
    temp += /Id/g.test(str) ? `#${kebabCase(str.replace(/Id/g, ''))}` : /ClassName/g.test(str) ? `.${kebabCase(str.replace(/ClassName/g, ''))}` : str; 
    return temp;
};
const oneElement = (str) => {
    return str.split(' ').length === 1 && !/[:@]/g.test(str);
};
const camelCaser = (obj) => {
    let data = {};
    for (let key in obj) {
        data[camelCase(key)] = obj[key].attributes || obj[key];
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
        if (objective[key] == Number(objective[key])) objective[key] = Number(objective[key]);
        if (key === 'fontWeight') objective[key] = String(objective[key]);
        if (typeof objective[key] === 'string') objective[key] = objective[key].replace(RegExp(' !important', 'ig'), '');
        if (!!indexProps[key]) objective[key] = indexProps[key](objective[key]);
    }
    for (let k in objective) {
        let val = objective[k];
        let validator = require(`./whitelist/${k}`);
        if (!validator || !validator(val)) delete objective[k];
    }
    return objective;
};

const docs = () => {
    console.log(`
RETRO CLI

Convert styles from web to mobile with CSS to JSON for React Native
Enter "retro create" to start your strucutred styling with easy tools for generating files
Enter "retro generate" for any file to create that should be entered into your stylesheet creator
The other folders like mixins are wrapper functions you can create over the styles in your other files

// Commands
retro documentation
retro create
retro generate <name-for-structured-styles-folder> <name-for-structured-styles-filename>
retro css-to-json <source-path-to-css-file> <destintation-path-to-json>
retro css-to-js <source-path-to-css-file> <destintation-path-to-js>
retro js-to-json <source-path-to-js-file> <destintation-path-to-json>
retro js-to-css <source-path-to-js-file> <destintation-path-to-css>
retro json-to-css <source-path-to-json-file> <destintation-path-to-css>
retro json-to-js <source-path-to-json-file> <destintation-path-to-js>

// Alias
retro docs === retro documentation
retro c === retro create
retro g === retro generate
retro c2j === retro css-to-json
retro c2js === retro css-to-js
retro j2c === retro json-to-css
retro js2c === retro js-to-css 
retro json2js ===  retro json-to-js
retro js2json === retro js-to-json

    `)
};

const generateStyleFile = () => {
    const root = process.cwd();
    const base = sourcePathName || 'components';
    const filename = destPathName;
    const importRegex = new RegExp(`// LEAVE FOR CLI: IMPORT`);
    const exportRegex = new RegExp(`// LEAVE FOR CLI: EXPORT`);
    const read = fs.readFileSync(path.join(root, 'styles', 'index.js'), { encoding: 'utf8' }).replace(importRegex, `// LEAVE FOR CLI: IMPORT
import ${filename} from './${base}/${filename}';`).replace(exportRegex, `// LEAVE FOR CLI: EXPORT
...${filename},`);
    fs.writeFileSync(path.join(root, 'styles', 'index.js'), read);
    fs.writeFileSync(path.join(root, 'styles', base, filename + '.js'), `module.exports = {};`);
};

const createStyles = () => {
    const root = process.cwd();
    ncp(path.join(__dirname, 'structured'), path.join(root, 'styles'), (err) => {
        if (err) console.error('ERROR: CREATING YOUR STYLES');
        else console.log('Successfully created your styles')
    });
};

const convertToJson = (obj) => {
    let storage = {};
    for (let key in obj) {
        let value = obj[key];
        if (!!oneElement(key) && value.attributes) {
            key = camelCase(idsCssToJson(key));
            let object = camelCaser(value.attributes);
            storage[key] = validJson(object);
        }
    }
    
    for (let k in storage) {
        if (isEmpty(storage[k])) delete storage[k];
    }

    return storage;
}

const keywordSort = (keyword, src, dest) => {
    const object = require(src);
    const keyMatches = {};
    const regex = new RegExp(keyword, 'g');
    for (let key in keyMatches) {
        if (regex.test(key)) {
            keyMatches[key] = keyMatches[key];
            delete object[key];
        }
    }
    fs.writeFileSync(src, `module.exports = ${JSON.stringify(object, null, 4)};`)
    fs.writeFileSync(dest, `module.exports = ${JSON.stringify(keyMatches, null, 4)};`)
}

const convertToCss = (obj) => {
    let object = {};
    for (let key in obj) {
        let values = {};
        for (let k in obj[key]) {
            let v = obj[key][k];
            k = kebabCase(k);
            values[k] = v;
        }
        key = idsJsonToCss(key);
        let copy = jsonSturcture();
        copy.attributes = kebabCaser(values);
        object[key] = copy;
    }
    return object;
}

// Convert css to json
const cssToJson = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.css')) {
        console.error(`Must have a valid css source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.json')) {
        console.error(`Must have a valid json destintion full path for file`);
        return;
    }

    const stringCSS = fs.readFileSync(srcPath);
    const json = CSSJSON.toJSON(stringCSS).children;

    const convertedObject = convertToJson(json);
    fs.writeFileSync(destPath, JSON.stringify(convertedObject, null, 4))

    console.log('CSS Converted to JSON')
};

// Convert json to css
const jsonToCss = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.json')) {
        console.error(`Must have a valid json source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.css')) {
        console.error(`Must have a valid css destintion full path for file`);
        return;
    }

    const json = require(srcPath);
    const serialJson = convertToCss(json);
    const temp = jsonSturcture();
    temp.children = serialJson;
    const css = CSSJSON.toCSS(temp);
    fs.writeFileSync(destPath, css)
};

const jsonToJs = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.json')) {
        console.error(`Must have a valid json source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.js')) {
        console.error(`Must have a valid js destintion full path for file`);
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
        console.error(`Must have a valid js source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.json')) {
        console.error(`Must have a valid json destintion full path for file`);
        return;
    }

    const obj = require(srcPath);
    fs.writeFileSync(destPath, JSON.stringify(obj, null, 4))

    console.log('JS Converted to JSON')
}

const cssToJs = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.css')) {
        console.error(`Must have a valid css source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.js')) {
        console.error(`Must have a valid js destintion full path for file`);
        return;
    }

    const stringCSS = fs.readFileSync(srcPath);
    const json = CSSJSON.toJSON(stringCSS).children;

    const convertedObject = convertToJson(json);
    fs.writeFileSync(destPath, `module.exports = ${JSON.stringify(convertedObject, null, 4)};`);

}

const jsToCss = (src, dest) => {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);

    if (!src || !srcPath || !srcPath.endsWith('.js')) {
        console.error(`Must have a valid js source full path for file`);
        return;
    }

    if (!dest || !destPath || !destPath.endsWith('.css')) {
        console.error(`Must have a valid css destintion full path for file`);
        return;
    }

    const json = require(srcPath);
    const serialJson = convertToCss(json);
    const temp = jsonSturcture();
    temp.children = serialJson;
    const css = CSSJSON.toCSS(temp);
    fs.writeFileSync(destPath, css)
}

// Object Literal for Conversions
const handlingActions = {
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
};

//  Execute CLI Command
const handler = handlingActions[actionCommand];
handler(sourcePathName, destPathName);
