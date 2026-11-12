/*
=========================================
ARROW FUNCTIONS
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Traditional Function
// =========================================

function greetTraditional(name) {
    return "Hello " + name;
}

console.log(greetTraditional("Harsha"));

// Output:
// Hello Harsha



// =========================================
// Example 2 - Arrow Function
// =========================================

const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Harsha"));

// Output:
// Hello Harsha



// =========================================
// Example 3 - Single Parameter
// =========================================

const square = num => {
    return num * num;
};

console.log(square(5));

// Output:
// 25



// =========================================
// Example 4 - Multiple Parameters
// =========================================

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Output:
// 30



// =========================================
// Example 5 - No Parameters
// =========================================

const showMessage = () => {
    console.log("Welcome to ES6");
};

showMessage();

// Output:
// Welcome to ES6



// =========================================
// Example 6 - Implicit Return
// =========================================

const multiply = (a, b) => a * b;

console.log(multiply(5, 6));

// Output:
// 30



// =========================================
// Example 7 - Returning an Object
// =========================================

const getUser = () => ({
    name: "Harsha",
    role: "Developer"
});

console.log(getUser());

// Output:
// { name: 'Harsha', role: 'Developer' }



// =========================================
// Example 8 - Arrow Function with map()
// =========================================

const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

console.log(doubled);

// Output:
// [2,4,6]



// =========================================
// Example 9 - Arrow Function with filter()
// =========================================

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(
    num => num % 2 === 0
);

console.log(evenNumbers);

// Output:
// [2,4,6]



// =========================================
// Example 10 - Arrow Function with reduce()
// =========================================

const values = [10, 20, 30];

const total = values.reduce(
    (sum, current) => sum + current,
    0
);

console.log(total);

// Output:
// 60



// =========================================
// Example 11 - Hoisting Behaviour
// =========================================

/*
greetUser();

const greetUser = () => {
    console.log("Hello");
};

Output:
ReferenceError
*/



// =========================================
// Example 12 - this Keyword Difference
// =========================================

const person1 = {

    name: "Harsha",

    greet: function () {
        console.log(this.name);
    }
};

person1.greet();

// Output:
// Harsha



// =========================================
// Example 13 - Arrow Function and this
// =========================================

const person2 = {

    name: "Harsha",

    greet: () => {
        console.log(this.name);
    }
};

person2.greet();

// Output:
// undefined (in most environments)



/*
=========================================

KEY TAKEAWAYS

1. Arrow functions are shorter function expressions.
2. Used heavily in React.
3. Parentheses can be skipped for one parameter.
4. Implicit return removes the need for 'return'.
5. Great for map(), filter(), reduce().
6. Not fully hoisted.
7. Do NOT create their own 'this'.

=========================================
*/