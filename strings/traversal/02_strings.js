//Reverse a string.
let string = 'Javascript'
function reverseString(string) {
    let reverseStr = ''
    for (let index = string.length - 1; index >= 0; index--) {
        reverseStr += string[index]
    }
    return reverseStr
}
// console.log(reverseString(string));

//Check if a string is a palindrome.

function checkStringPalindrome(string) {
    let palindrome = ''
    for (let index = string.length - 1; index >= 0; index--) {
        palindrome += string[index]
    }
    if (palindrome === string) {
        return true
    }
    return false
}
// console.log(checkStringPalindrome("dad"));

//Convert to uppercase.

function toUpperCase(string) {
    let Uppercase = ''
    for (let character of string) {
        if (character >= 'A' && character <= 'Z') {
            Uppercase += character
            //console.log(Uppercase);
        } else if (character >= 'a' && character <= 'z') {
            let charcode = (character.charCodeAt(0) - 32)
            Uppercase += String.fromCharCode(charcode)
            //console.log(Uppercase);
        }
        else {
            Uppercase += character
        }
    }
    return Uppercase
}
// console.log(toUpperCase("JavaScript"));

function toLowerCase(string) {
    let lowercase = ''
    for (let character of string) {
        if (character >= 'a' && character <= 'z') {
            lowercase += character
        }
        else if (character >= 'A' && character <= 'Z') {
            let charcode = (character.charCodeAt(0) + 32)
            lowercase += String.fromCharCode(charcode)
        }
        else {
            lowercase += character
        }
    }
    return lowercase
}
// console.log(toLowerCase("JAVASCRIPT"));


function toggleCase(string) {
    let result = ''
    for (let character of string) {
        let charcode = character.charCodeAt(0)
        if (charcode >= 65 && charcode <= 90) {
            result += String.fromCharCode(charcode + 32)
        }
        else if (charcode >= 97 && charcode <= 122) {
            result += String.fromCharCode(charcode - 32)
        } else {
            result += character
        }
    }
    return result
}
// console.log(toggleCase("JaVAscrIPT"));


//Remove all spaces.
function removeAllSpaces(string) {
    let result = ''
    for (let char of string) {
        let charcode = char.charCodeAt(0)
        if (charcode != 32) {
            result += String.fromCharCode(charcode)
        }
    }
    return result
}

function removeSpace(string) {
    let result = ''
    for (let char of string) {
        if (char !== ' ') {
            result += char
        }
    }
    return result
}

//console.log(removeAllSpaces("Welcome to Javascript "));

//Count words in a sentence.

function wordInSentence(string) {
    let count = 0
    for (let index = 0; index < string.length; index++) {
        if (string[index] !== ' ' && (index === 0 || string[index - 1] === ' ')) {
            count++
        }
    }
    return count
}

// console.log(wordInSentence("JavaScript ReactJs NodeJs"));

function findLongestWord(string) {
    let currentword = ''
    let longestword = ''

    for (let char of string) {
        if (char !== ' ') {
            currentword += char
        }
        else {
            if (currentword.length > longestword.length) {
                longestword = currentword
                currentword = ''
            }
        }
    }

    if (currentword.length > longestword.length) {
        return currentword
    }
    else {
        return longestword
    }
}

console.log(findLongestWord("I love JavaScript"));


//Find the shortest word.

function findShortestWord(string) {
    let currentWord = "";
    let shortestWord = "";

    for (let char of string) {
        if (char !== ' ') {
            currentWord += char;
        } else {
            if (shortestWord === "" || currentWord.length < shortestWord.length) {
                shortestWord = currentWord;
            }
            currentWord = "";
        }
    }

    // Check the last word
    if (currentWord !== "" &&
        (shortestWord === "" || currentWord.length < shortestWord.length)) {
        shortestWord = currentWord;
    }

    return shortestWord;
}

console.log(findShortestWord("I love JavaScript"));
