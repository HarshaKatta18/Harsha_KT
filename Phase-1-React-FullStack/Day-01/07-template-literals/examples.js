/*
=========================================
TEMPLATE LITERALS
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/

// =========================================
// Example 1 - Basic Template Literal
// =========================================

const name = "Harsha";

console.log(`Hello ${name}`);

// Output:
// Hello Harsha


// =========================================
// Example 2 - Multiple Variables
// =========================================

const role = "Developer";

console.log(`${name} is a ${role}`);

// Output:
// Harsha is a Developer


// =========================================
// Example 3 - Expressions
// =========================================

const a = 10;
const b = 20;

console.log(`${a} + ${b} = ${a + b}`);

// Output:
// 10 + 20 = 30


// =========================================
// Example 4 - Function Call
// =========================================

function greet(userName) {
    return `Hello ${userName}`;
}

console.log(`${greet("Harsha")}`);

// Output:
// Hello Harsha


// =========================================
// Example 5 - Dynamic Message
// =========================================

const technology = "React";

console.log(`${name} is learning ${technology}`);

// Output:
// Harsha is learning React


// =========================================
// Example 6 - Multi-Line String
// =========================================

const courseDetails = `
Course: React
Duration: 8 Weeks
Level: Beginner
`;

console.log(courseDetails);


// =========================================
// Example 7 - Building URLs
// =========================================

const userId = 101;

const apiUrl =
    `https://api.example.com/users/${userId}`;

console.log(apiUrl);

// Output:
// https://api.example.com/users/101


// =========================================
// Example 8 - Comparison with Concatenation
// =========================================

const city = "Mumbai";

console.log("Welcome to " + city);

console.log(`Welcome to ${city}`);

// Output:
// Welcome to Mumbai
// Welcome to Mumbai


// =========================================
// Example 9 - Nested Expressions
// =========================================

const marks = 85;

console.log(
    `Result: ${marks >= 40 ? "Pass" : "Fail"}`
);

// Output:
// Result: Pass