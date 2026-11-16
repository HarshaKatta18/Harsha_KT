# React Fundamentals

## What is React?

React is a JavaScript library used to build user interfaces (UI).

It was developed by Meta (Facebook) and is widely used for creating modern web applications.

Examples:

- Facebook
- Instagram
- WhatsApp Web
- Netflix
- Airbnb

---

# Why React?

Before React, developers often manipulated HTML directly using JavaScript.

As applications became larger, managing UI became difficult.

React solves this problem by breaking the user interface into small reusable components.

---

# Core Idea of React

Everything in React is built using Components.

Example:

```text
YouTube

├── Header
├── Sidebar
├── Search Bar
├── Video Card
└── Footer
```

Each piece is a component.

---

# Advantages of React

- Reusable Components
- Faster Development
- Easier Maintenance
- Virtual DOM for efficient updates
- Large community support
- Used extensively in modern web development

---

# React Component

A React component is a reusable piece of UI.

Example:

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

---

# React Component Rules

✅ Must start with a capital letter

```jsx
function Header() {}
```

✅ Should return JSX

```jsx
return <h1>Hello</h1>;
```

❌ Avoid lowercase component names

```jsx
function header() {}
```

---

# React Application Structure

Example:

```text
src

├── App.jsx
├── Header.jsx
├── Footer.jsx
├── UserCard.jsx
└── ProductCard.jsx
```

Each file typically contains one component.

---

# React Rendering Flow

```text
Component
    ↓
Returns JSX
    ↓
React Processes JSX
    ↓
Browser Displays UI
```

---

# What We Will Learn Next

1. Components
2. JSX
3. Props
4. State
5. Event Handling
6. Component Lifecycle

These concepts together form the foundation of React development.

---

# Interview Question

## What is React?

React is a JavaScript library used to build reusable and interactive user interfaces using components.

## What is a Component?

A component is an independent and reusable piece of UI used to build React applications.

---

# Summary

- React is a JavaScript library.
- React helps build user interfaces.
- Everything in React revolves around components.
- Components make applications reusable and maintainable.
- React is the foundation for modern frontend development.
