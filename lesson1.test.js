const myMathFunctions = require('./lesson1')

test('adds four numbers to equal 19', () => {
    expect(myMathFunctions.sum(5, 4, -10, 20)).toBe(19);
});

test('Result of sum is not null', () => {
    expect(myMathFunctions.sum(3, 5, 2, 1)).not.toBeNull();
});

test ('Result is greater than 3', () => {
    const value = myMathFunctions.sum(1, 0, 1, 2);
    expect(value).toBeGreaterThan(3);
});

test('Number is close to 3.6', () => {
    expect(myMathFunctions.sum(1.1, 0.1, 1.1, 1.1)).toBeCloseTo(3.401)
})

test('subtracts 50 from 100 to equal 50', () => {
    expect(myMathFunctions.subtract(100, 50)).toBe(50);
});

test('Is there hell in Mitchell', () => {
    const name = 'Mitchell';
    expect(name).toMatch(/hell/);
})

const groceryList = [
    'Carrots',
    'Lettuce',
    'Mushrooms',
    'Beyond Meat',
    'Ice Cream',
    'Oreos'
]

test('Does our grocery list contain oreos', () => {
    expect(groceryList).toContain('Oreos');
});

test('Test', () => {
    expect('thing').toMatch(/thin/);
})

test('Multply 2 numbers (5 and 3 = 15)', () => {
    expect(myMathFunctions.multiply(5, 3)).toBe(15)
})

test('divide 2 numbers (10 / 4 = 2.5)', () => {
    expect(myMathFunctions.divide(10, 4)).toBe(2.5)
})