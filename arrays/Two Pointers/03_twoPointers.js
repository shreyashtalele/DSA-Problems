function squareSortedArray(array) {
    let left = 0
    let right = array.length - 1
    let index = array.length - 1
    let result = new Array(array.length)

    while (left <= right) {
        if (Math.abs(array[left]) > Math.abs(array[right])) {
            result[index] = array[left] * array[left]
            left++
        } else {
            result[index] = array[right] * array[right]
            right--
        }
        index--
    }
    return result
}
console.log(squareSortedArray([-4, -1, 0, 3, 10]));


function mergeSortedArrays(left, right) {
    let left_ptr = 0
    let right_ptr = 0
    let result = []
    while (left_ptr < left.length && right_ptr < right.length) {
        if (left[left_ptr] < right[right_ptr]) {
            result.push(left[left_ptr])
            left_ptr++
        }
        else {
            result.push(right[right_ptr])
            right_ptr++
        }
    }

    while (left_ptr < left.length) {
        result.push(left[left_ptr])
        left_ptr++
    }
    while (right_ptr < right.length) {
        result.push(right[right_ptr])
        right_ptr++
    }

    return result
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
