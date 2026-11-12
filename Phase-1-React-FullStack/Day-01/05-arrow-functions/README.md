# Arrow Functions

## Introduction

Arrow functions were introduced in ES6 as a shorter and cleaner way to write function expressions.

Before ES6:

```javascript
const greet = function () {
    console.log("Hello");
};
```

ES6 Arrow Function:

```javascript
const greet = () => {
    console.log("Hello");
};
```

Both perform the same task, but arrow functions require less code.

---

# Why Arrow Functions Were Introduced

Traditional function expressions can become verbose.

Example:

```javascript
const add = function (a, b) {
    return a + b;
};
```

Arrow function:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Cleaner and easier to read.

---

# Basic Syntax

```javascript
const functionName = () => {
    // code
};
```

Example:

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# Arrow Function with Parameters

## Single Parameter

```javascript
const square = num => {
    return num * num;
};
```

Parentheses are optional for one parameter.

Equivalent:

```javascript
const square = (num) => {
    return num * num;
};
```

---

## Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};
```

Multiple parameters require parentheses.

---

## No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# Implicit Return

One of the biggest advantages.

Traditional:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short Form:

```javascript
const add = (a, b) => a + b;
```

Both return the same result.

---

# Returning Objects

Incorrect:

```javascript
const user = () => {
    name: "Harsha";
};
```

Output:

```javascript
undefined
```

JavaScript thinks the braces are function braces.

---

Correct:

```javascript
const user = () => ({
    name: "Harsha"
});
```

Output:

```javascript
{
    name: "Harsha"
}
```

---

# Arrow Functions and Array Methods

Arrow functions are frequently used with:

- map()
- filter()
- reduce()

Example:

```javascript
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);
```

Output:

```javascript
[2,4,6]
```

---

# Function Expression vs Arrow Function

Function Expression:

```javascript
const greet = function () {
    console.log("Hello");
};
```

Arrow Function:

```javascript
const greet = () => {
    console.log("Hello");
};
```

Arrow functions are essentially shorter function expressions.

---

# Hoisting Behaviour

Arrow functions are usually stored in variables.

Example:

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

Reason:

- const is hoisted.
- Variable enters Temporal Dead Zone.
- Initialization has not happened.

---

# The "this" Keyword

This is the most important advanced difference.

## Traditional Function

```javascript
const person = {
    name: "Harsha",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();
```

Output:

```javascript
Harsha
```

Here:

```javascript
this
```

refers to the object calling the function.

---

## Arrow Function

```javascript
const person = {
    name: "Harsha",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();
```

Output:

```javascript
undefined
```

Why?

Arrow functions do not create their own `this`.

Instead, they use `this` from the surrounding scope.

---

# When to Use Arrow Functions

Use arrow functions for:

- Callbacks
- Array methods
- React components
- Event handlers
- Small utility functions

Example:

```javascript
const multiply = (a, b) => a * b;
```

---

# React Connection

Arrow functions are used everywhere in React.

Event Handler:

```jsx
const handleClick = () => {
    console.log("Clicked");
};
```

Component:

```jsx
const Welcome = () => {
    return <h1>Hello</h1>;
};
```

Array Rendering:

```jsx
users.map(user => (
    <li>{user.name}</li>
))
```

Understanding arrow functions is essential for React development.

---

# Advantages

- Shorter syntax
- Cleaner code
- Easier to read
- Common in modern JavaScript
- Used extensively in React

---

# Summary

- Arrow functions were introduced in ES6.
- They provide a shorter syntax for function expressions.
- They support implicit returns.
- They work well with array methods.
- They do not create their own `this`.
- React applications heavily use arrow functions.