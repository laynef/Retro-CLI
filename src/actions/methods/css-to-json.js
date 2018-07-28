const fs = require('fs');
const path = require('path');


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

};
