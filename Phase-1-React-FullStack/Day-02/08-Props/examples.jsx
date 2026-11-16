/*
=========================================
REACT PROPS
=========================================
*/


// =========================================
// Example 1 - Basic Props
// =========================================

function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}


/*
Usage:

<Welcome name="Harsha" />

Output:

Hello Harsha
*/


// =========================================
// Example 2 - Multiple Props
// =========================================

function Employee(props) {

    return (
        <h2>
            {props.name} - {props.role}
        </h2>
    );

}


/*
Usage:

<Employee
    name="Harsha"
    role="Developer"
/>

Output:

Harsha - Developer
*/


// =========================================
// Example 3 - Props Destructuring
// =========================================

function User({ name, city }) {

    return (
        <h2>
            {name} from {city}
        </h2>
    );

}


/*
Usage:

<User
    name="Harsha"
    city="Mumbai"
/>

Output:

Harsha from Mumbai
*/


// =========================================
// Example 4 - Reusable Component
// =========================================

function UserCard({ name, role }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );

}


/*
Usage:

<UserCard
    name="Harsha"
    role="Developer"
/>

<UserCard
    name="Anand"
    role="Tester"
/>


Output:

Harsha
Developer

Anand
Tester
*/


// =========================================
// Example 5 - Default Value
// =========================================

function Greeting({
    name = "Guest"
}) {

    return <h1>Hello {name}</h1>;

}


/*
Usage:

<Greeting />

Output:

Hello Guest
*/


// =========================================
// Example 6 - Parent To Child
// =========================================

function Child({ message }) {
    return <h2>{message}</h2>;
}

function Parent() {

    return (
        <Child
            message="Welcome to React"
        />
    );

}


/*
Output:

Welcome to React
*/


/*
=========================================

KEY TAKEAWAYS

1. Props pass data from Parent to Child.
2. Props make components reusable.
3. Props are read-only.
4. Destructuring is commonly used.
5. React follows one-way data flow.

=========================================
*/