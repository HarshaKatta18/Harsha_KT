/*
=========================================
REACT COMPONENTS
=========================================
*/


// =========================================
// Example 1 - Simple Component
// =========================================

function Welcome() {
    return <h1>Hello Harsha</h1>;
}


/*
Output:

Hello Harsha
*/


// =========================================
// Example 2 - Another Component
// =========================================

function Header() {
    return <h2>Employee Portal</h2>;
}


/*
Output:

Employee Portal
*/


// =========================================
// Example 3 - Multiple Components
// =========================================

function Footer() {
    return <h3>Footer Section</h3>;
}


/*
Output:

Footer Section
*/


// =========================================
// Example 4 - Using Components Together
// =========================================

function App() {

    return (
        <div>

            <Header />

            <Welcome />

            <Footer />

        </div>
    );

}


/*
Expected Output:

Employee Portal

Hello Harsha

Footer Section
*/


// =========================================
// Example 5 - Reusable Component
// =========================================

function Greeting() {
    return <p>Welcome User</p>;
}


/*
Usage:

<Greeting />
<Greeting />
<Greeting />


Output:

Welcome User

Welcome User

Welcome User
*/


// =========================================
// Example 6 - Nested Components
// =========================================

function Navbar() {
    return <h2>Navigation Bar</h2>;
}

function Content() {
    return <p>Main Content Area</p>;
}

function MainApp() {

    return (
        <div>

            <Navbar />

            <Content />

        </div>
    );

}


/*
Output:

Navigation Bar

Main Content Area
*/


/*
=========================================

KEY TAKEAWAYS

1. Components are reusable UI blocks.
2. Components are JavaScript functions.
3. Components return JSX.
4. Component names start with capital letters.
5. Components can contain other components.
6. App is usually the root component.

=========================================
*/