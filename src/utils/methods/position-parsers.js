module.exports = {

    getPositions: (value, keyword, noPixel) => {
        const pixelRegex = new RegExp('px', 'g');
        let translateRegex = new RegExp(keyword, 'g');

        return value.replace(translateRegex, '')
            .replace(/\(/g, '').replace(/\)/g, '').replace(/\s/g, '')
            .split(',').filter(e => !noPixel && pixelRegex.test(e) ? e : noPixel ? e : null)
            .map(e => Number(e));
    },

    setPositions: (keyword, index, value, singleOrigin) => {
        const x = keyword + 'X';
        const y = keyword + 'Y';
        const z = keyword + 'Z';

        const keys = {
            0: x,
            1: y,
            2: z,
        };

        if (singleOrigin) return { [keyword]: value };
        const keyname = keys[index];
        return { [keyname]: value };
    }

};
