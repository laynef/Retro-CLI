const { getPositions, setPositions } = require('../../utils');

module.exports = (value) => {
    let results = [];

    let trans = getPositions(value, 'translate', false);
    let skew = getPositions(value, 'skew', false);
    let scale = getPositions(value, 'scale', true);
    let rotate = getPositions(value, 'rotate', false);

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
        .filter(e => !!e);

};
