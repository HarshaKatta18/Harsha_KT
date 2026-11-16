# JavaScript Modules

## Introduction

As applications grow, keeping all code inside a single file becomes difficult to manage.

JavaScript Modules solve this problem by allowing code to be split into multiple files.

Modules improve:

- Code Organization
- Reusability
- Maintainability
- Scalability

A module is simply a JavaScript file that can export functionality and allow other files to import and use it.

---

# Why Modules?

Imagine a project containing:

```javascript
function add() {}
function subtract() {}
function multiply() {}
function divide() {}
```

Initially this may seem fine.

As the application grows:

```text
500 functions
10000 lines of code
```

Managing everything becomes difficult.

Instead:

```text
math.js
user.js
product.js
employee.js
```

Each file becomes responsible for one task.

---

# Module System

Modules work using:

- export
- import

Think:

```text
export = Make available

import = Use available functionality
```

---

# Named Export

A file can export multiple values.

math.js

```javascript
export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;
```

Import:

```javascript
import { add, subtract } from "./math.js";
```

Notice:

```javascript
{}
```

are required for named exports.

---

# Default Export

Each module can have one default export.

math.js

```javascript
const add = (a, b) => a + b;

export default add;
```

Import:

```javascript
import add from "./math.js";
```

No curly braces required.

---

# Named Export vs Default Export

Named Export:

```javascript
export const add = () => {};
```

Import:

```javascript
import { add } from "./math.js";
```

---

Default Export:

```javascript
export default add;
```

Import:

```javascript
import add from "./math.js";
```

---

# Importing Everything

Example:

```javascript
import * as math from "./math.js";
```

Usage:

```javascript
math.add(10, 20);
```

---

# Benefits of Modules

## Better Structure

Instead of:

```text
app.js
```

Use:

```text
user.js
product.js
auth.js
employee.js
```

---

## Reusability

One module can be reused in multiple places.

---

## Maintainability

Smaller files are easier to maintain.

---

## Avoid Global Namespace Pollution

Variables remain isolated to their modules.

---

# Real Project Example

Project Structure:

```text
src

├── math.js
├── employee.js
├── auth.js
└── app.js
```

Each module handles one responsibility.

---

# React Connection

React applications heavily rely on modules.

Example:

```text
src

├── App.jsx
├── Header.jsx
├── Footer.jsx
├── Navbar.jsx
└── UserCard.jsx
```

Header.jsx:

```jsx
function Header() {
    return <h1>Header</h1>;
}

export default Header;
```

App.jsx:

```jsx
import Header from "./Header";

function App() {
    return (
        <>
            <Header />
        </>
    );
}
```

Every React component is usually stored in its own module.

---

# Library Modules

React itself is imported as a module.

Example:

```javascript
import React from "react";
```

Example:

```javascript
import axios from "axios";
```

React and Axios are external packages that expose modules.

---

# Interview Questions

## What is a module?

A module is a reusable JavaScript file that can export functionality and allow other modules to import it.

---

## Why do we use modules?

- Better code organization
- Improved maintainability
- Reusability
- Scalability
- Encapsulation

---

## Difference between Named and Default Export?

Named Export:

```javascript
export const add = () => {};
```

Can have multiple exports.

Default Export:

```javascript
export default add;
```

Only one default export per file.

---

# Summary

- Modules help split code into multiple files.
- export shares functionality.
- import consumes functionality.
- Named exports require curly braces.
- Default exports do not require curly braces.
- React uses modules extensively.
- Every React component is usually stored as a separate module.