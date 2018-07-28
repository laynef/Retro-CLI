const fs = require('fs');
const path = require('path');


module.exports = {

    createStyles: () => {
        const root = process.cwd();
        ncp(path.join(__dirname, 'structured'), path.join(root, 'styles'), (err) => {
            if (err) console.error('ERROR: CREATING YOUR STYLES');
            else console.log('Successfully created your styles')
        });
    }

};
