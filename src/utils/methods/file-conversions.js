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
            key = idsJsonToCss(key);
            let copy = jsonSturcture();
            copy.attributes = kebabCaser(values);
            object[key] = copy;
        }
        return object;
    },

    convertToJson: (obj) => {
        let storage = {};
        for (let key in obj) {
            let value = obj[key];
            if (!!oneElement(key) && value.attributes) {
                key = camelCase(idsCssToJson(key));
                let object = camelCaser(value.attributes);
                storage[key] = validJson(object);
            }
        }
        
        for (let k in storage) {
            if (isEmpty(storage[k])) delete storage[k];
        }
    
        return storage;
    }

};
