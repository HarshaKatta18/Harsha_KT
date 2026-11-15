// =========================================
// CALLBACKS IN JAVASCRIPT
// =========================================

// -----------------------------------------
// Example 1: Basic Callback
// -----------------------------------------

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Harsha", sayBye);

/*
OUTPUT:
Hello Harsha
Goodbye!
*/

// -----------------------------------------
// Example 2: Callback with Calculation
// -----------------------------------------

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));

/*
OUTPUT:
30
200
*/

// -----------------------------------------
// Example 3: Asynchronous Callback
// -----------------------------------------

console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

/*
OUTPUT:

Start
End
Executed after 2 seconds

WHY?

JavaScript sends setTimeout to Web APIs.
Timer runs separately.
After timer finishes, callback enters callback queue.
Event Loop pushes it to Call Stack.
Then callback executes.
*/

// -----------------------------------------
// Example 4: Array Callback
// -----------------------------------------

const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});

/*
OUTPUT:
1
2
3

forEach expects a callback function.
forEach calls the callback for each element.
*/

// -----------------------------------------
// Example 5: Simulated Callback Hell
// -----------------------------------------

setTimeout(() => {
  console.log("Task 1 Completed");

  setTimeout(() => {
    console.log("Task 2 Completed");

    setTimeout(() => {
      console.log("Task 3 Completed");

      setTimeout(() => {
        console.log("Task 4 Completed");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

/*
This nesting pattern is called:

CALLBACK HELL
or
PYRAMID OF DOOM

Problems:
- Difficult to read
- Difficult to maintain
- Difficult to debug

Promises were introduced to solve this problem.
*/