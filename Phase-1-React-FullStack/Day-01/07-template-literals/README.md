# Template Literals

## Introduction

Template Literals were introduced in ES6 to make working with strings easier and more readable.

Before ES6, developers used string concatenation.

Example:

```javascript
const name = "Harsha";

console.log("Hello " + name);
```

ES6 introduced Template Literals which provide a cleaner syntax.

Example:

```javascript
const name = "Harsha";

console.log(`Hello ${name}`);
```

Output:

```javascript
Hello Harsha
```

---

# Syntax

Template Literals use backticks (`) instead of single or double quotes.

```javascript
`text`
```

Example:

```javascript
const course = "React";

console.log(`Learning ${course}`);
```

---

# String Interpolation

String interpolation means inserting variables or expressions directly into a string.

Syntax:

```javascript
${expression}
```

Example:

```javascript
const name = "Harsha";

console.log(`Hello ${name}`);
```

Output:

```javascript
Hello Harsha
```

---

# Why Not Use String Concatenation?

Before ES6:

```javascript
const name = "Harsha";

console.log("Hello " + name);
```

If multiple variables exist:

```javascript
const name = "Harsha";
const role = "Developer";

console.log(name + " is a " + role);
```

Template Literals:

```javascript
console.log(`${name} is a ${role}`);
```

Cleaner and easier to read.

---

# Using Expressions

Anything that returns a value can be placed inside:

```javascript
${}
```

Example:

```javascript
const a = 10;
const b = 20;

console.log(`${a + b}`);
```

Output:

```javascript
30
```

---

# Function Calls Inside Template Literals

Example:

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(`${greet("Harsha")}`);
```

Output:

```javascript
Hello Harsha
```

---

# Multi-Line Strings

Before ES6:

```javascript
const text = "Line 1\nLine 2\nLine 3";
```

Template Literals:

```javascript
const text = `
Line 1
Line 2
Line 3
`;
```

Output:

```text
Line 1
Line 2
Line 3
```

This makes long strings easier to manage.

---

# Dynamic String Generation

Example:

```javascript
const name = "Harsha";
const technology = "React";

console.log(`${name} is learning ${technology}`);
```

Output:

```javascript
Harsha is learning React
```

---

# Real World Example

Creating URLs dynamically.

```javascript
const userId = 10;

const url = `https://api.example.com/users/${userId}`;
```

Result:

```javascript
https://api.example.com/users/10
```

---

# React Connection

Template literals are commonly used in React when:

- Building dynamic strings
- Constructing API URLs
- Creating CSS class names
- Displaying messages

Example:

```javascript
const userName = "Harsha";

const welcomeMessage = `Welcome ${userName}`;
```

---

# Common Mistake

Wrong:

```javascript
console.log("Hello ${name}");
```

Output:

```javascript
Hello ${name}
```

Because double quotes do not support interpolation.

Correct:

```javascript
console.log(`Hello ${name}`);
```

---

# Advantages

- Cleaner syntax
- Better readability
- Supports expressions
- Supports multi-line strings
- Reduces string concatenation

---

# Summary

- Template Literals were introduced in ES6.
- They use backticks (`).
- Variables and expressions can be inserted using `${}`.
- They support multi-line strings.
- They provide a cleaner alternative to string concatenation.
- They are commonly used in React applications.