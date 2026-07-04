// ============================================================
// Array Problems - Basic Level
// ============================================================

const array = [12, 35, 1, 10, 34, 1];

// ============================================================
// 1. Find the Second Largest Element
// ============================================================

/*
Step 1: Find the largest element in the array.

Step 2: Initialize
        secondLargest = -Infinity

Step 3: Traverse the array.

Step 4: If the current element is
        greater than secondLargest
        AND smaller than largest,
        update secondLargest.

Step 5: Return secondLargest.
*/

function secondLargest(array) {
    let max = Math.max(...array);
    let secondLargest = -Infinity;

    for (const element of array) {
        if (element > secondLargest && element < max) {
            secondLargest = element;
        }
    }

    return secondLargest;
}

console.log("Second Largest:", secondLargest(array));

// ============================================================
// 2. Find the Second Smallest Element
// ============================================================

/*
Step 1: Find the smallest element in the array.

Step 2: Initialize
        secondSmallest = Infinity

Step 3: Traverse the array.

Step 4: If the current element is
        greater than smallest
        AND smaller than secondSmallest,
        update secondSmallest.

Step 5: Return secondSmallest.
*/

function secondSmallest(array) {
    let min = Math.min(...array);
    let secondSmallest = Infinity;

    for (const element of array) {
        if (element > min && element < secondSmallest) {
            secondSmallest = element;
        }
    }

    return secondSmallest;
}

console.log("Second Smallest:", secondSmallest(array));

// ============================================================
// 3. Check Whether the Array is Sorted
// ============================================================

/*
Step 1: Traverse the array from the first element
        to the second last element.

Step 2: Compare the current element
        with the next element.

Step 3: If the current element is greater
        than the next element,
        return false.

Step 4: If the loop completes,
        return true.
*/

function checkArraySorted(array) {
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] > array[index + 1]) {
            return false;
        }
    }

    return true;
}

console.log("Sorted:", checkArraySorted([2, 4, 6, 8, 10]));
console.log("Sorted:", checkArraySorted([2, 5, 3, 7]));

// ============================================================
// 4. Count Occurrences of an Element
// ============================================================

/*
Step 1: Initialize count = 0.

Step 2: Traverse every element of the array.

Step 3: Compare the current element
        with the target element.

Step 4: If both are equal,
        increment count.

Step 5: Return count.
*/

function countElement(array, target) {
    let count = 0;

    for (const element of array) {
        if (element === target) {
            count++;
        }
    }

    return count;
}

console.log("Count:", countElement([5, 2, 3, 2, 4, 2, 6], 2));

// ============================================================
// 5. Find All Duplicate Elements (Brute Force)
// ============================================================

/*
Step 1: Create an empty array
        to store duplicate elements.

Step 2: Traverse the array
        using the first loop.

Step 3: Compare the current element
        with all remaining elements
        using the second loop.

Step 4: If both elements are equal,
        check whether the element
        already exists in duplicates.

Step 5: If it does not exist,
        add it to duplicates.

Step 6: Return duplicates.
*/

function findDuplicate(array) {
    let duplicates = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                if (duplicates.indexOf(array[i]) === -1) {
                    duplicates.push(array[i]);
                }
            }
        }
    }

    return duplicates;
}

console.log("Duplicates:", findDuplicate([2, 5, 3, 2, 4, 5, 6, 2]));

// ============================================================
// 6. Find First Occurrence
// ============================================================

/*
Step 1: Traverse the array from left to right.

Step 2: Compare each element
        with the target.

Step 3: If both are equal,
        return the current index.

Step 4: If the element is not found,
        return -1.
*/

function findFirstOccurrence(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }

    return -1;
}

console.log(
    "First Occurrence:",
    findFirstOccurrence([10, 20, 30, 20, 40, 20], 20)
);

// ============================================================
// 7. Find Last Occurrence
// ============================================================

/*
Step 1: Initialize
        lastIndex = -1.

Step 2: Traverse the array
        from left to right.

Step 3: Compare each element
        with the target.

Step 4: If both are equal,
        update lastIndex.

Step 5: Return lastIndex.
*/

function findLastOccurrence(array, target) {
    let lastIndex = -1;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            lastIndex = index;
        }
    }

    return lastIndex;
}

console.log(
    "Last Occurrence:",
    findLastOccurrence([10, 20, 30, 20, 40, 20], 20)
);

// ============================================================
// 8. Find Difference Between Maximum & Minimum
// ============================================================

/*
Step 1: If the array is empty,
        return -1.

Step 2: Initialize
        max = -Infinity
        min = Infinity

Step 3: Traverse every element
        of the array.

Step 4: If the current element
        is greater than max,
        update max.

Step 5: If the current element
        is smaller than min,
        update min.

Step 6: Return
        max - min.
*/

function findDifference(array) {
    if (array.length === 0) {
        return -1;
    }

    let max = -Infinity;
    let min = Infinity;

    for (const element of array) {
        if (element > max) {
            max = element;
        }

        if (element < min) {
            min = element;
        }
    }

    return max - min;
}

console.log("Difference:", findDifference([15, 8, 22, 4, 10]));