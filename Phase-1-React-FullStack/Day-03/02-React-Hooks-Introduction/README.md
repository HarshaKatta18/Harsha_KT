# React Hooks Introduction

## What are Hooks?

Hooks are special React functions that allow Functional Components to use React features.

Examples:

- useState
- useEffect

---

## Why Hooks?

Before Hooks:

- State required Class Components
- Lifecycle methods required Class Components

After Hooks:

- Functional Components can manage state
- Functional Components can handle lifecycle logic

---

## Rules of Hooks

1. Call Hooks only at the top level.
2. Call Hooks only inside React Functional Components.

Correct:

```jsx
const [count, setCount] = useState(0);
```

---

## Benefits

- Reusable logic
- Cleaner code
- Simpler components
- Better readability

---

## Summary

Hooks allow Functional Components to use state and lifecycle features.