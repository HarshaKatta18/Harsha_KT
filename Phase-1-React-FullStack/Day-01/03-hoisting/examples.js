/*
=========================================
HOISTING EXAMPLES
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - var Hoisting
// =========================================

console.log(myVar);

var myVar = "Harsha";

// Output:
// undefined



// =========================================
// Example 2 - Assignment Happens Later
// =========================================

var city;

console.log(city);

city = "Mumbai";

console.log(city);

// Output:
// undefined
// Mumbai



// =========================================
// Example 3 - Function Declaration Hoisting
// =========================================

sayHello();

function sayHello() {
    console.log("Hello from Function Declaration");
}

// Output:
// Hello from Function Declaration



// =========================================
// Example 4 - Function Expression
// =========================================

/*
greet();

var greet = function () {
    console.log("Hello");
};

Output:
TypeError
*/



// =========================================
// Example 5 - Arrow Function
// =========================================

/*
greet();

const greet = () => {
    console.log("Hello");
};

Output:
ReferenceError
*/



// =========================================
// Example 6 - Variable Shadowing
// =========================================

var x = 10;

function test() {

    console.log(x);

    var x = 20;
}

test();

// Output:
// undefined



// =========================================
// Example 7 - TDZ Example
// =========================================

/*
console.log(age);

let age = 25;

Output:
ReferenceError
*/



// =========================================
// Example 8 - TDZ Inside Function
// =========================================

/*
let count = 10;

function demo() {

    console.log(count);

    let count = 20;
}

demo();

Output:
ReferenceError
*/



// =========================================
// Example 9 - Advanced Hoisting Question
// =========================================

var message = "Global";

function show() {

    console.log(message);

    var message = "Local";

    console.log(message);
}

show();

// Output:
// undefined
// Local



/*
=========================================

MENTAL MODEL

Memory Phase:

var -> undefined

function declarations -> complete function

let/const -> uninitialized (TDZ)

Execution Phase:

Code runs line by line

=========================================
*/