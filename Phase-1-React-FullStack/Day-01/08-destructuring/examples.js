/*
=========================================
DESTRUCTURING
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Object Destructuring
// =========================================

const user = {
    name: "Harsha",
    role: "Developer"
};

const { name, role } = user;

console.log(name);
console.log(role);

// Output:
// Harsha
// Developer



// =========================================
// Example 2 - Without Destructuring
// =========================================

const employee = {
    id: 101,
    department: "Engineering"
};

console.log(employee.id);
console.log(employee.department);

// Output:
// 101
// Engineering



// =========================================
// Example 3 - Renaming Variables
// =========================================

const person = {
    firstName: "Harsha",
    designation: "Software Engineer"
};

const {
    firstName: userName,
    designation: userRole
} = person;

console.log(userName);
console.log(userRole);

// Output:
// Harsha
// Software Engineer



// =========================================
// Example 4 - Default Values
// =========================================

const student = {
    name: "Harsha"
};

const {
    name: studentName,
    course = "React"
} = student;

console.log(studentName);
console.log(course);

// Output:
// Harsha
// React



// =========================================
// Example 5 - Array Destructuring
// =========================================

const colors = [
    "Red",
    "Blue",
    "Green"
];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Output:
// Red
// Blue
// Green



// =========================================
// Example 6 - Skipping Values
// =========================================

const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

const [fruit1, , fruit3] = fruits;

console.log(fruit1);
console.log(fruit3);

// Output:
// Apple
// Mango



// =========================================
// Example 7 - Swapping Variables
// =========================================

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Output:
// 20
// 10



// =========================================
// Example 8 - Nested Object Destructuring
// =========================================

const userProfile = {
    name: "Harsha",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

const {
    address: { city }
} = userProfile;

console.log(city);

// Output:
// Mumbai



// =========================================
// Example 9 - Function Parameter Destructuring
// =========================================

function displayUser({ name, role }) {

    console.log(`${name} - ${role}`);

}

displayUser({
    name: "Harsha",
    role: "Developer"
});

// Output:
// Harsha - Developer



// =========================================
// Example 10 - React Style Example
// =========================================

const response = [
    0,
    function updateCount() {}
];

const [count, setCount] = response;

console.log(count);
console.log(typeof setCount);

// Output:
// 0
// function



/*
=========================================

KEY TAKEAWAYS

1. Object destructuring uses property names.
2. Array destructuring uses positions.
3. Supports default values.
4. Variables can be renamed while destructuring.
5. Nested object destructuring is possible.
6. React props commonly use destructuring.
7. useState() uses array destructuring.

=========================================
*/