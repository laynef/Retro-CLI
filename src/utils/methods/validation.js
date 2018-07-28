const whitelist = require('../../whitelist');
const { camelCasing } = require('./casing-conventions');


module.exports = {

    validJson: (obj) => {
        let objective = camelCasing(obj);
    
        for (let key in objective) {
            
            // Filter
            if (!whitelist[key]) delete objective[key];
            if (objective[key] == Number(objective[key])) objective[key] = Number(objective[key]);
            if (key === 'fontWeight') objective[key] = String(objective[key]);
            if (typeof objective[key] === 'string') objective[key] = objective[key].replace(RegExp(' !important', 'ig'), '');
            if (!!indexProps[key]) objective[key] = indexProps[key](objective[key]);

            // Validate
            let val = objective[k];
            let validator = whitelist[k];
            if (!validator || !validator(val)) delete objective[k];

        }

        return objective;
    }

};
