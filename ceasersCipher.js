//Create Ceasers Cipher
function cipherize(string, shiftAmount) {
    let numberedArray = createCharCodeArray(string.toLowerCase().split(""));
    let shiftedArray = shift(numberedArray, shiftAmount);
    return returnToLetter(shiftedArray).join("");
}


function createCharCodeArray(stringArray) {
    stringArray.forEach((element, index) => {
        if (isLetter(element) === true) {
            stringArray[index] = element.charCodeAt(0);
        }
    });
    return stringArray;
}

function shift(numberArray, shiftAmount) {
    numberArray.forEach((element, index) => {
        // typeof checks for dummy spaces
        if (isNaN(element) === false && (typeof element != 'string')) {
            // shift down to 0-25 for letters (minus shift amount) and then shift back up after it's changed.
            numberArray[index] = (element - (97 - shiftAmount)) + 97
            // if number goes past z then wrap around the alphabet forwards from a
            if (numberArray[index] > 122) {
                numberArray[index] -= 26;
            } 
            // if number goes below a then wrap around the alphabet backwards from z
            else if (numberArray[index] < 97) {
                numberArray[index] += 26;
            }
        }
    });
    return numberArray;
}

function returnToLetter(numberArray) {
    numberArray.forEach((element, index) => {
        // typeof checks for dummy spaces
        if (isNaN(element) === false && (typeof element != 'string')) {
            numberArray[index] = String.fromCodePoint(element);
        }
    });
    return numberArray;
}

function isLetter(item) {
    if (item.toUpperCase() != item.toLowerCase()) {
        return true
    }
    return false;
}

console.log(cipherize("azPoNg!%n. dawd a", 5));

module.exports = cipherize;