# Functional Components

## What are Functional Components?

Functional Components are JavaScript functions that return JSX.

Example:

```jsx
function Welcome() {
  return <h1>Hello React</h1>;
}
```

Modern React applications primarily use Functional Components.

---

## Benefits

- Simpler syntax
- Easier to read and maintain
- Support Hooks
- Less boilerplate than Class Components

---

## Functional vs Class Components

Functional Component:

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

Class Component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Modern React prefers Functional Components.

---

## Best Practices

- Use PascalCase names
- Keep components focused
- Use props for data
- Use Hooks for state and lifecycle logic

---

## Summary

- Functional Components are functions that return JSX.
- They are the preferred way of building React applications.
- Hooks work only with Functional Components.