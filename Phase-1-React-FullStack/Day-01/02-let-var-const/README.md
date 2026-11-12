# let, var, const

## Introduction

JavaScript provides three ways to declare variables:

- var
- let
- const

Understanding their differences is important because they behave differently with respect to scope, hoisting, redeclaration, and reassignment.

ES6 introduced `let` and `const` to address several issues associated with `var`.

---

# What is a Variable?

A variable is a named container used to store data.

Example:

```javascript
let name = "Harsha";
```

Here:

- `let` → Variable declaration keyword
- `name` → Variable name
- `"Harsha"` → Value

---

# var

Before ES6, `var` was the only way to declare variables.

Example:

```javascript
var name = "Harsha";
```

## Characteristics

### Can be Redeclared

```javascript
var city = "Mumbai";
var city = "Pune";
```

Valid.

---

### Can be Reassigned

```javascript
var age = 25;
age = 26;
```

Valid.

---

### Function Scoped

```javascript
function demo() {
    var message = "Hello";
}

console.log(message);
```

Output:

```javascript
ReferenceError
```

---

### Not Block Scoped

```javascript
if (true) {
    var age = 25;
}

console.log(age);
```

Output:

```javascript
25
```

The variable is accessible outside the block.

---

# let

Introduced in ES6.

Use `let` when the value may change later.

Example:

```javascript
let age = 25;
```

---

## Characteristics

### Cannot be Redeclared

```javascript
let age = 25;
let age = 30;
```

Output:

```javascript
SyntaxError
```

---

### Can be Reassigned

```javascript
let age = 25;
age = 26;
```

Valid.

---

### Block Scoped

```javascript
if (true) {
    let age = 25;
}

console.log(age);
```

Output:

```javascript
ReferenceError
```

---

# const

Introduced in ES6.

Use `const` when a variable should not be reassigned.

Example:

```javascript
const company = "Capgemini";
```

---

## Characteristics

### Cannot be Redeclared

```javascript
const company = "Capgemini";
const company = "Microsoft";
```

Output:

```javascript
SyntaxError
```

---

### Cannot be Reassigned

```javascript
const company = "Capgemini";

company = "Microsoft";
```

Output:

```javascript
TypeError
```

---

### Block Scoped

```javascript
if (true) {
    const city = "Mumbai";
}

console.log(city);
```

Output:

```javascript
ReferenceError
```

---

# const with Arrays and Objects

Many beginners think `const` makes arrays and objects immutable.

This is incorrect.

Example:

```javascript
const numbers = [1, 2, 3];

numbers.push(4);
```

Valid.

Output:

```javascript
[1,2,3,4]
```

Why?

Because `const` prevents reassignment of the variable reference, not modification of the contents.

---

Valid:

```javascript
const arr = [1,2,3];

arr.push(4);
```

Invalid:

```javascript
arr = [5,6,7];
```

---

# Hoisting Behavior

## var

```javascript
console.log(name);

var name = "Harsha";
```

Output:

```javascript
undefined
```

Hoisted and initialized with undefined.

---

## let

```javascript
console.log(name);

let name = "Harsha";
```

Output:

```javascript
ReferenceError
```

Variable exists in the Temporal Dead Zone until initialization.

---

## const

```javascript
console.log(company);

const company = "Capgemini";
```

Output:

```javascript
ReferenceError
```

Also affected by the Temporal Dead Zone.

---

# Comparison Table

| Feature | var | let | const |
|----------|----------|----------|----------|
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Block Scope | ❌ No | ✅ Yes | ✅ Yes |
| Hoisted | ✅ Yes | ✅ Yes* | ✅ Yes* |
| Default Choice Today | ❌ No | ✅ Sometimes | ✅ Most Common |

\* Hoisted but inaccessible before initialization (TDZ).

---

# Best Practices

Use:

```javascript
const
```

by default.

Use:

```javascript
let
```

when the value must change.

Avoid:

```javascript
var
```

in modern JavaScript and React applications.

---

# Summary

- var is function scoped and can be redeclared.
- let is block scoped and can be reassigned.
- const is block scoped and cannot be reassigned.
- let and const help avoid many bugs caused by var.
- Modern React applications primarily use const and occasionally let.