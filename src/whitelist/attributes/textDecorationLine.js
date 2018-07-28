module.exports = (value) => {
    const lookup = {
        'none': 'none',
        'underline': 'underline',
        'line-through': 'line-through',
    };
    return !!lookup[value];
}