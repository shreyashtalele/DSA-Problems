//Print all elements of an array.
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, -1, -3];
// array.map((element) => (console.log(element)
// ))

//sum of all elements in array 
const result = array.reduce((sum, element) => {
    return sum + element
}, 0)
// console.log(result);

//Find the maximum element.
let max_element = -Infinity
for (const element of array) {
    if (element > max_element) {
        max_element = element
    }
}
// console.log(max_element);


//Find Minimum element 
let min_element = array[0]
for (const element of array) {
    if (element < min_element) {
        min_element = element
    }
}
// console.log(min_element);

//count even numbers 
function count_even(array) {
    let count = 0
    for (element of array) {
        if (element % 2 === 0) {
            count++
        }
    }
    return count
}
// console.log(count_even([1, 2, 3, 4, 5, 6]));


//count odd number in array 
function count_odd(array) {
    let count = 0
    for (element of array) {
        if (element % 2 !== 0) {
            count++
        }
    }
    return count
}

// console.log(count_odd([1, 2, 3, 4, 5, 6]));

// Count positive and negative numbers.
function positivenegative(array) {
    let positive = 0
    let negative = 0

    for (element of array) {
        if (element > 0) {
            positive++
        } else {
            negative++
        }
    }

    return { positive, negative }
}

const count = positivenegative(array)
console.log(count);

//Calculate the average of all elements.

function arrayAverage(array) {
    let avg = 0
    let sum = 0
    for (element of array) {
        sum = sum + element
    }

    return sum / array.length
}

console.log(arrayAverage(array));


//Find the index of the largest element.

function indexofLargest(array) {
    let max = 0
    let max_index = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index]
            max_index = index
        }
    }
    return max_index
}
// console.log(indexofLargest(array));


// Find the index of the smallest element.

function indexofSmallest(array) {
    let min = array[0]
    let min_index = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index]
            min_index = index
        }
    }
    return min_index
}

console.log(indexofSmallest(array));


//Check Sorted