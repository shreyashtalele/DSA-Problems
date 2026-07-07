const string = "Javascript";

//Print Each Character of a String

for (character of string) {
    //console.log(character);
}


// Count the number of characters.
function countNumberofCharacters(string) {
    let count = 0
    for (let index in string) {
        count++
    }
    return count
}
console.log(countNumberofCharacters(string));


//Count vowels.

function countVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0

    for (let ch of string) {
        if (vowels.includes(ch.toLowerCase())) {
            vowelCount++
        }
    }

    for (let ch of string) {
        if (ch.toLowerCase() === 'a'
            || ch.toLowerCase() === 'i'
            || ch.toLowerCase() === 'e'
            || ch.toLowerCase() === 'o'
            || ch.toLowerCase() === 'u') {
            vowelCount++
        }
    }
    return vowelCount
}

console.log(countVowels(string));

//Count consonants.

function countConsonants(string) {
    let consonants = 0
    for (let ch of string) {

        let lower = ch.toLowerCase()
        if (lower >= 'a' && lower <= 'z') {
            if (lower !== 'a'
                && lower !== 'e'
                && lower !== 'i'
                && lower !== 'o'
                && lower !== 'u') {
                consonants++;
            }
        }
    }
    return consonants;
}

console.log(countConsonants(string));


// Count uppercase letters.

function countUpperCase(string) {
    let upperCount = 0
    for (let character of string) {
        if (character.toLowerCase() >= 'a' && character.toLowerCase() <= 'z') {
            if (character === character.toUpperCase()) {
                upperCount++
            }
        }

    }
    return upperCount
}
console.log(countUpperCase(string));


//Count lowercase letters.

function countLowerCase(string) {
    let lowerCount = 0
    for (let character of string) {
        let lower = character.toLowerCase()
        if (lower >= 'a' && lower <= 'z') {
            if (character === lower) {
                lowerCount++
            }
        }
    }
    return lowerCount
}

console.log(countLowerCase(string));

// //Count digits.
// function countDigits(string) {
//     let digitCount = 0
//     for (let character of string) {
//         character = Number(character)

//         if (character === 0
//             || character === 1
//             || character === 2
//             || character === 3
//             || character === 4
//             || character === 5
//             || character === 6
//             || character === 7
//             || character === 8
//             || character === 9
//         ) {
//             digitCount++
//         }
//     }
//     return digitCount
// }

function countDigits(string) {
    let digitCount = 0;

    for (let character of string) {
        if (character >= '0' && character <= '9') {
            digitCount++;
        }
    }

    return digitCount;
}
console.log(countDigits("1Javascript2"));
