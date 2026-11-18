# useState Hook

## What is useState?

useState allows components to store and manage data.

Syntax:

```jsx
const [count, setCount] = useState(0);
```

---

## Updating State

```jsx
setCount(count + 1);
```

---

## Form Inputs

```jsx
const [name, setName] = useState("");
```

---

## Multiple State Variables

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
```

---

## Summary

- Stores component state
- Updates UI automatically
- Used for forms, counters, and dynamic data