# React Props

## Introduction

Props stands for Properties.

Props are used to pass data from a Parent Component to a Child Component.

Think of Props as function arguments for React components.

---

# Why Props?

Without Props:

```jsx
function Welcome() {
    return <h1>Hello Harsha</h1>;
}
```

The component always displays the same value.

---

With Props:

```jsx
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}
```

Usage:

```jsx
<Welcome name="Harsha" />
<Welcome name="Anand" />
```

Output:

```text
Hello Harsha

Hello Anand
```

The component becomes reusable.

---

# Props Flow

React follows one-way data flow.

```text
Parent Component
        ↓
      Props
        ↓
Child Component
```

Data always moves from Parent to Child.

---

# Basic Props Example

Child Component:

```jsx
function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}
```

Parent Component:

```jsx
function App() {
    return <Welcome name="Harsha" />;
}
```

Output:

```text
Hello Harsha
```

---

# Multiple Props

Example:

```jsx
function Employee(props) {
    return (
        <h2>
            {props.name} - {props.role}
        </h2>
    );
}
```

Usage:

```jsx
<Employee
    name="Harsha"
    role="Developer"
/>
```

Output:

```text
Harsha - Developer
```

---

# Destructuring Props

Instead of:

```jsx
function Welcome(props) {
    return <h1>{props.name}</h1>;
}
```

Use:

```jsx
function Welcome({ name }) {
    return <h1>{name}</h1>;
}
```

Cleaner and preferred.

---

# Default Props Concept

Example:

```jsx
function Welcome({ name = "Guest" }) {
    return <h1>Hello {name}</h1>;
}
```

Usage:

```jsx
<Welcome />
```

Output:

```text
Hello Guest
```

---

# Props are Read-Only

Props should never be modified.

Wrong:

```jsx
props.name = "Anand";
```

React treats props as immutable.

---

# Parent to Child Communication

Example:

```jsx
function Employee({ name }) {
    return <h2>{name}</h2>;
}

function App() {

    return (
        <Employee name="Harsha" />
    );

}
```

Parent sends data.

Child receives data.

---

# Real World Example

Imagine a User Card.

Component:

```jsx
function UserCard({ name, role }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );

}
```

Usage:

```jsx
<UserCard
    name="Harsha"
    role="Developer"
/>

<UserCard
    name="Anand"
    role="Tester"
/>
```

Same component, different data.

---

# React Connection

Props make components reusable.

Without Props:

```jsx
UserCard1
UserCard2
UserCard3
```

With Props:

```jsx
<UserCard />
```

used many times with different values.

---

# Interview Questions

## What are Props?

Props are read-only inputs passed from a parent component to a child component.

---

## Why do we use Props?

Props help create reusable and dynamic components.

---

## Can Props be modified?

No. Props are immutable and should be treated as read-only.

---

## What is Props Destructuring?

Extracting values directly from props.

Example:

```jsx
function Welcome({ name }) {
    return <h1>{name}</h1>;
}
```

---

# Summary

- Props stands for Properties.
- Props pass data from Parent to Child.
- Props are read-only.
- Props improve reusability.
- Props support destructuring.
- React follows one-way data flow.