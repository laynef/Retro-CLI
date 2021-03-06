const path = require('path');
const { ncp } = require('ncp');


module.exports = {

    createStyles: () => {
        const root = process.cwd();
        ncp(path.join(__dirname, '..', '..', 'templates', 'structured'), path.join(root, 'styles'), (err) => {
            if (err) console.error('ERROR: CREATING YOUR STYLES', err);
            else console.log('Successfully created your styles')
        });
    }

};
