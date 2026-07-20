
/* 
Selection Sort Algorithm
1. Start from the first element.

2. Assume the current element is the smallest.

3. Traverse the remaining unsorted elements.

4. If a smaller element is found,
   update minIndex.

5. After scanning the entire unsorted part,
   swap the current element with the smallest element.

6. Repeat until the array is sorted.
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
}


function selectionSortDecending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let maxIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j
            }
        }
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]]
    }
    return array
}
console.log(selectionSortDecending([2, 3, 4, 5, 8]));

function selectionSwapSort(array) {
    let count = 0
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
            count++
        }

    }
    return count
}

console.log(selectionSwapSort([8, 5, 4, 3, 2]));
