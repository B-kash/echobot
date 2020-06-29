const interpolate = (value, session = {}, options = {}) => {
    const fallbackRegexString = options.leftDelimiter + '[^' + options.rightDelimiter + ']*' + options.rightDelimiter;
    const fallbackRegex = new RegExp(fallbackRegexString, 'g');
    let keys = Object.keys(session);
    if (keys.length === 0) {
        value = value.replace(fallbackRegex, '');
    }
    for (const key of keys) {
        const regexString = options.leftDelimiter + key + options.rightDelimiter;
        const regex = new RegExp(regexString, 'g');
        if (value.match(regex)) {
            value = value.replace(regex, session[key]);
        } else {
            value = value.replace(fallbackRegex, '');
        }
    }
    return value;
};

module.exports = {interpolate};
