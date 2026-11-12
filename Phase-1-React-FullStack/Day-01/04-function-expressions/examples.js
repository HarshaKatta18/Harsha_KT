/*
=========================================
FUNCTION EXPRESSIONS
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Basic Function Expression
// =========================================

const greet = function () {
    console.log("Hello Harsha");
};

greet();

// Output:
// Hello Harsha



// =========================================
// Example 2 - Function Expression with Parameters
// =========================================

const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));

// Output:
// 30



// =========================================
// Example 3 - Function Stored in Variable
// =========================================

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 6));

// Output:
// 30



// =========================================
// Example 4 - Function Assigned to Another Variable
// =========================================

const sayHello = function () {
    console.log("Hello");
};

const anotherReference = sayHello;

anotherReference();

// Output:
// Hello



// =========================================
// Example 5 - Function as a Value
// =========================================

const operation = function () {
    console.log("Functions are values in JavaScript");
};

operation();

// Output:
// Functions are values in JavaScript



// =========================================
// Example 6 - Callback Function Expression
// =========================================

setTimeout(function () {
    console.log("Executed after 1 second");
}, 1000);

// Output:
// Executed after 1 second



// =========================================
// Example 7 - Function Declaration vs Expression
// =========================================

function declaredFunction() {
    return "Function Declaration";
}

const expressedFunction = function () {
    return "Function Expression";
};

console.log(declaredFunction());
console.log(expressedFunction());

// Output:
// Function Declaration
// Function Expression



// =========================================
// Example 8 - Hoisting Behaviour
// =========================================

/*
greetBeforeDeclaration();

var greetBeforeDeclaration = function () {
    console.log("Hello");
};

Output:
TypeError
*/



// =========================================
// Example 9 - TDZ Behaviour
// =========================================

/*
greet();

const greet = function () {
    console.log("Hello");
};

Output:
ReferenceError
*/



// =========================================
// Example 10 - Named Function Expression
// =========================================

const greetUser = function sayHello() {
    console.log("Hello User");
};

greetUser();

// Output:
// Hello User



/*
=========================================

KEY TAKEAWAYS

1. Function expressions store functions in variables.
2. Functions are first-class citizens.
3. Functions can be assigned, passed, and returned.
4. Function expressions are not fully hoisted.
5. var + function expression = TypeError before assignment.
6. let/const + function expression = ReferenceError before assignment.
7. Arrow functions are a modern form of function expression.

=========================================
*/