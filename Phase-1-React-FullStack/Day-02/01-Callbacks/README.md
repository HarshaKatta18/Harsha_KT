# Callbacks in JavaScript

## What is a Callback?

A callback is a function that is passed as an argument to another function and is executed later.

Simply put:

> A function can be treated like a value and sent to another function to be called whenever needed.

---

## Basic Example

```javascript
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Harsha", sayBye);
```

Output:

```javascript
Hello Harsha
Goodbye!
```

---

## Why Do We Need Callbacks?

JavaScript is single-threaded.

It can execute only one task at a time.

Some operations take time:

- API Calls
- Fetching Data
- Reading Files
- Timers
- Database Queries

Instead of blocking the entire program, JavaScript continues executing other code and calls a callback when the task is complete.

---

## Synchronous Callback

```javascript
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(5, 10, function(result) {
  console.log(result);
});
```

Output:

```javascript
15
```

---

## Asynchronous Callback

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside Callback");
}, 2000);

console.log("End");
```

Output:

```javascript
Start
End
Inside Callback
```

The callback runs after 2 seconds.

---

## Real World Example

Imagine ordering food.

```javascript
orderFood(() => {
  console.log("Food Delivered");
});
```

You don't stand still waiting.

You continue your work and get notified later.

This is exactly how asynchronous callbacks work.

---

## Callback Functions in Array Methods

### forEach()

```javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

Here the arrow function is a callback.

---

## Callback Hell

When multiple asynchronous tasks depend on each other, callbacks become deeply nested.

```javascript
getUser(() => {
  getPosts(() => {
    getComments(() => {
      getLikes(() => {
        console.log("Done");
      });
    });
  });
});
```

This structure becomes difficult to:

- Read
- Debug
- Maintain

This is called:

### Callback Hell

or

### Pyramid of Doom

---

## How Callback Hell Was Solved

JavaScript introduced:

1. Promises
2. Async/Await

These make asynchronous code much easier to read and maintain.

---

## Interview Questions

### What is a callback?

A function passed as an argument to another function and executed later.

### Why are callbacks used?

To handle asynchronous operations.

### What is callback hell?

Deep nesting of callbacks leading to unreadable code.

### How can we avoid callback hell?

Using Promises and Async/Await.