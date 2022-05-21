const myMathFunctions = require('./scripts')

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

test('Adding frog and toad count from 2 ponds', () => {
    const pond1 = {
        frogs: 5,
        toads: 4
    }
    
    const pond2 = {
        frogs: 3,
        toads: 6
    }
expect(myMathFunctions.ponds(pond1, pond2)).toEqual({frogs: 8, toads: 10})
})

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