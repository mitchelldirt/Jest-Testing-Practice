const capitalize = require('./capitalize')

describe('Test that the first letter of the string is capitalized', () => {
    test('first letter capitalized', () => {
        expect(capitalize('string')).toMatch(/String/);
    })
});