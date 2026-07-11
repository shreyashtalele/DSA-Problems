function countCharacterFrequency(string) {
    let frequency = {}
    for (const char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        }
        else {
            frequency[char] = frequency[char] + 1
        }
    }
    return frequency
}
// console.log(countCharacterFrequency("banana"));


function mostFrequentCharacter(string) {
    let frequency = {}
    let maxCharacter = ""
    let maxCount = 0
    for (let char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        }
        else {
            frequency[char] = frequency[char] + 1
        }
    }

    for (let key in frequency) {

        if (frequency[key] > maxCount) {
            maxCharacter = key
            maxCount = frequency[key]
        }
    }
    return maxCharacter
}
// console.log(mostFrequentCharacter("banananaaa"));


function leastFrquentCharacter(string) {
    let frequency = {}
    let minCharacter = ''
    let minCount = Infinity
    for (let char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        }
        else {
            frequency[char]++
        }
    }

    for (let key in frequency) {
        if (frequency[key] < minCount) {
            minCharacter = key
            minCount = frequency[key]
        }
    }

    return minCharacter
}

// console.log(leastFrquentCharacter("aabababababaa"));


//First non-repeating character.
function firstNonRepeatingCharacter(string) {
    let frequency = {}

    for (let char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        } else {
            frequency[char]++
        }
    }

    for (let char of string) {
        if (frequency[char] === 1) {
            return char
        }
    }
    return "Not Found"
}

console.log(firstNonRepeatingCharacter("Javascript"));


//First repeating character.

function firstRepeatingCharacter(string) {
    let frequency = {}

    for (let char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        }
        else {
            frequency[char]++
        }
    }

    for (let char of string) {
        if (frequency[char] > 1) {
            return char
        }
    }
    return "Not Found"
}

console.log(firstRepeatingCharacter("Javascript"));


//Check if two strings are anagrams.

function checkAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }

    let string1frquency = countCharacterFrequency(string1)
    let string2frquency = countCharacterFrequency(string2)

    for (let key in string1frquency) {
        if (string1frquency[key] !== string2frquency[key]) {
            return false
        }
    }
    return true
}

console.log(checkAnagram("silent", "listen"));


//Remove duplicate characters.
function removeDuplicate(string) {
    let unique = ''
    let frequency = {}

    for (let char of string) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
            unique += char
        }
    }
    return unique
}

console.log(removeDuplicate("Programming"));
