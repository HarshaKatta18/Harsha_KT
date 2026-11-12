# ES6+ Overview

## What is ES6?

ES6 stands for ECMAScript 2015, the sixth major version of JavaScript.

ECMAScript is the official specification that JavaScript follows. ES6 introduced many modern features that make JavaScript more readable, maintainable, and developer-friendly.

Before ES6, developers primarily used ES5 syntax. Most modern applications, including React, Angular, Vue, Node.js, and modern browsers, heavily use ES6+ features.

---

## Why ES6 Matters

ES6 introduced powerful features that solved common problems in older JavaScript:

- Better variable declarations
- Cleaner function syntax
- Improved object and array handling
- Modular code organization
- Better asynchronous programming support
- Improved readability and maintainability

---

## Important ES6+ Features

### Variables

- `var`
- `let`
- `const`

Example:

```javascript
let age = 25;
const company = "Capgemini";
```

---

### Arrow Functions

Provide a shorter syntax for writing functions.

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

---

### Template Literals

Allow string interpolation using backticks.

```javascript
const name = "Harsha";

console.log(`Hello ${name}`);
```

---

### Destructuring

Extract values from objects and arrays.

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const { name, role } = user;
```

---

### Spread Operator

Copies or merges arrays and objects.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3];
```

---

### Rest Operator

Collects multiple values into a single array.

```javascript
function sum(...numbers) {
    return numbers;
}
```

---

### Array Methods

Common methods used in React applications:

- map()
- filter()
- reduce()

Example:

```javascript
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);
```

---

### Modules

Allow code to be split across multiple files.

```javascript
export const add = (a, b) => a + b;
```

```javascript
import { add } from "./math.js";
```

---

### Promises

Handle asynchronous operations.

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

### Async/Await

Modern syntax for working with promises.

```javascript
async function getData() {
    const response = await fetch(url);
}
```

---

## ES6 and React

React heavily relies on ES6+ features:

- Arrow Functions
- Destructuring
- Spread Operator
- Template Literals
- Modules
- Promises
- Async/Await

A strong understanding of ES6 makes learning React much easier.

---

## Summary

ES6 modernized JavaScript by introducing cleaner syntax, better variable management, modular programming, and improved asynchronous code handling. These features form the foundation of modern React development.