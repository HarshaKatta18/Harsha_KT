// ========================================
// 1. Variables (let & const)
// ========================================

// Use let when the value may change later.
let age = 25;
age = 26;

console.log("Updated Age:", age);

// Use const when the reference should not change.
const company = "Capgemini";

console.log("Company:", company);


// ========================================
// 2. Arrow Functions
// ========================================

// Traditional Function
function greetTraditional(name) {
    return "Hello " + name;
}

// Arrow Function (shorter ES6 syntax)
const greet = (name) => `Hello ${name}`;

console.log(greet("Harsha"));


// ========================================
// 3. Template Literals
// ========================================

// Backticks (`) allow us to insert variables
// using ${}

const course = "React";

console.log(`Harsha is learning ${course}`);


// ========================================
// 4. Object Destructuring
// ========================================

// Extract object properties into variables

const user = {
    name: "Harsha",
    role: "Developer"
};

const { name, role } = user;

console.log("Name:", name);
console.log("Role:", role);


// ========================================
// 5. Spread Operator (...)
// ========================================

// Used to copy or merge arrays/objects

const arr1 = [1, 2];

// Creates a new array
const arr2 = [...arr1, 3];

console.log("Original Array:", arr1);
console.log("New Array:", arr2);


// ========================================
// 6. Rest Operator (...)
// ========================================

// Used to collect multiple arguments
// into a single array

function sum(...numbers) {
    return numbers.reduce((total, current) =>
        total + current, 0
    );
}

console.log("Sum:", sum(1, 2, 3));


// ========================================
// 7. Array Methods - map()
// ========================================

// map() creates a new array by performing
// an operation on every element

const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

console.log("Original Numbers:", nums);
console.log("Doubled Numbers:", doubled);


/*
========================================
OUTPUT SUMMARY
========================================

Updated Age: 26

Company: Capgemini

Hello Harsha

Harsha is learning React

Name: Harsha
Role: Developer

Original Array: [1,2]
New Array: [1,2,3]

Sum: 6

Original Numbers: [1,2,3]
Doubled Numbers: [2,4,6]

========================================
KEY TAKEAWAYS
========================================

1. let -> can be reassigned.
2. const -> cannot be reassigned.
3. Arrow functions provide shorter syntax.
4. Template literals use backticks (`).
5. Destructuring extracts values from objects/arrays.
6. Spread operator expands values.
7. Rest operator collects values.
8. map() creates a transformed array.

*/