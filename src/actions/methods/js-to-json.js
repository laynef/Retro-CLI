const fs = require('fs');
const path = require('path');


module.exports = {

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

};
