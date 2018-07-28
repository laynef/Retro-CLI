module.exports = (value) => {
    const blacklist = {
        'inherit': 'inherit',
    };
    return typeof value === 'string' && !blacklist[value];
}