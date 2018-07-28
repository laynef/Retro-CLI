const fs = require('fs');
const path = require('path');


module.exports = {

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
