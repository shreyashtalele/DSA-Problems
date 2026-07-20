/*
Bubble Sort Algorithm

1. Traverse the array for (n - 1) passes.

2. In each pass, compare every pair of adjacent elements
   from the beginning of the unsorted portion
   (up to array.length - i - 1).

3. If the current element is greater than the next element,
   swap them.

4. After each pass, the largest element moves to its
   correct position at the end of the array.

5. Repeat the process until all passes are completed.

6. Return the sorted array.


Time Complexity
    Best: O(n)   (Optimized)
    Average: O(n²)
    Worst: O(n²)

Space Complexity
    O(1)
    
*/
function bubbleSort(array) {
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}
console.log(bubbleSort([5, 3, 8, 4, 2]));

/*
 
 */

function bubbleSortDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return array
}
console.log(bubbleSortDescending([5, 3, 8, 4, 2]));


function bubbleSortSwapCount(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                count++;
            }
        }
    }
    return count
}
console.log(bubbleSortSwapCount([5, 3, 8, 4, 2]));
