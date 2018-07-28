const { 
    JSON_ID, 
    JSON_CLASS, 
    CSS_ID, 
    CSS_CLASS 
} = require('./constants');


module.exports = {

    namingFromCssToJson: (str) => {
        return str[0] === CSS_ID ? str.slice(1) + JSON_ID : str[0] === CSS_CLASS ? str.slice(1) + JSON_CLASS: str; 
    },

    namingFromJsonToCss: (str) => {
        const jsonIdRegex = new RegExp(JSON_ID, 'g');
        const jsonClassRegex = new RegExp(JSON_CLASS, 'g');

        let temp = '';
        temp += jsonIdRegex.test(str) ? 
            `${CSS_ID}${kebabCase(str.replace(jsonIdRegex, ''))}` : 
            jsonClassRegex.test(str) ? 
            `${CSS_CLASS}${kebabCase(str.replace(jsonClassRegex, ''))}` : str; 

        return temp;
    },

    isOneElement: (str) => {
        return str.split(' ').length === 1 && !/[:@]/g.test(str);
    },

};
