# useEffect Hook

## What is useEffect?

useEffect allows components to perform side effects.

Examples:

- API Calls
- Timers
- Logging
- Cleanup

---

## Run Once

```jsx
useEffect(() => {

}, []);
```

---

## Dependency Array

```jsx
useEffect(() => {

}, [count]);
```

Runs whenever count changes.

---

## Cleanup Function

```jsx
return () => {
  clearTimeout(timer);
};
```

Used for removing timers and subscriptions.

---

## Summary

useEffect handles lifecycle behavior and side effects.