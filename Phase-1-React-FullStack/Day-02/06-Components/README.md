# React Components

## Introduction

Components are the building blocks of React applications.

Everything in React is built using components.

Think of a component as a reusable piece of UI.

Examples:

- Header
- Navbar
- Footer
- Search Bar
- User Card
- Product Card

---

# What is a Component?

A component is a JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {
    return <h1>Hello React</h1>;
}
```

React renders the returned UI on the screen.

---

# Why Components?

Imagine building YouTube.

Instead of one giant file:

```text
YouTube
```

React breaks it into:

```text
YouTube

├── Header
├── Sidebar
├── SearchBar
├── VideoCard
└── Footer
```

Each part becomes a component.

---

# Functional Components

Modern React uses Functional Components.

Example:

```jsx
function Header() {
    return <h1>Employee Portal</h1>;
}
```

This is simply a JavaScript function that returns JSX.

---

# Component Naming Rules

✅ Start with Capital Letter

```jsx
function Header() {}
```

```jsx
function UserCard() {}
```

❌ Avoid lowercase

```jsx
function header() {}
```

React treats lowercase tags as HTML elements.

---

# Reusable Components

One component can be used multiple times.

Example:

```jsx
function Greeting() {
    return <h3>Welcome User</h3>;
}
```

Usage:

```jsx
<Greeting />
<Greeting />
<Greeting />
```

Output:

```text
Welcome User

Welcome User

Welcome User
```

---

# Nesting Components

Components can contain other components.

Example:

```jsx
function Header() {
    return <h1>Header</h1>;
}

function App() {
    return (
        <div>
            <Header />
        </div>
    );
}
```

---

# Component Tree

React applications form a tree structure.

```text
App
│
├── Header
├── Sidebar
│
├── ProductList
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
│
└── Footer
```

This is called a Component Tree.

---

# Root Component

Most React applications start from:

```jsx
App.jsx
```

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}
```

App is typically the root component.

---

# Real World Example

Employee Portal

```text
Employee Portal

├── Navbar
├── Employee Table
├── Search Box
├── Filters
└── Footer
```

Each section can be created as a separate component.

---

# Benefits of Components

## Reusability

Write once, use many times.

## Maintainability

Small files are easier to manage.

## Scalability

Applications grow without becoming messy.

## Readability

UI structure becomes easier to understand.

---

# Interview Questions

## What is a React Component?

A reusable piece of UI created using a JavaScript function that returns JSX.

## Why do we use Components?

Components improve reusability, maintainability, and scalability.

## What is a Functional Component?

A JavaScript function that returns JSX.

---

# Summary

- Components are the building blocks of React.
- Components are JavaScript functions.
- Components return JSX.
- Component names should start with a capital letter.
- Components can be reused and nested.
- App component is usually the root component.