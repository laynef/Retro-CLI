module.exports = (value) => {
    const lookup = {
        'auto': 'auto',
        'ltr': 'ltr',
        'rtl': 'rtl',
    };
    return !!lookup[value];
}