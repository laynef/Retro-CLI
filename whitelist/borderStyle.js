module.exports = (value) => {
    const lookup = {
        'solid': 'solid',
        'dotted': 'dotted',
        'dashed': 'dashed',
    };
    return !!lookup[value];
}