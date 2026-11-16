# JSX (JavaScript XML)

## Introduction

JSX stands for JavaScript XML.

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

Although it looks like HTML, it is actually JSX.

---

# Why JSX?

Without JSX:

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

With JSX:

```jsx
<h1>Hello React</h1>
```

JSX is easier to read and write.

---

# JSX Looks Like HTML

Example:

```jsx
function Welcome() {
    return <h1>Hello Harsha</h1>;
}
```

Output:

```html
<h1>Hello Harsha</h1>
```

---

# JSX is Not HTML

JSX resembles HTML but follows JavaScript rules.

React converts JSX into JavaScript behind the scenes.

Example:

```jsx
<h1>Hello React</h1>
```

is converted internally to:

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

---

# Embedding JavaScript in JSX

JavaScript expressions can be placed inside:

```jsx
{}
```

Example:

```jsx
const name = "Harsha";

function Welcome() {
    return <h1>Hello {name}</h1>;
}
```

Output:

```text
Hello Harsha
```

---

# Expressions in JSX

Example:

```jsx
const a = 10;
const b = 20;

function Sum() {
    return <h1>{a + b}</h1>;
}
```

Output:

```text
30
```

---

# JSX Attributes

HTML:

```html
<input class="box">
```

JSX:

```jsx
<input className="box" />
```

Notice:

```jsx
class → className
```

because class is a JavaScript keyword.

---

# Self Closing Tags

HTML:

```html
<input>
```

JSX:

```jsx
<input />
```

Must be self-closing.

Examples:

```jsx
<img />
<input />
<br />
```

---

# Multiple Lines of JSX

Example:

```jsx
function App() {

    return (

        <div>

            <h1>Employee Portal</h1>

            <p>Welcome User</p>

        </div>

    );

}
```

Parentheses improve readability.

---

# One Parent Element Rule

Wrong:

```jsx
return (
    <h1>Hello</h1>
    <p>Welcome</p>
);
```

Error ❌

---

Correct:

```jsx
return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);
```

---

# React Fragment

Instead of an extra div:

```jsx
return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);
```

Fragment does not create extra HTML elements.

---

# Conditional Rendering Example

```jsx
const isLoggedIn = true;

function App() {
    return (
        <h1>
            {isLoggedIn ? "Welcome" : "Please Login"}
        </h1>
    );
}
```

Output:

```text
Welcome
```

---

# JSX and Components

Components return JSX.

Example:

```jsx
function Header() {
    return <h1>Header</h1>;
}
```

A React component's UI is described using JSX.

---

# Common JSX Rules

✅ Use className instead of class

✅ Wrap multiple elements in one parent

✅ Close tags properly

✅ Use {} for JavaScript expressions

✅ Component names start with uppercase

---

# Interview Questions

## What is JSX?

JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

---

## Why do we use JSX?

JSX makes React code easier to read and write.

---

## Can JavaScript be used inside JSX?

Yes, using curly braces:

```jsx
{expression}
```

---

# Summary

- JSX stands for JavaScript XML.
- JSX looks like HTML but is not HTML.
- JSX allows JavaScript expressions using {}.
- Components return JSX.
- JSX improves readability and developer experience.