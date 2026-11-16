/*
=========================================
REACT FUNDAMENTALS
=========================================
*/


// Simple React Component

function Welcome() {
    return <h1>Hello Harsha</h1>;
}


// Another Component

function Header() {
    return <h2>Employee Portal</h2>;
}


// Main Component

function App() {

    return (
        <div>

            <Header />

            <Welcome />

        </div>
    );

}


/*
Expected UI:

Employee Portal

Hello Harsha

*/


/*
KEY TAKEAWAYS

1. React applications are built using components.
2. Components are reusable.
3. Components return JSX.
4. Component names start with capital letters.
5. App component is usually the root component.

*/