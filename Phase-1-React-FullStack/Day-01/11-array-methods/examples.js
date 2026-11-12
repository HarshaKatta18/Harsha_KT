/*
=========================================
ARRAY METHODS
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - map()
// =========================================

const numbers = [1, 2, 3];

const doubled =
    numbers.map(num => num * 2);

console.log(doubled);

// Output:
// [2,4,6]



// =========================================
// Example 2 - filter()
// =========================================

const values = [1,2,3,4,5,6];

const evenNumbers =
    values.filter(
        num => num % 2 === 0
    );

console.log(evenNumbers);

// Output:
// [2,4,6]



// =========================================
// Example 3 - reduce()
// =========================================

const marks = [10,20,30,40];

const total =
    marks.reduce(
        (sum, current) =>
            sum + current,
        0
    );

console.log(total);

// Output:
// 100



// =========================================
// Example 4 - find()
// =========================================

const users = [
    { id: 1, name: "Harsha" },
    { id: 2, name: "Anand" },
    { id: 3, name: "Ayesha" }
];

const user =
    users.find(
        user => user.id === 2
    );

console.log(user);

// Output:
// { id: 2, name: 'Anand' }



// =========================================
// Example 5 - some()
// =========================================

const nums = [1,2,3,4];

const hasLargeNumber =
    nums.some(
        num => num > 3
    );

console.log(hasLargeNumber);

// Output:
// true



// =========================================
// Example 6 - every()
// =========================================

const evenNums = [2,4,6,8];

const allEven =
    evenNums.every(
        num => num % 2 === 0
    );

console.log(allEven);

// Output:
// true



// =========================================
// Example 7 - forEach()
// =========================================

const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.forEach(
    fruit => console.log(fruit)
);

// Output:
// Apple
// Banana
// Mango



// =========================================
// Example 8 - Method Chaining
// =========================================

const result =
    [1,2,3,4,5,6]
        .filter(
            num => num % 2 === 0
        )
        .map(
            num => num * 10
        );

console.log(result);

// Output:
// [20,40,60]



// =========================================
// Example 9 - Total Salary Calculation
// =========================================

const salaries =
    [10000,20000,30000];

const totalSalary =
    salaries.reduce(
        (sum, salary) =>
            sum + salary,
        0
    );

console.log(totalSalary);

// Output:
// 60000



// =========================================
// Example 10 - React Style Example
// =========================================

const developers = [
    "Harsha",
    "Anand",
    "Ayesha"
];

const developerCards =
    developers.map(
        developer =>
            `Developer: ${developer}`
    );

console.log(developerCards);

// Output:
// [
//   'Developer: Harsha',
//   'Developer: Anand',
//   'Developer: Ayesha'
// ]



/*
=========================================

KEY TAKEAWAYS

1. map() creates a new transformed array.
2. filter() returns matching elements.
3. reduce() converts an array into one value.
4. find() returns the first matching element.
5. some() checks if at least one element matches.
6. every() checks if all elements match.
7. forEach() loops through elements.
8. React heavily uses map() for rendering.

Most Important for React:

1. map()
2. filter()
3. reduce()

=========================================
*/