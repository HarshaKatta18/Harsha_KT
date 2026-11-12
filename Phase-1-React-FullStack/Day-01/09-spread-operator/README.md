# Spread Operator (...)

## Introduction

The Spread Operator was introduced in ES6.

It allows expanding elements of an array or properties of an object.

Syntax:

```javascript
...
```

Think of it as:

> "Take the contents inside and spread them out."

---

# Why Was It Introduced?

Before ES6, copying and merging arrays/objects required extra code.

The Spread Operator provides a cleaner and more readable approach.

---

# Spread Operator with Arrays

Example:

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output:

```javascript
1 2 3
```

The array elements are spread out individually.

---

# Copying Arrays

Without Spread:

```javascript
const arr1 = [1, 2, 3];

const arr2 = arr1;
```

Both variables point to the same array.

---

Modifying arr2:

```javascript
arr2.push(4);
```

Results in:

```javascript
[1,2,3,4]
```

for both variables.

---

Using Spread:

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
```

Creates a new array.

---

# Merging Arrays

Example:

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];
```

Output:

```javascript
[1,2,3,4]
```

---

# Adding New Elements

Example:

```javascript
const numbers = [1, 2, 3];

const updatedNumbers = [...numbers, 4];
```

Output:

```javascript
[1,2,3,4]
```

---

Adding at the beginning:

```javascript
const updatedNumbers = [0, ...numbers];
```

Output:

```javascript
[0,1,2,3]
```

---

# Spread Operator with Objects

Objects can also be copied.

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const copiedUser = {
    ...user
};
```

Output:

```javascript
{
    name: "Harsha",
    role: "Developer"
}
```

---

# Adding New Properties

Example:

```javascript
const user = {
    name: "Harsha"
};

const updatedUser = {
    ...user,
    city: "Mumbai"
};
```

Output:

```javascript
{
    name: "Harsha",
    city: "Mumbai"
}
```

---

# Updating Existing Properties

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const updatedUser = {
    ...user,
    role: "Senior Developer"
};
```

Output:

```javascript
{
    name: "Harsha",
    role: "Senior Developer"
}
```

Later properties overwrite earlier ones.

---

# Nested Objects

Example:

```javascript
const employee = {
    name: "Harsha",
    address: {
        city: "Mumbai"
    }
};
```

Copying:

```javascript
const employeeCopy = {
    ...employee
};
```

Note:

Spread performs a shallow copy.

Nested objects still share references.

---

# Shallow Copy

Example:

```javascript
const original = {
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...original
};
```

Changing:

```javascript
copy.address.city = "Pune";
```

Also changes:

```javascript
original.address.city
```

because only the first level is copied.

This is called a shallow copy.

---

# Spread vs Rest Operator

They use the same symbol:

```javascript
...
```

but have different meanings.

---

## Spread

Expands values.

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

Output:

```javascript
1 2 3
```

---

## Rest

Collects values.

```javascript
function sum(...numbers) {
    console.log(numbers);
}
```

Output:

```javascript
[1,2,3]
```

---

# React Connection

React uses Spread Operator heavily when updating state.

Instead of modifying existing state:

```javascript
users.push(newUser);
```

React recommends:

```javascript
const updatedUsers = [
    ...users,
    newUser
];
```

---

Object update example:

```javascript
const updatedUser = {
    ...user,
    city: "Pune"
};
```

This creates a new object instead of modifying the old one.

---

# Common Mistakes

## Mistake 1

Assuming Spread performs a deep copy.

Wrong:

```javascript
const copy = {
    ...original
};
```

Nested objects still share references.

---

## Mistake 2

Confusing Spread and Rest.

Remember:

Spread:

```javascript
[...arr]
```

Expand

Rest:

```javascript
(...args)
```

Collect

---

# Advantages

- Cleaner code
- Easy array copying
- Easy object copying
- Array merging
- State updates in React
- Improved readability

---

# Summary

- Spread Operator uses `...`.
- Expands arrays and objects.
- Used for copying and merging.
- Creates shallow copies.
- Commonly used in React state updates.
- Different from the Rest Operator.