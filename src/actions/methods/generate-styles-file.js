const fs = require('fs');
const path = require('path');


module.exports = {

    generateStyleFile: (sourcePathName, destPathName) => {
        const root = process.cwd();

        if (!sourcePathName) {
            console.error(`Must give a name to a folder inside of styles`);
            return;
        }
    
        if (!destPathName) {
            console.error(`Must give a name to a file inside of ./styles/${sourcePathName}/`);
            return;
        }
        
        const base = sourcePathName;
        const filename = destPathName;
        const importRegex = new RegExp(`// LEAVE FOR CLI: IMPORT`);
        const exportRegex = new RegExp(`// LEAVE FOR CLI: EXPORT`);
        const read = fs.readFileSync(path.join(root, 'styles', 'index.js'), { encoding: 'utf8' }).replace(importRegex, `// LEAVE FOR CLI: IMPORT
import ${filename} from './${base}/${filename}';`).replace(exportRegex, `// LEAVE FOR CLI: EXPORT
    ...${filename},`);
        fs.writeFileSync(path.join(root, 'styles', 'index.js'), read);
        fs.writeFileSync(path.join(root, 'styles', base, filename + '.js'), `module.exports = {};`);
    
        console.log(`Successfully generated your file: ${destPathName}`)
    }

};
