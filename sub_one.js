
let targetNumber = 17;
let numbersArray = [
    10,
    15,
    3,
    7
]

// exo1.js

const calculateSeventeen = (targetNumber, numbersArray) => {
    var found = false;
    for (var arrayPosition = 0; arrayPosition < numbersArray.length; arrayPosition++) {
        for (var addedNumber = 0; addedNumber < numbersArray.length; addedNumber++) {
            if (arrayPosition!= addedNumber) {
                if (numbersArray[arrayPosition] + numbersArray[addedNumber] == targetNumber) {
                    found = true;
                }
            }
        }
    }
    return found;
}

console.log(calculateSeventeen(targetNumber, numbersArray));

// exo3.js

const calculateSeventeenOneLine = (targetNumber, numbersArray) => {
    var found = false;
    for (var arrayPosition = 0; arrayPosition < numbersArray.length; arrayPosition++) {
        var isItYou = targetNumber - numbersArray[arrayPosition]
        if (numbersArray.includes(isItYou)) {
            found = true;
        }
    }
    return found;
}

console.log(calculateSeventeenOneLine(targetNumber, numbersArray));