module.exports = (value) => {
    const lookup = {
        'normal': 'normal',
        'bold': 'bold',
    };
    return !!lookup[value] || typeof value === 'number';
}