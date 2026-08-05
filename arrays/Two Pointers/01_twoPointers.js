function reverseArray(array) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]]
        left++;
        right--;
    }
    return array
}

console.log(reverseArray([10, 20, 30, 40, 50]));


function isPalindrome(string) {
    let left = 0
    let right = string.length - 1
    while (left < right) {
        if (string[left] !== string[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

console.log(isPalindrome("madam"));


function twoSum(array, target) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === target) {
            return [array[left], array[right]]
        }
        else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return -1
}

console.log(twoSum());
