module.exports = (value) => {
    const lookup = {
        'solid': 'solid',
        'double': 'double',
        'dotted': 'dotted',
        'dashed': 'dashed',
    };
    return !!lookup[value];
}