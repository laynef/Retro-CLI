module.exports = (value) => {
    const lookup = {
        'flex-start': 'flex-start',
        'flex-end': 'flex-end',
        'center': 'center',
        'space-between': 'space-between',
        'space-around': 'space-around',
    };
    return !!lookup[value];
}