module.exports = (value) => {
    const lookup = {
        'auto': 'auto',
        'left': 'left',
        'right': 'right',
        'center': 'center',
        'justify': 'justify',
    };
    return !!lookup[value];
}