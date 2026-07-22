function partition(array, low, high) {
    let pivot = array[high]
    let i = low

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
        }
    }
    [array[i], array[high]] = [array[high], array[i]]
    return i
}

function quickSort(array, low, high) {
    if (low >= high) {
        return array
    }
    let pivotIndex = partition(array, low, high)

    quickSort(array, low, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, high)
    return array
}

console.log(quickSort([9, 4, 7, 1, 3, 6], 0, 5))
