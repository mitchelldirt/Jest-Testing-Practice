const myMathFunctions = require('./sum')

test('adds four numbers to equal 19', () => {
    expect(myMathFunctions.sum(5, 4, -10, 20)).toBe(19);
});

test('subtracts 50 from 100 to equal 50', () => {
    expect(myMathFunctions.subtract(100, 50)).toBe(50);
});