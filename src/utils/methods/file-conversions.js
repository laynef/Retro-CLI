const { JSON_STRUCTURE } = require('./constants');
const { kebabCasing } = require('./casing-conventions');
const { validJson } = require('./validation');
const { 
    namingFromCssToJson,
    namingFromJsonToCss,
    isOneElement,
} = require('./naming-conventions');
const { 
    camelCase, 
    kebabCase, 
    isEmpty 
} = require('lodash');


module.exports = {

    convertToCss: (obj) => {
        let object = {};
        for (let key in obj) {
            let values = {};
            for (let k in obj[key]) {
                let v = obj[key][k];
                k = kebabCase(k);
                values[k] = v;
            }
            key = namingFromJsonToCss(key);
            let copy = JSON_STRUCTURE;
            copy.attributes = kebabCasing(values);
            object[key] = copy;
        }
        return object;
    },

    convertToJson: (obj) => {

        let storage = {};
        for (let key in obj) {
            let value = obj[key];
            if (!!isOneElement(key) && value.attributes) {
                key = camelCase(namingFromCssToJson(key));
                let object = kebabCasing(value.attributes);
                storage[key] = validJson(object);
            }
        }
        
        for (let k in storage) {
            if (isEmpty(storage[k])) delete storage[k];
        }
    
        return storage;
    }

};
