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
