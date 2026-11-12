/*
=========================================
SPREAD OPERATOR (...)
Day 01 - JavaScript ES6 Fundamentals
=========================================
*/


// =========================================
// Example 1 - Expanding Array Elements
// =========================================

const numbers = [1, 2, 3];

console.log(...numbers);

// Output:
// 1 2 3



// =========================================
// Example 2 - Copying Arrays
// =========================================

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

// Output:
// [1,2,3]
// [1,2,3]



// =========================================
// Example 3 - Proving New Array Created
// =========================================

const original = [1, 2, 3];

const copy = [...original];

copy.push(4);

console.log(original);
console.log(copy);

// Output:
// [1,2,3]
// [1,2,3,4]



// =========================================
// Example 4 - Merging Arrays
// =========================================

const first = [1, 2];
const second = [3, 4];

const merged = [...first, ...second];

console.log(merged);

// Output:
// [1,2,3,4]



// =========================================
// Example 5 - Adding Item at End
// =========================================

const nums = [1, 2, 3];

const updatedNums = [...nums, 4];

console.log(updatedNums);

// Output:
// [1,2,3,4]



// =========================================
// Example 6 - Adding Item at Beginning
// =========================================

const updatedNumbers = [0, ...nums];

console.log(updatedNumbers);

// Output:
// [0,1,2,3]



// =========================================
// Example 7 - Copying Objects
// =========================================

const user = {
    name: "Harsha",
    role: "Developer"
};

const copiedUser = {
    ...user
};

console.log(copiedUser);

// Output:
// { name: 'Harsha', role: 'Developer' }



// =========================================
// Example 8 - Adding New Property
// =========================================

const userWithCity = {
    ...user,
    city: "Mumbai"
};

console.log(userWithCity);

// Output:
// {
//   name: 'Harsha',
//   role: 'Developer',
//   city: 'Mumbai'
// }



// =========================================
// Example 9 - Updating Existing Property
// =========================================

const updatedUser = {
    ...user,
    role: "Senior Developer"
};

console.log(updatedUser);

// Output:
// {
//   name: 'Harsha',
//   role: 'Senior Developer'
// }



// =========================================
// Example 10 - Shallow Copy Example
// =========================================

const employee = {
    name: "Harsha",
    address: {
        city: "Mumbai"
    }
};

const employeeCopy = {
    ...employee
};

employeeCopy.address.city = "Pune";

console.log(employee.address.city);

// Output:
// Pune



// =========================================
// Example 11 - React Style State Update
// =========================================

const users = [
    "Harsha",
    "Anand"
];

const updatedUsers = [
    ...users,
    "Ayesha"
];

console.log(updatedUsers);

// Output:
// ["Harsha","Anand","Ayesha"]



/*
=========================================

KEY TAKEAWAYS

1. Spread expands values.
2. Useful for arrays and objects.
3. Creates a new top-level copy.
4. Performs shallow copy.
5. Great for merging arrays.
6. Commonly used in React state updates.
7. Different from Rest Operator.

=========================================
*/