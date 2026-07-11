//Search for a character.

function searchCharacter(string, target) {
    for (let index in string) {
        if (target === string[index]) {
            return index
        }
    }
    return -1
}
console.log(searchCharacter("JavaScript", "J"));


function searchWord(string, target) {
    let word = ''

    for (let index = 0; index < string.length; index++) {
        if (string[index] === ' ') {
            if (word === target) {
                return 'found'
            }
            word = ''
        }
        else {
            word += string[index]
        }
    }
    if (word === target) {
        return 'found'
    }
    return 'not found'
}

console.log(searchWord("I love JavaScript", "love"));


//Count occurrences of a character.
function countOccurrences(string, target) {
    let count = 0
    for (let char of string) {
        if (char === target) {
            count++
        }
    }
    return count
}

console.log(countOccurrences(" Shreyash Talele", "a"));


//Count occurrences of a substring.
function countOccurrencesofSubstring(string, target) {
    let count = 0

    //each index starting  is new string
    for (let i = 0; i <= string.length - target.length; i++) {
        let substring = ''
        //to get next characters
        for (let j = i; j < i + target.length; j++) {
            substring += string[j]
        }
        if (substring === target) {
            count++
        }
        substring = ''
    }
    return count
}

console.log(countOccurrencesofSubstring("banana", "ana"));


function indicesofCharacter(string, target) {

    let indices = []
    for (let index = 0; index < string.length; index++) {
        if (string[index] === target) {
            indices.push(index)
        }
    }
    return indices
}

console.log(indicesofCharacter("Javascript", "a"));
