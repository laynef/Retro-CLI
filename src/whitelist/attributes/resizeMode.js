module.exports = (value) => {
    const lookup = {
        'cover': 'cover',
        'contain': 'contain',
        'stretch': 'stretch',
        'repeat': 'repeat',
        'center': 'center',
    };
    return !!lookup[value];
}