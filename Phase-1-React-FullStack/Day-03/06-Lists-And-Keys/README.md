# Lists and Keys

React uses map() to render collections.

Example:

```jsx
employees.map(...)
```

---

## Why Keys?

Keys help React identify list items.

```jsx
key={employee.id}
```

Keys should be unique.

---

## Summary

- Use map() for rendering collections
- Use unique keys
- Improves performance and rendering