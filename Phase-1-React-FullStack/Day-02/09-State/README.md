# React State

## Introduction

State is a built-in React feature used to store and manage data that can change over time.

When State changes, React automatically updates the UI.

This is one of the most powerful features of React.

---

# Why State?

Without State:

```jsx
function Counter() {
    return <h1>0</h1>;
}
```

The value never changes.

State allows values to change dynamically.

Example:

```text
0
↓ Click
1
↓ Click
2
↓ Click
3
```

---

# What is State?

State is data managed by a component.

Example:

```jsx
const [count, setCount] = useState(0);
```

Here:

```jsx
count
```

Current value.

```jsx
setCount
```

Function used to update value.

```jsx
0
```

Initial value.

---

# useState Hook

React provides:

```jsx
useState()
```

to create state.

Example:

```jsx
import { useState } from "react";
```

```jsx
const [count, setCount] = useState(0);
```

---

# Understanding useState

```jsx
const [count, setCount] = useState(0);
```

Think:

```jsx
count = 0
```

Current value.

```jsx
setCount(...)
```

Updates value.

---

# Updating State

Example:

```jsx
setCount(count + 1);
```

Current:

```text
0
```

After click:

```text
1
```

After click:

```text
2
```

After click:

```text
3
```

---

# Counter Example

```jsx
const [count, setCount] =
    useState(0);
```

Button:

```jsx
<button
    onClick={() =>
        setCount(count + 1)}
>
    Increment
</button>
```

---

# How React Reacts

State Change:

```text
count = 0
```

↓

```text
setCount(1)
```

↓

```text
React Re-renders
```

↓

```text
count = 1
```

Displayed automatically.

---

# State vs Variables

Normal Variable:

```jsx
let count = 0;
```

React will NOT re-render.

---

State:

```jsx
const [count, setCount] =
    useState(0);
```

React WILL re-render.

---

# Multiple States

Example:

```jsx
const [name, setName] =
    useState("Harsha");

const [age, setAge] =
    useState(25);
```

A component can have multiple state variables.

---

# State with Input

Example:

```jsx
const [name, setName] =
    useState("");
```

Input:

```jsx
<input
    value={name}
    onChange={(e) =>
        setName(e.target.value)}
/>
```

State updates while typing.

---

# State Flow

```text
User Action
      ↓
State Updated
      ↓
Component Re-renders
      ↓
UI Updated
```

---

# State vs Props

| Props | State |
|---------|---------|
| Passed from Parent | Managed inside Component |
| Read-only | Can be changed |
| External Data | Internal Data |

---

# Real World Examples

State is used for:

- Counters
- Forms
- Search Boxes
- Login Status
- Shopping Cart
- Employee Management Systems

---

# Interview Questions

## What is State?

State is component-level data that can change over time and causes React to re-render the UI.

---

## Which Hook manages State?

```jsx
useState()
```

---

## Difference between Props and State?

Props are passed from parent components.

State is managed within the component itself.

---

# Summary

- State stores changing data.
- useState() creates state.
- Updating state triggers re-render.
- State makes React applications dynamic.
- State is one of React's core concepts.