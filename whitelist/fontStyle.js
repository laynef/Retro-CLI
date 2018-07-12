module.exports = (value) => {
    const lookup = {
        'normal': 'normal',
        'italic': 'italic',
    };
    return !!lookup[value];
}