module.exports = (value) => {
    const lookup = {
        'auto': 'auto',
        'top': 'top',
        'bottom': 'bottom',
        'center': 'center',
    };
    return !!lookup[value];
}