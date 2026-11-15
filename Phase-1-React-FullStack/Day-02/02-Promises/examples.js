// ===================================
// PROMISES IN JAVASCRIPT
// ===================================

// -----------------------------------
// Example 1: Basic Promise
// -----------------------------------

const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Failed to fetch data");
  }

});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
OUTPUT:
Data fetched successfully
*/


// -----------------------------------
// Example 2: Promise with setTimeout
// -----------------------------------

const delayedPromise = new Promise((resolve) => {

  setTimeout(() => {
    resolve("Executed after 2 seconds");
  }, 2000);

});

delayedPromise.then((message) => {
  console.log(message);
});

/*
OUTPUT:
Executed after 2 seconds
*/


// -----------------------------------
// Example 3: Promise Chaining
// -----------------------------------

Promise.resolve(10)
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2:", num);
    return num + 5;
  })
  .then((result) => {
    console.log("Final Result:", result);
  });

/*
OUTPUT:
Step 1: 10
Step 2: 20
Final Result: 25

Each .then() returns a new promise.
*/


// -----------------------------------
// Example 4: Promise.all()
// -----------------------------------

const p1 = Promise.resolve("User Data");
const p2 = Promise.resolve("Posts Data");
const p3 = Promise.resolve("Comments Data");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });

/*
OUTPUT:
[
  'User Data',
  'Posts Data',
  'Comments Data'
]

Waits for all promises.
*/


// -----------------------------------
// Example 5: Promise.race()
// -----------------------------------

const race1 = new Promise((resolve) => {
  setTimeout(() => resolve("Fast API"), 1000);
});

const race2 = new Promise((resolve) => {
  setTimeout(() => resolve("Slow API"), 3000);
});

Promise.race([race1, race2])
  .then((result) => {
    console.log(result);
  });

/*
OUTPUT:
Fast API

The first settled promise wins.
*/


// -----------------------------------
// Example 6: Promise.allSettled()
// -----------------------------------

const promise1 = Promise.resolve("Success");

const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1, promise2])
  .then((result) => {
    console.log(result);
  });

/*
OUTPUT:

[
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Failed' }
]

Useful when we want every result.
*/


// -----------------------------------
// Example 7: Promise.any()
// -----------------------------------

const api1 = Promise.reject("API 1 Failed");

const api2 = Promise.resolve("API 2 Success");

Promise.any([api1, api2])
  .then((result) => {
    console.log(result);
  });

/*
OUTPUT:
API 2 Success

Returns first successful promise.
*/


// -----------------------------------
// Example 8: Using finally()
// -----------------------------------

const request = new Promise((resolve) => {
  resolve("Request Successful");
});

request
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Request Completed");
  });

/*
OUTPUT:
Request Successful
Request Completed

finally() always executes.
*/