# React Event Handling

## Introduction

Event Handling allows React applications to respond to user interactions.

Examples:

- Button Click
- Input Change
- Form Submit
- Mouse Hover
- Keyboard Press

Without Event Handling, applications would be static.

---

# What is an Event?

An event is an action performed by the user.

Examples:

```text
Click
Type
Submit
Hover
Focus
```

---

# Event Handling in React

Example:

```jsx
<button onClick={handleClick}>
    Click Me
</button>
```

When clicked:

```jsx
handleClick()
```

runs.

---

# Basic Click Event

```jsx
function handleClick() {
    alert("Button Clicked");
}
```

Usage:

```jsx
<button onClick={handleClick}>
    Click
</button>
```

---

# Inline Event Handler

Example:

```jsx
<button
    onClick={() => console.log("Clicked")}
>
    Click
</button>
```

Useful for small actions.

---

# Event Naming

HTML:

```html
onclick
```

React:

```jsx
onClick
```

Notice:

CamelCase naming.

---

# Common React Events

## Click Event

```jsx
onClick
```

---

## Change Event

```jsx
onChange
```

---

## Submit Event

```jsx
onSubmit
```

---

## Mouse Events

```jsx
onMouseEnter
onMouseLeave
```

---

## Keyboard Events

```jsx
onKeyDown
onKeyUp
```

---

# Handling Input

Example:

```jsx
<input
    onChange={handleChange}
/>
```

Whenever the value changes:

```jsx
handleChange()
```

runs.

---

# Event Object

React automatically provides an event object.

Example:

```jsx
function handleChange(event) {

    console.log(event.target.value);

}
```

Input:

```text
Harsha
```

Output:

```text
Harsha
```

---

# Form Submit

Example:

```jsx
function handleSubmit(event) {

    event.preventDefault();

    console.log("Submitted");

}
```

---

# Why preventDefault?

Without:

```jsx
event.preventDefault();
```

the page refreshes after form submission.

React applications usually prevent this behavior.

---

# Passing Arguments

Example:

```jsx
<button
    onClick={() =>
        showMessage("Harsha")
    }
>
    Click
</button>
```

Function:

```jsx
function showMessage(name) {

    alert(name);

}
```

---

# Event Handling + State

Common pattern:

```jsx
const [count, setCount] =
    useState(0);
```

Button:

```jsx
<button
    onClick={() =>
        setCount(count + 1)
    }
>
    Increment
</button>
```

---

# Real World Examples

Events are used for:

- Login Forms
- Search Inputs
- Buttons
- Shopping Cart Actions
- Employee Forms
- Filters

---

# Interview Questions

## What is Event Handling?

React Event Handling allows components to respond to user interactions.

---

## Why do we use preventDefault()?

To stop default browser behavior such as page refresh during form submission.

---

## How are React events named?

Using camelCase.

Example:

```jsx
onClick
onChange
onSubmit
```

---

# Summary

- Event Handling responds to user actions.
- React uses camelCase event names.
- Event object provides information about the event.
- Event Handling is often combined with State.
- Common events are onClick, onChange and onSubmit.