module.exports = (value) => {
    const lookup = {
        'absolute': 'absolute',
        'relative': 'relative',
    };
    return !!lookup[value];
}