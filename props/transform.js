module.exports = (value) => {
    const origin = value;
    const pixelRegex = new RegExp('px', 'g');
    let results = [];

    const getPositions = (keyword, noPixel) => {
        let translateRegex = new RegExp(keyword, 'g');
        return origin.replace(translateRegex, '').replace(/[\(\)]\s/g, '').split(',').map(e => !noPixel && pixelRegex.test(e) ? e : noPixel ? e : null);
    }

    const setPositions = (keyword, index, value, singleOrigin) => {
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

    let trans = getPositions('translate', false);
    let skew = getPositions('skew', false);
    let scale = getPositions('scale', true);
    let rotate = getPositions('rotate', false);
    // let matrix = getPositions('matrix', false);

    return results
        .concat(trans.map((e, i, a) => {
            return setPositions('translate', i, e, false);
        }))
        .concat(skew.map((e, i, a) => {
            return setPositions('skew', i, e, false);
        }))
        .concat(scale.map((e, i, a) => {
            return setPositions('scale', i, e, a.length === 1);
        }))
        .concat(rotate.map((e, i, a) => {
            return setPositions('rotate', i, e, false);
        }))
        // .concat(matrix.map((e, i, a) => {
        //     return setPositions('matrix', i, e, a.length === 1);
        // }));

};
