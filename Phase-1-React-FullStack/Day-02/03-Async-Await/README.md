# Async/Await in JavaScript

## What is Async/Await?

Async/Await is a modern way of handling asynchronous operations in JavaScript.

It is built on top of Promises and makes asynchronous code look more like synchronous code.

Before Async/Await:

```javascript
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

After Async/Await:

```javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

The second approach is cleaner and easier to read.

---

## async Keyword

The async keyword is used before a function.

```javascript
async function greet() {
  return "Hello";
}
```

An async function always returns a Promise.

```javascript
greet().then(console.log);
```

Output:

```javascript
Hello
```

Equivalent to:

```javascript
function greet() {
  return Promise.resolve("Hello");
}
```

---

## await Keyword

The await keyword pauses execution until a Promise settles.

```javascript
const result = await promise;
```

await can only be used:

- Inside async functions
- Inside ES Modules (top-level await)

---

## Basic Example

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
```

Output after 2 seconds:

```javascript
Data Received
```

---

## Error Handling

Use try...catch.

```javascript
async function getUser() {
  try {
    const data = await fetchData();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

Without try/catch, errors may go unhandled.

---

## Multiple await Calls

```javascript
async function loadData() {
  const users = await getUsers();
  const posts = await getPosts();

  console.log(users);
  console.log(posts);
}
```

Execution:

```text
Users -> Wait
Posts -> Wait
Done
```

The second request waits for the first.

---

## Parallel Execution Using Promise.all()

```javascript
async function loadData() {
  const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
  ]);

  console.log(users);
  console.log(posts);
}
```

Benefits:

- Faster
- Requests run simultaneously

This is commonly used in React applications.

---

## Async/Await vs Promises

### Promise Style

```javascript
fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### Async/Await Style

```javascript
try {
  const data = await fetchData();
  console.log(data);
} catch(error) {
  console.log(error);
}
```

Both do the same thing.

Async/Await is more readable.

---

## Event Loop Relationship

await does not block JavaScript.

It only pauses the current async function.

Other code continues running.

```javascript
console.log("Start");

async function test() {
  await Promise.resolve();
  console.log("Inside");
}

test();

console.log("End");
```

Output:

```javascript
Start
End
Inside
```

---

## Common Mistakes

### Forgetting await

```javascript
const data = fetchData();

console.log(data);
```

Output:

```javascript
Promise { <pending> }
```

Correct:

```javascript
const data = await fetchData();
```

---

### Using await Outside async

Wrong:

```javascript
const data = await fetchData();
```

Error:

```javascript
await is only valid in async functions
```

Correct:

```javascript
async function getData() {
  const data = await fetchData();
}
```

---

## Real World Example

API Requests

```javascript
async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  console.log(users);
}
```

This pattern is commonly used in React applications.

---

## Interview Questions

### What is Async/Await?

A cleaner syntax for working with Promises.

### Does async always return a Promise?

Yes.

### Can await be used without async?

No.

### Does await block JavaScript?

No. It only pauses the current async function.

### Is Async/Await faster than Promises?

No.

Async/Await internally uses Promises.

It only improves readability.