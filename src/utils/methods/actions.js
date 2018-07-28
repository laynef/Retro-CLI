const fs = reuqire('fs');
const path = reuqire('path');


module.exports = {

    cssToJson: (src, dest) => {
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
    },

    jsToCss: (src, dest) => {
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
    },

    cssToJs: (src, dest) => {
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
    
    },

    jsToJson: (src, dest) => {
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
    },

    jsonToJs: (src, dest) => {
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
    },

    jsonToCss: (src, dest) => {
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
    },

    keywordSort: (keyword, src, dest) => {
        const srcPath = path.resolve(src);
        const destPath = path.resolve(dest);
    
        if (!src || !srcPath || !srcPath.endsWith('.js')) {
            console.error(`Must have a valid js source full path for file`);
            return;
        }
    
        if (!dest || !destPath || !destPath.endsWith('.js')) {
            console.error(`Must have a valid js destintion full path for file`);
            return;
        }
    
        if (!fs.existsSync(destPath)) {
            fs.writeFileSync(destPath, `module.exports = {};`)
        }
    
        let object = require(srcPath);
        let before = require(destPath);
    
        let keyMatches = {};
        const regex = new RegExp(`(?=${keyword})`, 'ig');
        for (let key in object) {
            if (regex.test(key)) {
                keyMatches[key] = object[key];
                delete object[key];
            }
        }
        
        fs.writeFileSync(srcPath, `module.exports = ${JSON.stringify(object, null, 4)};`)
        fs.writeFileSync(destPath, `module.exports = ${JSON.stringify(Object.assign({}, before, keyMatches), null, 4)};`)
    
        console.log(`Keyword: ${keyword} has been sorted`)
    },

};
