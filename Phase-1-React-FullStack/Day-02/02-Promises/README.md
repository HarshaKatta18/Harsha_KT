# Promises in JavaScript

## What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

Think of a Promise as:

> "I promise to give you a result sometime in the future."

Before Promises, callbacks were heavily used, which often resulted in Callback Hell.

Promises provide a cleaner and more maintainable approach.

---

## Promise Lifecycle

A Promise has three states:

### 1. Pending

Initial state.

```javascript
Pending
```

The operation is still running.

---

### 2. Fulfilled

Operation completed successfully.

```javascript
resolve("Success");
```

---

### 3. Rejected

Operation failed.

```javascript
reject("Error");
```

---

## Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});
```

---

## Consuming a Promise

```javascript
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

## resolve()

Used when operation succeeds.

```javascript
resolve("Data Fetched");
```

---

## reject()

Used when operation fails.

```javascript
reject("Network Error");
```

---

## .then()

Runs when promise is fulfilled.

```javascript
promise.then((result) => {
  console.log(result);
});
```

---

## .catch()

Runs when promise is rejected.

```javascript
promise.catch((error) => {
  console.log(error);
});
```

---

## .finally()

Runs regardless of success or failure.

```javascript
promise.finally(() => {
  console.log("Completed");
});
```

---

## Promise Chaining

The output of one `.then()` can be passed to the next.

```javascript
Promise.resolve(10)
  .then((num) => num * 2)
  .then((num) => num + 5)
  .then((result) => console.log(result));
```

Output:

```javascript
25
```

---

## Why Promise Chaining?

Instead of:

```javascript
task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});
```

We can write:

```javascript
task1()
  .then(task2)
  .then(task3)
  .then(task4);
```

Much cleaner and easier to maintain.

---

## Promise Methods

### Promise.all()

Waits for all promises.

```javascript
Promise.all([p1, p2, p3]);
```

If even one fails, entire promise fails.

---

### Promise.race()

Returns whichever promise settles first.

```javascript
Promise.race([p1, p2]);
```

---

### Promise.allSettled()

Waits for all promises.

Returns success and failure results.

```javascript
Promise.allSettled([p1, p2]);
```

---

### Promise.any()

Returns first successful promise.

```javascript
Promise.any([p1, p2]);
```

Ignores rejected promises.

---

## Real World Example

API Call

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Most React applications use Promises when making API requests.

---

## Callback vs Promise

### Callback

```javascript
getUser(() => {
  getPosts(() => {
    getComments(() => {
      console.log("Done");
    });
  });
});
```

### Promise

```javascript
getUser()
  .then(getPosts)
  .then(getComments)
  .then(() => console.log("Done"));
```

Promise code is easier to read.

---

## Interview Questions

### What is a Promise?

An object that represents the eventual success or failure of an asynchronous operation.

### What are Promise states?

- Pending
- Fulfilled
- Rejected

### Difference between resolve and reject?

resolve → success

reject → failure

### Difference between Promise.all() and Promise.race()?

Promise.all() waits for all promises.

Promise.race() returns the first settled promise.

### Why were Promises introduced?

To solve Callback Hell and improve asynchronous code readability.