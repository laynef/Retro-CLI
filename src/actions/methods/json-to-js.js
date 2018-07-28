const fs = require('fs');
const path = require('path');


module.exports = {

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

};
