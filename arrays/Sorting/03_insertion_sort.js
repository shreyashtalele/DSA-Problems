
/*
 * Insertion Sort Algorithm
START

1. Traverse the array from i = 1 to n - 1.
   (Assume the first element is already sorted.)

2. Store the current element as KEY.

3. Initialize j = i - 1.

4. Traverse from right to left while j >= 0.

       IF array[j] > KEY
            Shift the element to the right.
            array[j + 1] = array[j]

       ELSE
            BREAK

5. After all required shifts,
   place the KEY at array[j + 1].

6. Repeat until all elements are processed.

END
 */
function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (array[j] > key) {
                array[j + 1] = array[j]
            }
            else {
                break
            }

        }
        array[j + 1] = key
    }

    return array
}
console.log(insertionSort([5, 3, 8, 4, 2]));



function insertionSortAlgorithm(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        let key = array[i]
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array
}

console.log(insertionSortAlgorithm([5, 3, 4, 8, 2]));


function insertionSortDecending(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array
}
console.log(insertionSortDecending([2, 3, 4, 5, 6, 7, 8]));


function countInsertionSort(array) {
    let shift = 0
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            shift++
            j--
        }
        array[j + 1] = key
    }
    return shift
}

console.log(countInsertionSort([5, 4, 3]));


function inserstionSortStrings(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && (array[j].localeCompare(key)) > 0) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key

    }
    return array
}

console.log(inserstionSortStrings(["banana", "apple", "cat", "ball"]));