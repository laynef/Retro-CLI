module.exports = (value) => {
    const lookup = {
        'row': 'row',
        'column': 'column',
        'column-reverse': 'column-reverse',
        'row-reverse': 'row-reverse',
    };
    return !!lookup[value];
}