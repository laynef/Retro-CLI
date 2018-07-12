module.exports = (value) => {
    const lookup = {
        'flex-start': 'flex-start',
        'flex-end': 'flex-end',
        'center': 'center',
        'stretch': 'stretch',
        'auto': 'auto',
    };
    return !!lookup[value];
}