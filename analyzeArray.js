function analyzeArray(array) {
    const object = {
        average: array.reduce(sum) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
    return object;
}

function sum(total, num) {
    return total + num
}

module.exports = analyzeArray;