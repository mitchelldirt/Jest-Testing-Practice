const cipherize = require('./ceasersCipher');

describe('Test that the ceasers cipher is shifting letter the correct key value over', () => {
    test('If shifted below 97 (a) function wraps back to z (122)', () => {
        expect(cipherize('a', -1)).toBe('z')
    });

    test('If shifted above z (122) functions wraps back to a (97)', () => {
        expect(cipherize('z', 1)).toBe('a')
    });

    test('Cipher come back in all lowercase', () => {
        expect(cipherize('StRiNgs', 1)).toBe('tusjoht')
    });

    test('Punctuation does not change', () => {
        expect(cipherize('string!-.*&^&%', 1)).toBe('tusjoh!-.*&^&%')
    });

    test('Test all the things!', () => {
        expect(cipherize('azPoNg!%n. dawd a', 5)).toBe("feutsl!%s. ifbi f")
    });
});