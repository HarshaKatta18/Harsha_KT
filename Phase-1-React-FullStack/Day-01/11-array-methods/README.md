# Array Methods

## Introduction

JavaScript arrays come with several built-in methods that help manipulate, transform, filter, and process data efficiently.

Modern JavaScript development relies heavily on array methods because they make code:

- Cleaner
- More readable
- Easier to maintain

React applications use array methods extensively, especially `map()`.

---

# Why Array Methods Matter

Suppose we have:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Instead of writing loops repeatedly:

```javascript
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

JavaScript provides powerful methods that simplify working with arrays.

---

# Commonly Used Array Methods

## 1. map()

Used to transform each element and create a new array.

Example:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(
    num => num * 2
);
```

Output:

```javascript
[2,4,6]
```

Original array remains unchanged.

---

## 2. filter()

Used to select elements that satisfy a condition.

Example:

```javascript
const numbers = [1,2,3,4,5,6];

const evenNumbers =
    numbers.filter(num => num % 2 === 0);
```

Output:

```javascript
[2,4,6]
```

---

## 3. reduce()

Used to reduce an array into a single value.

Example:

```javascript
const numbers = [1,2,3,4];

const total = numbers.reduce(
    (sum, current) => sum + current,
    0
);
```

Output:

```javascript
10
```

---

## How reduce Works

Iteration 1:

```javascript
0 + 1 = 1
```

Iteration 2:

```javascript
1 + 2 = 3
```

Iteration 3:

```javascript
3 + 3 = 6
```

Iteration 4:

```javascript
6 + 4 = 10
```

Final result:

```javascript
10
```

---

## 4. find()

Returns the first matching element.

Example:

```javascript
const users = [
    { id: 1, name: "Harsha" },
    { id: 2, name: "Anand" }
];

const user =
    users.find(user => user.id === 2);
```

Output:

```javascript
{ id: 2, name: "Anand" }
```

---

## 5. some()

Checks if at least one element satisfies a condition.

Example:

```javascript
const nums = [1,2,3,4];

const result =
    nums.some(num => num > 3);
```

Output:

```javascript
true
```

---

## 6. every()

Checks if all elements satisfy a condition.

Example:

```javascript
const nums = [2,4,6];

const result =
    nums.every(num => num % 2 === 0);
```

Output:

```javascript
true
```

---

## 7. forEach()

Iterates through each element.

Example:

```javascript
const nums = [1,2,3];

nums.forEach(
    num => console.log(num)
);
```

Output:

```javascript
1
2
3
```

Unlike map(), forEach() does not return a new array.

---

# map() vs forEach()

## map()

```javascript
const result =
    nums.map(num => num * 2);
```

Returns:

```javascript
[2,4,6]
```

---

## forEach()

```javascript
nums.forEach(
    num => console.log(num)
);
```

Returns:

```javascript
undefined
```

Use map when you need a new array.

Use forEach when you only need to perform an action.

---

# Chaining Methods

Methods can be combined.

Example:

```javascript
const numbers =
    [1,2,3,4,5,6];

const result =
    numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 10);
```

Output:

```javascript
[20,40,60]
```

---

# React Connection

React uses map() extensively.

Example:

```jsx
const users = [
    "Harsha",
    "Anand",
    "Ayesha"
];

users.map(user => (
    <li>{user}</li>
));
```

React creates a UI element for each array item.

This is one of the most common React patterns.

---

# Interview Question

What is the difference between map() and filter()?

map():

```javascript
Transforms data
```

filter():

```javascript
Removes data based on condition
```

---

# Best Practices

✅ Prefer array methods over manual loops when appropriate.

✅ Use map() for transformations.

✅ Use filter() for selection.

✅ Use reduce() for aggregations.

✅ Avoid modifying original arrays.

---

# Summary

- map() transforms data.
- filter() selects data.
- reduce() combines data.
- find() returns first match.
- some() checks if any match.
- every() checks if all match.
- forEach() performs actions.
- React heavily relies on map().