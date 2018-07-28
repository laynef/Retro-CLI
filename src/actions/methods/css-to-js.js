const fs = require('fs');
const path = require('path');
const CSSJSON = require('cssjson');
const { convertToJson } = require('../../utils');


module.exports = {

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

};
