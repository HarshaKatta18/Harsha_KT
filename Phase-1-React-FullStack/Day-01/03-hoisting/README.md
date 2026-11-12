# Hoisting

## Introduction

Hoisting is JavaScript's default behavior of moving declarations to memory before code execution.

A common misconception is:

> "JavaScript moves code to the top."

This is not exactly true.

What actually happens is:

1. JavaScript scans the code.
2. Memory is allocated for variables and functions.
3. Code execution begins.

This process is called hoisting.

---

# JavaScript Execution Phases

Every JavaScript program runs in two phases.

## 1. Memory Creation Phase

JavaScript scans the code and allocates memory.

Example:

```javascript
var name = "Harsha";

function greet() {
    console.log("Hello");
}
```

Memory created:

```javascript
name = undefined

greet = function definition
```

---

## 2. Execution Phase

Code executes line by line.

```javascript
name = "Harsha";
```

Now:

```javascript
name = "Harsha"
```

---

# Hoisting with var

Example:

```javascript
console.log(name);

var name = "Harsha";
```

Output:

```javascript
undefined
```

Internal view:

```javascript
var name;

console.log(name);

name = "Harsha";
```

Important:

- Declaration is hoisted.
- Assignment is NOT hoisted.

---

# Hoisting with let

Example:

```javascript
console.log(age);

let age = 25;
```

Output:

```javascript
ReferenceError
```

Many people incorrectly say:

> let is not hoisted

This is FALSE.

let is hoisted but behaves differently than var.

---

# Temporal Dead Zone (TDZ)

The period between:

- Variable creation
- Variable initialization

is called the Temporal Dead Zone.

Example:

```javascript
console.log(age);

let age = 25;
```

Timeline:

```text
Program Starts
│
├── age exists in memory
│
├── Temporal Dead Zone
│
├── let age = 25
│
└── TDZ Ends
```

During the TDZ:

```javascript
console.log(age);
```

causes:

```javascript
ReferenceError
```

---

# Hoisting with const

Example:

```javascript
console.log(company);

const company = "Capgemini";
```

Output:

```javascript
ReferenceError
```

Reason:

- const is hoisted
- const enters the Temporal Dead Zone
- Cannot be accessed before initialization

---

# Comparing var, let and const

## var

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined
```

Memory:

```javascript
a = undefined
```

---

## let

```javascript
console.log(a);

let a = 10;
```

Output:

```javascript
ReferenceError
```

Memory:

```javascript
a = <uninitialized>
```

---

## const

```javascript
console.log(a);

const a = 10;
```

Output:

```javascript
ReferenceError
```

Memory:

```javascript
a = <uninitialized>
```

---

# Function Hoisting

Functions behave differently.

---

## Function Declaration

Example:

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

Reason:

The entire function is hoisted.

Memory:

```javascript
greet = function definition
```

---

## Function Expression

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

Reason:

Memory:

```javascript
greet = undefined
```

Execution:

```javascript
undefined();
```

Which causes:

```javascript
TypeError: greet is not a function
```

---

## Arrow Function

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

greet is inside the TDZ.

---

# Variable Shadowing and Hoisting

Example:

```javascript
var x = 10;

function test() {
    console.log(x);

    var x = 20;
}

test();
```

Output:

```javascript
undefined
```

Why?

Internal view:

```javascript
function test() {

    var x;

    console.log(x);

    x = 20;
}
```

Local variable x shadows the global variable.

---

# TDZ inside Functions

Example:

```javascript
let x = 10;

function test() {
    console.log(x);

    let x = 20;
}

test();
```

Output:

```javascript
ReferenceError
```

Why?

JavaScript finds the local x first.

The local x is inside the TDZ when console.log executes.

Therefore the global x is not used.

---

# Interview Question 1

```javascript
console.log(a);

var a = 5;

console.log(a);
```

Output:

```javascript
undefined
5
```

---

# Interview Question 2

```javascript
show();

function show() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

---

# Interview Question 3

```javascript
show();

const show = () => {
    console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

---

# Common Mistakes

## Mistake 1

Thinking assignments are hoisted.

Wrong:

```javascript
var x = 10;
```

Hoisted as:

```javascript
x = 10
```

Correct:

```javascript
var x;
x = 10;
```

---

## Mistake 2

Thinking let and const are not hoisted.

Reality:

- They are hoisted.
- They remain inaccessible during the TDZ.

---

# Best Practices

1. Always declare variables before using them.
2. Prefer const whenever possible.
3. Use let when reassignment is needed.
4. Avoid var in modern JavaScript.
5. Do not rely on hoisting behavior.

---

# Summary

- Hoisting happens during memory creation.
- var is hoisted and initialized as undefined.
- let and const are hoisted but stay in the Temporal Dead Zone.
- Function declarations are fully hoisted.
- Function expressions and arrow functions are not fully hoisted.
- Understanding hoisting helps explain many JavaScript interview questions.