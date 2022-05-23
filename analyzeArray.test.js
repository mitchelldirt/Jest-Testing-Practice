const analyzeArray = require('./analyzeArray.js')

describe('verify values of object based on an array (average, min, max, length)', () => {
    test('Object contains correct values (see describe)', () => {
        expect(analyzeArray([2, 6, 8, 1, 1])).toEqual({
            average: 3.6,
            min: 1,
            max: 8,
            length: 5
        })
    });
});