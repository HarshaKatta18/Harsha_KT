# Conditional Rendering

Conditional Rendering controls what appears on the screen.

---

## If Else

```jsx
if (loggedIn) {
  return <h1>Welcome</h1>;
}
```

---

## Ternary Operator

```jsx
{
  loggedIn
    ? "Welcome"
    : "Login";
}
```

---

## Logical &&

```jsx
{
  show && <h2>Details</h2>;
}
```

---

## Summary

Conditional Rendering helps create dynamic user interfaces.