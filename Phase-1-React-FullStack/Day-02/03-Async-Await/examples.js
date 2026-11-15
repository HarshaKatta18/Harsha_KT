// =====================================
// ASYNC / AWAIT IN JAVASCRIPT
// =====================================


// -------------------------------------
// Example 1: async Function
// -------------------------------------

async function greet() {
  return "Hello Harsha";
}

greet().then(console.log);

/*
OUTPUT:
Hello Harsha

An async function always returns a Promise.
*/


// -------------------------------------
// Example 2: Basic await Example
// -------------------------------------

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

/*
OUTPUT:
Data Received

await waits until promise is resolved.
*/


// -------------------------------------
// Example 3: Error Handling
// -------------------------------------

function fetchUser() {
  return new Promise((resolve, reject) => {

    const success = false;

    if (success) {
      resolve("User Found");
    } else {
      reject("User Not Found");
    }

  });
}

async function getUser() {
  try {

    const user = await fetchUser();

    console.log(user);

  } catch (error) {

    console.log(error);

  }
}

getUser();

/*
OUTPUT:
User Not Found

Errors from promises can be handled
using try/catch.
*/


// -------------------------------------
// Example 4: Multiple await Calls
// -------------------------------------

function getUsers() {
  return Promise.resolve("Users Loaded");
}

function getPosts() {
  return Promise.resolve("Posts Loaded");
}

async function loadData() {

  const users = await getUsers();

  const posts = await getPosts();

  console.log(users);
  console.log(posts);

}

loadData();

/*
OUTPUT:
Users Loaded
Posts Loaded

Calls execute sequentially.
*/


// -------------------------------------
// Example 5: Promise.all with await
// -------------------------------------

async function loadParallelData() {

  const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
  ]);

  console.log(users);
  console.log(posts);

}

loadParallelData();

/*
OUTPUT:
Users Loaded
Posts Loaded

Both promises execute together.

Faster than sequential execution.
*/


// -------------------------------------
// Example 6: Event Loop Understanding
// -------------------------------------

console.log("Start");

async function test() {

  await Promise.resolve();

  console.log("Inside Async Function");

}

test();

console.log("End");

/*
OUTPUT:

Start
End
Inside Async Function

WHY?

await sends remaining code
to the Microtask Queue.

The synchronous code completes first.
*/


// -------------------------------------
// Example 7: Real World API Call
// -------------------------------------

async function getUsersFromAPI() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

  } catch (error) {

    console.log(error);

  }

}

// Uncomment to test
// getUsersFromAPI();


// -------------------------------------
// Example 8: Forgetting await
// -------------------------------------

async function example() {

  const result = fetchData();

  console.log(result);

}

example();

/*
OUTPUT:

Promise { <pending> }

Without await,
you receive the Promise object,
not the resolved value.
*/