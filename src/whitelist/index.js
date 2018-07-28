const fs = require('fs');
const path = require('path');

// Root Directory of this file
const rootDirectory = path.join(__dirname);

// All file names in each directory in this directory 
// Stored in an array with an object with the key being the filename (style attirbute) and value being the validator
const allReactNativeTypesAllowed = fs.readdirSync(rootDirectory).reduce((acculum, item) => {
    
    // Check if the 'item' in the directory is a child directory
    if (fs.lstatSync(rootDirectory).isDirectory()) {
        // Check if directory has it's own dictionary already
        acculum[item] = acculum[item] ? acculum[item] : {};

        const currentDirectory = path.join(rootDirectory, item);
        fs.readdirSync(currentDirectory).forEach(file => {
            const filename = file.slice(0, file.length - 4);
            acculum[filename] = require(path.join(currentDirectory, filename));
            acculum[item][filename] = require(path.join(currentDirectory, filename));
        });
    }

    // Return dictionary all of attributes with their validators
    return acculum;
}, {});

module.exports = allReactNativeTypesAllowed;
