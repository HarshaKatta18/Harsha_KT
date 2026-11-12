# Function Expressions

## Introduction

In JavaScript, functions can be created in multiple ways.

One common way is using a Function Expression.

A function expression is a function stored inside a variable.

Example:

```javascript
const greet = function () {
    console.log("Hello");
};
```

Here:

- greet → variable
- function() {...} → anonymous function
- Entire function is assigned to the variable

---

# Function Declaration vs Function Expression

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Function has a name:

```javascript
greet
```

and exists independently.

---

## Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};
```

The function is assigned to a variable.

The variable now holds a function value.

---

# Functions are First-Class Citizens

In JavaScript, functions are treated like any other value.

Just as variables can store:

```javascript
const age = 25;
const city = "Mumbai";
```

they can also store:

```javascript
const greet = function () {
    console.log("Hello");
};
```

This makes functions very flexible.

---

# Anonymous Function

A function without a name is called an anonymous function.

Example:

```javascript
function () {
    console.log("Hello");
}
```

This cannot exist by itself.

It is usually assigned to a variable:

```javascript
const greet = function () {
    console.log("Hello");
};
```

---

# Calling a Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

Output:

```javascript
Hello
```

---

# Function Expression with Parameters

```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```javascript
30
```

---

# Function Expressions are Values

A function can be assigned to another variable.

```javascript
const greet = function () {
    console.log("Hello");
};

const sayHello = greet;

sayHello();
```

Output:

```javascript
Hello
```

Both variables point to the same function.

---

# Hoisting and Function Expressions

This is the most important difference.

Example:

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Output:

```javascript
TypeError
```

Why?

Memory Phase:

```javascript
greet = undefined
```

Execution:

```javascript
greet();
```

becomes:

```javascript
undefined();
```

which causes:

```javascript
TypeError
```

---

# Function Declaration vs Expression (Hoisting)

## Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

Entire function is hoisted.

---

## Function Expression

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Output:

```javascript
TypeError
```

Only variable declaration is hoisted.

Function assignment is not.

---

# Function Expression using let

```javascript
greet();

let greet = function () {
    console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

Because greet is inside the Temporal Dead Zone (TDZ).

---

# Function Expression using const

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

For the same reason.

---

# Named Function Expression

Functions inside expressions can also have names.

```javascript
const greet = function sayHello() {
    console.log("Hello");
};
```

The function name is:

```javascript
sayHello
```

but it can only be accessed inside the function itself.

This is rarely used in modern React applications.

---

# Why Function Expressions Matter

Function expressions allow:

- Passing functions as arguments
- Returning functions from functions
- Dynamic behavior
- Event handling
- Callbacks

Example:

```javascript
setTimeout(function () {
    console.log("Hello");
}, 1000);
```

---

# React Connection

Before arrow functions became popular, React commonly used:

```javascript
const handleClick = function () {
    console.log("Clicked");
};
```

Nowadays developers mostly use:

```javascript
const handleClick = () => {
    console.log("Clicked");
};
```

Arrow functions are essentially a shorter and cleaner way to write function expressions.

---

# Summary

- Function expressions store functions inside variables.
- Functions are treated as values in JavaScript.
- Anonymous functions are commonly used in function expressions.
- Function expressions are not fully hoisted.
- Only the variable declaration is hoisted.
- Function expressions are the foundation of modern arrow functions.