const { camelCase, kebabCase } = require('lodash');

module.exports = {

    camelCasing: (obj) => {
        let data = {};
        for (let key in obj) {
            data[camelCase(key)] = obj[key].attributes || obj[key];
        }
        return data;
    },

    kebabCasing: (obj) => {
        let object = {};
        for (let key in obj) {
            object[kebabCase(key)] = obj[key];
        }
        return object;
    }

};
