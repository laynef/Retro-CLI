const fs = require('fs');
const path = require('path');


module.exports = {

    generateStyleFile: (sourcePathName, destPathName) => {
        const root = process.cwd();
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
