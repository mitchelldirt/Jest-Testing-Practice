function sum(x, y, z, m) {
    return x + y + z + m;
}

function subtract(x, y) {
    return x - y;
}

function ponds(pond1, pond2) {
    const finalCount = {
        frogs: pond1.frogs + pond2.frogs,
        toads: pond1.toads + pond2.toads
    }
    return finalCount;
}


module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.ponds = ponds;