const fs = require('fs');
const path = require('path');


// Creating circular import storing all functions in any file within directory './methods/'
// All functions must have unique names so they are not over written 
const index = fs.readdirSync(path.join(__dirname, 'methods')).map((item) => {
    return require(`./methods/${item}`);
}, []);

module.exports = index;