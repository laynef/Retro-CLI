module.exports = (value) => {
    const lookup = {
        'visible': 'visible',
        'hidden': 'hidden',
    };
    return !!lookup[value];
}