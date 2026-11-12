# Rest Operator (...)

## Introduction

The Rest Operator was introduced in ES6.

It allows collecting multiple values into a single array.

Syntax:

```javascript
...
```

Although the syntax looks identical to the Spread Operator, its behavior is different.

Think of Rest Operator as:

> "Collect remaining values into a single variable."

---

# Rest vs Spread

Spread Operator:

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output:

```javascript
1 2 3
```

Spread expands values.

---

Rest Operator:

```javascript
function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(1, 2, 3);
```

Output:

```javascript
[1, 2, 3]
```

Rest collects values.

---

# Why Was It Introduced?

Before ES6, developers used the `arguments` object.

Example:

```javascript
function sum() {
    console.log(arguments);
}
```

Problems:

- Not a real array
- Limited functionality
- Less readable

Rest Operator provides a cleaner solution.

---

# Collecting Function Arguments

Example:

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(1, 2, 3, 4);
```

Output:

```javascript
[1, 2, 3, 4]
```

All values are collected into an array.

---

# Using Array Methods

Since Rest creates an array, array methods can be used.

Example:

```javascript
function sum(...numbers) {

    return numbers.reduce(
        (total, current) => total + current,
        0
    );

}
```

Usage:

```javascript
sum(10, 20, 30);
```

Output:

```javascript
60
```

---

# Rest with Regular Parameters

Example:

```javascript
function display(first, second, ...others) {

    console.log(first);
    console.log(second);
    console.log(others);

}
```

Call:

```javascript
display(10, 20, 30, 40, 50);
```

Output:

```javascript
10
20
[30, 40, 50]
```

---

# Rest Must Be Last

Valid:

```javascript
function demo(name, ...skills) {

}
```

---

Invalid:

```javascript
function demo(...skills, name) {

}
```

Output:

```javascript
SyntaxError
```

Rest parameter must always be the final parameter.

---

# Rest with Array Destructuring

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, ...remaining] = numbers;
```

Output:

```javascript
first = 1

remaining = [2, 3, 4, 5]
```

---

# Rest with Object Destructuring

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer",
    city: "Mumbai"
};

const { name, ...remaining } = user;
```

Output:

```javascript
name = Harsha

remaining = {
    role: "Developer",
    city: "Mumbai"
}
```

---

# Real World Example

Suppose a function should accept any number of marks.

Example:

```javascript
function calculateTotal(...marks) {

    return marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

}
```

Usage:

```javascript
calculateTotal(75, 80, 90, 85);
```

Output:

```javascript
330
```

---

# React Connection

Although used less frequently than Spread Operator, Rest Operator appears in React applications.

Example:

```javascript
const {
    name,
    age,
    ...otherDetails
} = user;
```

Useful when passing multiple properties forward.

---

# Common Mistakes

## Mistake 1

Confusing Rest and Spread.

Spread:

```javascript
console.log(...arr);
```

Expands.

---

Rest:

```javascript
function demo(...arr) {

}
```

Collects.

---

## Mistake 2

Placing Rest Parameter in the Middle

Wrong:

```javascript
function demo(...numbers, age) {

}
```

Results in:

```javascript
SyntaxError
```

---

# Advantages

- Cleaner than arguments object
- Supports dynamic number of parameters
- Creates a real array
- Easy integration with array methods
- Improves readability

---

# Summary

- Rest Operator uses `...`.
- Collects multiple values into one array.
- Commonly used in function parameters.
- Must always be the last parameter.
- Can be used with destructuring.
- Opposite of Spread Operator.