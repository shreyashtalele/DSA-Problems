function maxWater(array) {
    let left = 0
    let right = array.length - 1
    let maxArea = 0
    let area = 0

    while (left < right) {
        let width = right - left
        let heigth = Math.min(array[left], array[right])
        area = width * heigth
        if (area > maxArea) {
            maxArea = area
        }

        if (array[left] < array[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

console.log(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function checkPalindrome(string, left, right) {
    while (left < right) {
        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return false
        }
    }

    return true
}


function palindromeRemoveOneChar(string) {
    let left = 0
    let right = string.length - 1

    while (left < right) {

        if (string[left] === string[right]) {
            left++
            right--
        } else {
            return checkPalindrome(string, left + 1, right) ||
                checkPalindrome(string, left, right - 1)
        }
    }

    return true
}

console.log(palindromeRemoveOneChar("aba"))
console.log(palindromeRemoveOneChar("abca"))
console.log(palindromeRemoveOneChar("abc"))