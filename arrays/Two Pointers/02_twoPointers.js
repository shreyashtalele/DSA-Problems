function removeDuplicate(array) {
    if (array.length === 0) return 0
    let read = 1;
    let write = 0;

    while (read < array.length) {
        if (array[read] !== array[write]) {
            write++
            array[write] = array[read]
        }
        read++
    }
    array.length = write + 1
    return array
}

console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5]));



function moveZeros(array) {
    let read = 0;
    let write = 0;

    while (read < array.length) {
        if (array[read] !== 0) {
            array[write] = array[read]
            write++
        }
        read++
    }

    while (write < array.length) {
        array[write] = 0
        write++
    }

    return array
}

console.log(moveZeros([0, 10, 0, 20, 30, 0, 40]));


function removeAllOccurence(array, target) {
    let read = 0
    let write = 0
    while (read < array.length) {
        if (array[read] !== target) {
            array[write] = array[read]
            write++
        }
        read++
    }
    array.length = write
    return array
}

console.log(removeAllOccurence([3, 3, 2, 3, 4, 5, 6], 3));


function removeEvenNumbers(array) {
    let read = 0
    let write = 0

    while (read < array.length) {
        if (array[read] % 2 !== 0) {
            array[write] = array[read]
            write++
        }
        read++
    }

    array.length = write
    return array

}
console.log(removeEvenNumbers([2, 4, 6, 7, 8, 10]));


function removeNegativeNumbers(array) {
    let read = 0;
    let write = 0;

    while (read < array.length) {
        if (array[read] >= 0) {
            array[write] = array[read]
            write++
        }
        read++
    }

    array.length = write
    return array
}

console.log(removeNegativeNumbers([-2, 4, -1, 8, -5]));


function onlyEvenNumbers(array) {
    let read = 0;
    let write = 0;

    while (read < array.length) {
        if (array[read] % 2 === 0) {
            array[write] = array[read]
            write++
        }
        read++
    }
    array.length = write
    return array
}

console.log(onlyEvenNumbers([1, 2, 3, 4, 5, 6]));
