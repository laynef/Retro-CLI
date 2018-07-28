const fs = require('fs');
const path = require('path');
const CSSJSON = require('cssjson');
const { convertToCss } = require('../../utils/methods/file-conversions');


module.exports = {

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
        const temp = {
            attributes: {},
            children: serialJson,
        };
        temp.children = serialJson;
        const css = CSSJSON.toCSS(temp);
        fs.writeFileSync(destPath, css)
    },

};
