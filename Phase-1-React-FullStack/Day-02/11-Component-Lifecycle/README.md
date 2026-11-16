# React Component Lifecycle

## Introduction

A React Component goes through different phases during its existence.

Think of a component as a person:

```text
Born
 ↓
Lives
 ↓
Changes
 ↓
Removed
```

Similarly:

```text
Component Created
 ↓
Component Rendered
 ↓
Component Updated
 ↓
Component Unmounted
```

This is called the Component Lifecycle.

---

# Lifecycle Phases

## 1. Mounting

When a component is created and appears on the screen.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}
```

The component has mounted.

---

## 2. Updating

When component data changes.

Example:

```jsx
setCount(count + 1);
```

React updates the UI.

---

## 3. Unmounting

When a component is removed from the screen.

Example:

```jsx
<Component />
```

↓

```jsx
null
```

The component is removed.

---

# useEffect Hook

React provides:

```jsx
useEffect()
```

to perform actions during lifecycle phases.

Import:

```jsx
import { useEffect } from "react";
```

---

# Syntax

```jsx
useEffect(() => {

    console.log("Effect Running");

});
```

---

# useEffect Runs After Render

Example:

```jsx
useEffect(() => {

    console.log("Component Rendered");

});
```

Runs after every render.

---

# Mounting Example

```jsx
useEffect(() => {

    console.log("Component Mounted");

}, []);
```

Empty dependency array:

```jsx
[]
```

means:

```text
Run only once
```

after initial render.

---

# Updating Example

```jsx
useEffect(() => {

    console.log("Count Changed");

}, [count]);
```

Runs whenever:

```jsx
count
```

changes.

---

# Unmounting Example

```jsx
useEffect(() => {

    return () => {

        console.log("Component Removed");

    };

}, []);
```

Cleanup function runs before unmounting.

---

# Dependency Array

## No Dependency Array

```jsx
useEffect(() => {

});
```

Runs after every render.

---

## Empty Dependency Array

```jsx
useEffect(() => {

}, []);
```

Runs only once.

---

## Dependency Provided

```jsx
useEffect(() => {

}, [count]);
```

Runs whenever count changes.

---

# Real World Use Cases

useEffect is commonly used for:

- API Calls
- Data Fetching
- Timers
- Event Listeners
- Logging
- Cleanup Operations

---

# Example API Call

```jsx
useEffect(() => {

    fetch("/employees");

}, []);
```

The API call happens once when the component mounts.

---

# Lifecycle Mapping

Class Components:

```text
componentDidMount
componentDidUpdate
componentWillUnmount
```

Modern React:

```text
useEffect()
```

---

# Interview Questions

## What are lifecycle phases?

- Mounting
- Updating
- Unmounting

---

## Which Hook is used for Lifecycle Management?

```jsx
useEffect()
```

---

## Why is useEffect used?

To perform side effects such as API calls, timers, subscriptions, and cleanup operations.

---

# Summary

- Components have Mounting, Updating and Unmounting phases.
- useEffect manages lifecycle behavior.
- Empty dependency array runs once.
- Dependencies trigger updates.
- Cleanup functions run during unmounting.
- useEffect is one of the most important React Hooks.