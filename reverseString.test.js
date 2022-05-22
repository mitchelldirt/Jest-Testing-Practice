const reverseString = require('./reverseString')

describe('Reverse String', () => {
    test('Input is different form output', () => {
        expect(reverseString('string')).not.toMatch(/string/);
    })

    test('string is reverse', () => {
        expect(reverseString('string')).toBe('gnirts');
    })
});