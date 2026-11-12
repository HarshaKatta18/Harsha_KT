# Scope

## Introduction

Scope determines where a variable can be accessed within a program.

In simple words:

> Scope defines the visibility and accessibility of variables.

Understanding scope helps avoid naming conflicts and unexpected bugs.

---

# Why Scope Matters

Consider:

```javascript
let name = "Harsha";
```

Questions:

- Can this variable be accessed everywhere?
- Can it be accessed inside a function?
- Can it be accessed inside an if block?
- Can another variable with the same name exist?

The answer depends on scope.

---

# Types of Scope

JavaScript mainly has:

1. Global Scope
2. Function Scope
3. Block Scope

---

# Global Scope

Variables declared outside all functions and blocks belong to the global scope.

Example:

```javascript
let company = "Capgemini";
```

Accessing globally:

```javascript
console.log(company);
```

Output:

```javascript
Capgemini
```

Accessing inside a function:

```javascript
let company = "Capgemini";

function showCompany() {
    console.log(company);
}

showCompany();
```

Output:

```javascript
Capgemini
```

Global variables can be accessed from anywhere in the program.

---

# Function Scope

Variables declared inside a function can only be accessed within that function.

Example:

```javascript
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();
```

Output:

```javascript
Hello
```

Outside the function:

```javascript
console.log(message);
```

Output:

```javascript
ReferenceError
```

---

# Block Scope

A block is any code enclosed within:

```javascript
{
}
```

Examples:

```javascript
if(){}
for(){}
while(){}
```

Variables declared using:

```javascript
let
const
```

are block scoped.

Example:

```javascript
if(true) {
    let age = 25;
}

console.log(age);
```

Output:

```javascript
ReferenceError
```

---

# let and Block Scope

Example:

```javascript
if(true) {
    let city = "Mumbai";
    console.log(city);
}
```

Output:

```javascript
Mumbai
```

Outside:

```javascript
console.log(city);
```

Output:

```javascript
ReferenceError
```

---

# const and Block Scope

Example:

```javascript
if(true) {
    const language = "JavaScript";
}

console.log(language);
```

Output:

```javascript
ReferenceError
```

---

# var and Scope

var behaves differently.

Example:

```javascript
if(true) {
    var age = 25;
}

console.log(age);
```

Output:

```javascript
25
```

Why?

Because:

```javascript
var
```

is NOT block scoped.

It is function scoped.

---

# Scope Chain

When JavaScript cannot find a variable in the current scope, it looks in outer scopes.

This process is called the Scope Chain.

Example:

```javascript
let company = "Capgemini";

function outer() {

    function inner() {

        console.log(company);

    }

    inner();
}

outer();
```

Output:

```javascript
Capgemini
```

Search process:

```text
inner()
   ↓
outer()
   ↓
global
```

Variable found in global scope.

---

# Variable Shadowing

A variable in an inner scope can hide a variable with the same name from an outer scope.

Example:

```javascript
let name = "Harsha";

function show() {

    let name = "Anand";

    console.log(name);
}

show();
```

Output:

```javascript
Anand
```

The local variable shadows the global variable.

---

# Another Shadowing Example

```javascript
let x = 10;

function test() {

    let x = 20;

    console.log(x);
}

test();

console.log(x);
```

Output:

```javascript
20
10
```

Two different variables exist.

---

# Nested Scope

Functions can access variables from outer functions.

Example:

```javascript
function outer() {

    let outerVariable = "Outer";

    function inner() {

        console.log(outerVariable);

    }

    inner();
}

outer();
```

Output:

```javascript
Outer
```

Inner scope can access outer scope variables.

---

# Lexical Scope

JavaScript uses Lexical Scope.

This means:

> Scope is determined by where functions are written, not where they are called.

Example:

```javascript
let name = "Harsha";

function show() {
    console.log(name);
}

show();
```

Output:

```javascript
Harsha
```

JavaScript remembers the scope in which the function was created.

---

# Interview Question 1

```javascript
let a = 10;

function test() {
    console.log(a);
}

test();
```

Output:

```javascript
10
```

---

# Interview Question 2

```javascript
let a = 10;

function test() {

    let a = 20;

    console.log(a);
}

test();
```

Output:

```javascript
20
```

---

# Interview Question 3

```javascript
if(true) {

    let age = 25;

}

console.log(age);
```

Output:

```javascript
ReferenceError
```

---

# Best Practices

✅ Prefer const for variables that never change.

✅ Use let for variables that require reassignment.

✅ Avoid var in modern JavaScript.

✅ Keep variable scope as small as possible.

✅ Avoid unnecessary global variables.

---

# React Connection

You will see scope everywhere in React.

Example:

```jsx
function Welcome() {

    const name = "Harsha";

    return <h1>{name}</h1>;

}
```

The variable:

```javascript
name
```

belongs to the component scope.

Event handlers can also access variables from the component scope.

Example:

```jsx
function Counter() {

    const count = 0;

    const handleClick = () => {
        console.log(count);
    };

}
```

The arrow function can access count because of lexical scope.

---

# Summary

- Scope defines where variables can be accessed.
- JavaScript has Global, Function, and Block Scope.
- let and const are block scoped.
- var is function scoped.
- JavaScript follows the Scope Chain when searching for variables.
- Inner variables can shadow outer variables.
- Scope is foundational for closures, React components, and hooks.