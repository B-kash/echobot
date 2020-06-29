const { interpolate } = require('./interpolate');

describe('interpolate', () => {
    it('should interpolate a variable from the session object', () => {
        const result = interpolate('Hi {firstname}, how are you today?', { firstname: 'John' }, { leftDelimiter: '{', rightDelimiter: '}' });
        const expected = 'Hi John, how are you today?';
        expect(result).toEqual(expected);
    });
    it('should interpolate multiple variables from the session object', () => {
        const result = interpolate('Hi @@firstname@@ @@lastname@@, how are you today?', { firstname: 'John', lastname: 'Doe' }, { leftDelimiter: '@@', rightDelimiter: '@@' });
        const expected = 'Hi John Doe, how are you today?';
        expect(result).toEqual(expected);
    });
    it('should replace a non-existant variable with an empty string', () => {
        const result = interpolate('Hi {firstname}, how are you today?', {}, { leftDelimiter: '{', rightDelimiter: '}' });
        const expected = 'Hi , how are you today?';
        expect(result).toEqual(expected);
    });
    it('should ignore an open delimiter without a closing delimiter', () => {
        const result = interpolate('Hi {firstname, how are you today?', { firstname: 'John' }, { leftDelimiter: '{', rightDelimiter: '}' })
        const expected = 'Hi {firstname, how are you today?';
        expect(result).toEqual(expected);
    })
});

describe('interpolate additional', () => {
    it('should interpolate a variable from the session object and replace all occurrence of it', () => {
        const result = interpolate('Hi {firstname}, how are you today? {firstname}', {firstname: 'John'}, {
            leftDelimiter: '{',
            rightDelimiter: '}'
        });
        const expected = 'Hi John, how are you today? John';
        expect(result).toEqual(expected);
    });
});
