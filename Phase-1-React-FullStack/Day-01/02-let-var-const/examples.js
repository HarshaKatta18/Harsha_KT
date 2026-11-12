/*
=========================================
let, var, const - Examples
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// 1. var Example
// =========================================

var name = "Harsha";

console.log("var name:", name);

// Output:
// var name: Harsha



// =========================================
// 2. var Reassignment
// =========================================

var city = "Mumbai";

city = "Pune";

console.log("Updated city:", city);

// Output:
// Updated city: Pune



// =========================================
// 3. var Redeclaration
// =========================================

var company = "Capgemini";
var company = "Microsoft";

console.log("Company:", company);

// Output:
// Company: Microsoft



// =========================================
// 4. let Example
// =========================================

let age = 25;

console.log("Age:", age);

// Output:
// Age: 25



// =========================================
// 5. let Reassignment
// =========================================

let score = 90;

score = 95;

console.log("Updated score:", score);

// Output:
// Updated score: 95



// =========================================
// 6. const Example
// =========================================

const country = "India";

console.log("Country:", country);

// Output:
// Country: India



// =========================================
// 7. Block Scope with let
// =========================================

if (true) {
    let blockVariable = "Inside Block";
    console.log(blockVariable);
}

// Uncomment below to see error
// console.log(blockVariable);

// Output:
// Inside Block



// =========================================
// 8. Block Scope with const
// =========================================

if (true) {
    const language = "JavaScript";
    console.log(language);
}

// Uncomment below to see error
// console.log(language);

// Output:
// JavaScript



// =========================================
// 9. var is Not Block Scoped
// =========================================

if (true) {
    var testVar = "Accessible Outside";
}

console.log(testVar);

// Output:
// Accessible Outside



// =========================================
// 10. const with Array
// =========================================

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

// Output:
// [1,2,3,4]



// =========================================
// 11. const with Object
// =========================================

const user = {
    name: "Harsha"
};

user.name = "Anand";

console.log(user);

// Output:
// { name: 'Anand' }



// =========================================
// 12. Hoisting with var
// =========================================

// Uncomment and run separately

/*
console.log(myVar);

var myVar = 100;

Output:
undefined
*/



// =========================================
// 13. Hoisting with let
// =========================================

// Uncomment and run separately

/*
console.log(myLet);

let myLet = 100;

Output:
ReferenceError
*/



// =========================================
// 14. Hoisting with const
// =========================================

// Uncomment and run separately

/*
console.log(myConst);

const myConst = 100;

Output:
ReferenceError
*/



/*
=========================================
KEY TAKEAWAYS
=========================================

1. Use const by default.
2. Use let when a value must change.
3. Avoid var in modern JavaScript.
4. let and const are block scoped.
5. var is function scoped.
6. const prevents reassignment of references.
7. Arrays and objects can still be modified.
8. var is hoisted with undefined.
9. let and const are affected by the TDZ.

=========================================
*/