/*
=========================================
JSX EXAMPLES
=========================================
*/


// =========================================
// Example 1 - Basic JSX
// =========================================

function Welcome() {
    return <h1>Hello React</h1>;
}

/*
Output:

Hello React
*/


// =========================================
// Example 2 - JavaScript Inside JSX
// =========================================

const name = "Harsha";

function Greeting() {
    return <h1>Hello {name}</h1>;
}

/*
Output:

Hello Harsha
*/


// =========================================
// Example 3 - Expressions
// =========================================

function Addition() {
    return <h1>{10 + 20}</h1>;
}

/*
Output:

30
*/


// =========================================
// Example 4 - Multiple Elements
// =========================================

function EmployeeInfo() {

    return (
        <div>
            <h1>Employee Portal</h1>
            <p>Welcome User</p>
        </div>
    );

}

/*
Output:

Employee Portal

Welcome User
*/


// =========================================
// Example 5 - Fragment
// =========================================

function FragmentExample() {

    return (
        <>
            <h1>Header</h1>
            <p>Content</p>
        </>
    );

}

/*
Output:

Header

Content
*/


// =========================================
// Example 6 - Conditional Rendering
// =========================================

const isLoggedIn = true;

function LoginStatus() {

    return (
        <h1>
            {isLoggedIn
                ? "Welcome User"
                : "Please Login"}
        </h1>
    );

}

/*
Output:

Welcome User
*/


// =========================================
// Example 7 - JSX Attributes
// =========================================

function InputBox() {
    return (
        <input
            className="textbox"
            placeholder="Enter Name"
        />
    );
}

/*
Output:

Input Box
*/


// =========================================
// Example 8 - Combining Components
// =========================================

function Header() {
    return <h1>Employee Portal</h1>;
}

function App() {

    return (
        <>
            <Header />
            <Greeting />
        </>
    );

}

/*
Output:

Employee Portal

Hello Harsha
*/


/*
=========================================

KEY TAKEAWAYS

1. JSX looks like HTML.
2. JSX is actually JavaScript syntax.
3. Use {} for JavaScript expressions.
4. Components return JSX.
5. Multiple elements need one parent.
6. Fragments avoid unnecessary divs.

=========================================
*/