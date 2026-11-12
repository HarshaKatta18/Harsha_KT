/*
=========================================
REST OPERATOR (...)
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Collecting Arguments
// =========================================

function showNumbers(...numbers) {

    console.log(numbers);

}

showNumbers(1, 2, 3, 4);

// Output:
// [1,2,3,4]



// =========================================
// Example 2 - Sum Function
// =========================================

function sum(...numbers) {

    return numbers.reduce(
        (total, current) => total + current,
        0
    );

}

console.log(sum(10, 20, 30));

// Output:
// 60



// =========================================
// Example 3 - Variable Number of Arguments
// =========================================

function printNames(...names) {

    console.log(names);

}

printNames(
    "Harsha",
    "Anand",
    "Ayesha"
);

// Output:
// ["Harsha","Anand","Ayesha"]



// =========================================
// Example 4 - Fixed + Rest Parameters
// =========================================

function display(
    first,
    second,
    ...remaining
) {

    console.log(first);
    console.log(second);
    console.log(remaining);

}

display(10, 20, 30, 40, 50);

// Output:
// 10
// 20
// [30,40,50]



// =========================================
// Example 5 - Array Destructuring
// =========================================

const numbers = [1, 2, 3, 4, 5];

const [first, ...others] = numbers;

console.log(first);
console.log(others);

// Output:
// 1
// [2,3,4,5]



// =========================================
// Example 6 - Object Destructuring
// =========================================

const user = {
    name: "Harsha",
    role: "Developer",
    city: "Mumbai"
};

const {
    name,
    ...remainingDetails
} = user;

console.log(name);
console.log(remainingDetails);

// Output:
// Harsha
// {
//   role: 'Developer',
//   city: 'Mumbai'
// }



// =========================================
// Example 7 - Marks Calculation
// =========================================

function calculateTotal(...marks) {

    return marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

}

console.log(
    calculateTotal(
        75,
        80,
        90,
        85
    )
);

// Output:
// 330



// =========================================
// Example 8 - Average Calculation
// =========================================

function calculateAverage(...numbers) {

    const total =
        numbers.reduce(
            (sum, current) =>
                sum + current,
            0
        );

    return total / numbers.length;

}

console.log(
    calculateAverage(
        10,
        20,
        30
    )
);

// Output:
// 20



// =========================================
// Example 9 - Spread vs Rest
// =========================================

const arr = [1, 2, 3];

console.log(...arr);

// Output:
// 1 2 3

function collect(...values) {

    console.log(values);

}

collect(1, 2, 3);

// Output:
// [1,2,3]



/*
=========================================

KEY TAKEAWAYS

1. Rest collects values.
2. Creates a real array.
3. Used mainly in function parameters.
4. Must be the last parameter.
5. Works with array/object destructuring.
6. Opposite of Spread Operator.

Spread = Expand
Rest   = Collect

=========================================
*/