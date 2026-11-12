# Destructuring

## Introduction

Destructuring is an ES6 feature that allows extracting values from objects and arrays into separate variables.

Without destructuring, accessing multiple values can become repetitive.

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const name = user.name;
const role = user.role;
```

With destructuring:

```javascript
const { name, role } = user;
```

Destructuring makes code shorter, cleaner, and easier to read.

---

# Object Destructuring

Object destructuring extracts values from object properties.

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const { name, role } = user;
```

Output:

```javascript
Harsha
Developer
```

Equivalent to:

```javascript
const name = user.name;
const role = user.role;
```

---

# Matching Property Names

Property names must match object keys.

Example:

```javascript
const user = {
    name: "Harsha"
};

const { name } = user;
```

Valid.

---

Example:

```javascript
const { username } = user;
```

Output:

```javascript
undefined
```

Because:

```javascript
username
```

does not exist.

---

# Renaming Variables

You can rename variables during destructuring.

Example:

```javascript
const user = {
    name: "Harsha",
    role: "Developer"
};

const {
    name: userName,
    role: userRole
} = user;
```

Output:

```javascript
userName = Harsha
userRole = Developer
```

---

# Default Values

Useful when a property may not exist.

Example:

```javascript
const user = {
    name: "Harsha"
};

const {
    name,
    role = "Developer"
} = user;
```

Output:

```javascript
Harsha
Developer
```

---

# Array Destructuring

Array destructuring extracts values based on position.

Example:

```javascript
const colors = [
    "Red",
    "Blue",
    "Green"
];

const [first, second] = colors;
```

Output:

```javascript
Red
Blue
```

---

# Skipping Values

Example:

```javascript
const colors = [
    "Red",
    "Blue",
    "Green"
];

const [first, , third] = colors;
```

Output:

```javascript
Red
Green
```

The second value is skipped.

---

# Swapping Variables

Traditional approach:

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

Destructuring:

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

Output:

```javascript
a = 20
b = 10
```

---

# Nested Object Destructuring

Example:

```javascript
const employee = {
    name: "Harsha",
    address: {
        city: "Mumbai"
    }
};

const {
    address: { city }
} = employee;
```

Output:

```javascript
Mumbai
```

---

# Function Parameter Destructuring

Without destructuring:

```javascript
function displayUser(user) {
    console.log(user.name);
}
```

With destructuring:

```javascript
function displayUser({ name }) {
    console.log(name);
}
```

Cleaner and easier to read.

---

# React Connection

React uses destructuring heavily.

Without destructuring:

```jsx
function Welcome(props) {
    return <h1>{props.name}</h1>;
}
```

With destructuring:

```jsx
function Welcome({ name }) {
    return <h1>{name}</h1>;
}
```

Much cleaner.

---

# useState and Destructuring

Example:

```javascript
const [count, setCount] = useState(0);
```

This is array destructuring.

Assume:

```javascript
useState(0);
```

returns:

```javascript
[0, function]
```

Destructuring:

```javascript
const [count, setCount] = useState(0);
```

becomes:

```javascript
count = 0
setCount = function
```

---

# Common Mistakes

Wrong:

```javascript
const user = {
    name: "Harsha"
};

const { username } = user;
```

Output:

```javascript
undefined
```

because username is not a valid key.

---

# Advantages

- Cleaner code
- Less repetition
- Easier access to object properties
- Widely used in React
- Improves readability

---

# Summary

- Destructuring extracts values from objects and arrays.
- Object destructuring uses property names.
- Array destructuring uses positions.
- Supports default values.
- Supports renaming variables.
- Supports nested structures.
- Used extensively in React props and hooks.