const fs = require('fs');
const path = require('path');
const CSSJSON = require('cssjson');
const { convertToCss } = require('../../utils/methods/file-conversions');
const { JSON_STRUCTURE } = require('../../utils/methods/constants');


module.exports = {

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
        const temp = JSON_STRUCTURE;
        temp.children = serialJson;
        const css = CSSJSON.toCSS(temp);
        fs.writeFileSync(destPath, css)
    },

};
