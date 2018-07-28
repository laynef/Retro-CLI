module.exports = (value) => {
    const lookup = {
        'wrap': 'wrap',
        'nowrap': 'nowrap',
    };
    return !!lookup[value];
}