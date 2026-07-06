// ============================================================
// 1. Search an Element in an Array (Linear Search)
// ============================================================

/*
Step 1: Traverse the array from the first element.

Step 2: Compare the current element
        with the target element.

Step 3: If both are equal,
        return the current index.

Step 4: If the loop completes without
        finding the target,
        return -1.
*/

function searchElement(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }
    return -1;
}

console.log(searchElement([10, 2, 8, 6, 3, 9], 9));


// ============================================================
// 2. Count Occurrences of a Target Element
// ============================================================

/*
Step 1: Initialize count = 0.

Step 2: Traverse every element
        of the array.

Step 3: Compare the current element
        with the target.

Step 4: If both are equal,
        increment count.

Step 5: After completing the traversal,
        return count.
*/

function countOccurrence(array, target) {
    let count = 0;

    for (const element of array) {
        if (element === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrence([1, 2, 3, 1, 2, 3, 1, 2, 3], 3));


// ============================================================
// 3. Check Whether an Element Exists
// ============================================================

/*
Step 1: Traverse every element
        of the array.

Step 2: Compare the current element
        with the target.

Step 3: If both are equal,
        return true immediately.

Step 4: If the loop completes without
        finding the target,
        return false.
*/

function checkElement(array, target) {
    for (const element of array) {
        if (element === target) {
            return true;
        }
    }

    return false;
}

console.log(checkElement([10, 2, 8, 6, 3, 9], 3));


// ============================================================
// 4. Find All Indices of a Given Element
// ============================================================

/*
Step 1: Create an empty array
        to store the indices.

Step 2: Traverse the array
        from the first element.

Step 3: Compare the current element
        with the target.

Step 4: If both are equal,
        store the current index
        in the indices array.

Step 5: After completing the traversal,
        return the indices array.
*/

function findIndices(array, target) {
    let indices = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            indices.push(index);
        }
    }

    return indices;
}

console.log(findIndices([10, 20, 30, 40, 10, 20, 10], 10));