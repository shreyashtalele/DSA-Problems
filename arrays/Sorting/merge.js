function merge(left, right) {
    let result = []
    let left_ptr = 0
    let right_ptr = 0

    while (left_ptr < left.length && right_ptr < right.length) {
        if (left[left_ptr] > right[right_ptr]) {
            result.push(right[right_ptr])
            right_ptr++
        }
        else {
            result.push(left[left_ptr])
            left_ptr++
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

function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([9, 4, 7, 1, 3, 6]));