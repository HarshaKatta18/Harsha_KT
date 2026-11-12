/*
=========================================
SCOPE EXAMPLES
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Global Scope
// =========================================

let company = "Capgemini";

function showCompany() {
    console.log(company);
}

showCompany();

// Output:
// Capgemini



// =========================================
// Example 2 - Function Scope
// =========================================

function greet() {

    let message = "Hello";

    console.log(message);
}

greet();

// Output:
// Hello


// Uncomment to see the error

/*
console.log(message);

Output:
ReferenceError
*/



// =========================================
// Example 3 - Block Scope with let
// =========================================

if(true) {

    let city = "Mumbai";

    console.log(city);
}

// Output:
// Mumbai


// Uncomment to see the error

/*
console.log(city);

Output:
ReferenceError
*/



// =========================================
// Example 4 - Block Scope with const
// =========================================

if(true) {

    const language = "JavaScript";

    console.log(language);
}

// Output:
// JavaScript



// =========================================
// Example 5 - var is NOT Block Scoped
// =========================================

if(true) {

    var age = 25;

}

console.log(age);

// Output:
// 25



// =========================================
// Example 6 - Scope Chain
// =========================================

let organization = "Capgemini";

function outer() {

    function inner() {

        console.log(organization);

    }

    inner();
}

outer();

// Output:
// Capgemini



// =========================================
// Example 7 - Variable Shadowing
// =========================================

let name = "Harsha";

function show() {

    let name = "Anand";

    console.log(name);
}

show();

console.log(name);

// Output:
// Anand
// Harsha



// =========================================
// Example 8 - Nested Scope
// =========================================

function outer() {

    let outerVariable = "Outer Variable";

    function inner() {

        console.log(outerVariable);

    }

    inner();
}

outer();

// Output:
// Outer Variable



// =========================================
// Example 9 - Function Scope with var
// =========================================

function demo() {

    var x = 10;

    console.log(x);
}

demo();

// Output:
// 10


// Uncomment to see the error

/*
console.log(x);

Output:
ReferenceError
*/



// =========================================
// Example 10 - Common Interview Question
// =========================================

let count = 5;

function display() {

    console.log(count);

}

display();

// Output:
// 5



/*
=========================================

KEY TAKEAWAYS

1. Scope controls variable visibility.
2. Global variables are accessible everywhere.
3. Function-scoped variables stay inside functions.
4. let and const are block scoped.
5. var is function scoped.
6. JavaScript searches variables using the scope chain.
7. Inner variables can shadow outer variables.
8. Scope is the foundation of closures and React components.

=========================================
*/