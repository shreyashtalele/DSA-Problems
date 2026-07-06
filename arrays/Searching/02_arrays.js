// ============================================================
// 1. Binary Search
// ============================================================

/*
Step 1: Initialize two pointers.
        low = 0
        high = last index of the array.

Step 2: Repeat while low <= high.

Step 3: Find the middle index.

Step 4: Compare the middle element
        with the target.

Step 5: If both are equal,
        return the middle index.

Step 6: If the target is greater than
        the middle element,
        search the right half
        by updating low = mid + 1.

Step 7: Otherwise,
        search the left half
        by updating high = mid - 1.

Step 8: If the target is not found,
        return -1.
*/

function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (target > array[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 60));


// ============================================================
// 2. Search Insert Position
// ============================================================

/*
Step 1: Initialize two pointers.
        low = 0
        high = last index of the array.

Step 2: Repeat while low <= high.

Step 3: Find the middle index.

Step 4: Compare the middle element
        with the target.

Step 5: If both are equal,
        return the middle index.

Step 6: If the target is greater than
        the middle element,
        search the right half
        by updating low = mid + 1.

Step 7: Otherwise,
        search the left half
        by updating high = mid - 1.

Step 8: If the target is not found,
        return low because low points
        to the correct insertion position.
*/

function insertPosition(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (target > array[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

console.log(insertPosition([10, 20, 30, 40, 50, 60, 70], 35));