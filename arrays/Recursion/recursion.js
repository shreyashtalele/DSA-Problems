function factorial(n) {
    if (n == 0) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5));


function power(a, b) {
    if (b == 0) {
        return 1
    }
    return a * power(a, b - 1)
}

console.log(power(2, 4));


function sumDigits(n) {
    if (n == 0) {
        return 0
    }

    return n % 10 + sumDigits(Math.floor(n / 10))
}


function countDigits(n) {
    if (n == 0) {
        return 0
    }
    return 1 + countDigits(Math.floor(n / 10))
}

function reverseNumber(n) {
    if (n < 10) {
        return n
    }
    let lastDigit = n % 10
    let reverse = reverseNumber(Math.floor(n / 10))
    let mutiplier = 10 ** countDigits(Math.floor(n / 10))

    return lastDigit * mutiplier + reverse

}



function reverseNumber(n) {

    // Base Case:
    // A single-digit number is already reversed.
    if (n < 10) {
        return n;
    }

    // Step 1:
    // Extract the last digit from the current number.
    let lastDigit = n % 10;

    // Step 2:
    // Remove the last digit to create a smaller problem.
    let remaining = Math.floor(n / 10);

    // Step 3:
    // Recursively reverse the remaining part of the number.
    let reverse = reverseNumber(remaining);

    // Step 4:
    // Count how many digits are present in the remaining number.
    // This tells us how many places the last digit needs to shift left.
    let digitCount = countDigits(remaining);

    // Step 5:
    // Calculate the multiplier required to move the last digit
    // to the front of the reversed number.
    let multiplier = 10 ** digitCount;

    // Step 6:
    // Place the last digit in front and combine it
    // with the reversed remaining number.
    return lastDigit * multiplier + reverse;
}

function reverseNumber(n, ans = 0) {
    // Base Case
    if (n === 0) {
        return ans;
    }

    // Extract last digit
    let lastDigit = n % 10;

    // Build the reversed number
    ans = ans * 10 + lastDigit;

    // Remove last digit
    let remaining = Math.floor(n / 10);

    // Solve the smaller problem
    return reverseNumber(remaining, ans);
}


function productOfDigits(n) {
    if (n === 0) {
        return 1
    }
    let lastDigit = n % 10
    let remaining = Math.floor(n / 10)
    return lastDigit * productOfDigits(remaining)
}


function numberPalindrome(n) {

    return n === reverseNumber(n)

    function countDigit(n) {
        if (n === 0) {
            return 0
        }
        return 1 + countDigit(Math.floor(n / 10))
    }

    function reverseNumber(n) {

        if (n < 10) {
            return n
        }
        let lastDigit = n % 10

        let remaining = Math.floor(n / 10)

        let reverse = reverseNumber(remaining)
        let digitCount = countDigit(remaining)
        let multiplier = 10 ** digitCount


        return lastDigit * multiplier + reverse
    }
}