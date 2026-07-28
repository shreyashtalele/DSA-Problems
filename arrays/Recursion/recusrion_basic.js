// function printNumber(n) {
//     if (n > 5) {
//         return
//     }
//     console.log(n);
//     printNumber(n + 1)
// }
// printNumber(1)


// function printNumber(n) {
//     if (n <= 0) {
//         return
//     }
//     console.log(n);
//     printNumber(n - 1)
// }
// printNumber(5)

function calculateSum(n) {
    if (n == 0) {
        return 0
    }
    let sum = n + calculateSum(n - 1)
    return sum
}
console.log(calculateSum(5));
