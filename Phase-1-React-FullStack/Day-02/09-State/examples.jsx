/*
=========================================
REACT STATE
=========================================
*/


// =========================================
// Example 1 - Basic State
// =========================================

import { useState } from "react";

function Counter() {

    const [count, setCount] =
        useState(0);

    return (
        <div>

            <h2>{count}</h2>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>

        </div>
    );

}


/*
Initial Output:

0

Button Click

1

2

3
*/


// =========================================
// Example 2 - Decrement
// =========================================

function CounterApp() {

    const [count, setCount] =
        useState(0);

    return (

        <div>

            <h2>{count}</h2>

            <button
                onClick={() =>
                    setCount(count + 1)}
            >
                +
            </button>

            <button
                onClick={() =>
                    setCount(count - 1)}
            >
                -
            </button>

        </div>

    );

}


/*
Output:

0

+ Click = 1

- Click = 0
*/


// =========================================
// Example 3 - Text State
// =========================================

function Welcome() {

    const [name, setName] =
        useState("Harsha");

    return (
        <h1>
            Hello {name}
        </h1>
    );

}


/*
Output:

Hello Harsha
*/


// =========================================
// Example 4 - Input State
// =========================================

function UserInput() {

    const [name, setName] =
        useState("");

    return (

        <div>

            <input
                value={name}
                onChange={(event) =>
                    setName(
                        event.target.value
                    )
                }
            />

            <h2>
                {name}
            </h2>

        </div>

    );

}


/*
Typing:

Harsha

Output:

Harsha
*/


// =========================================
// Example 5 - Multiple States
// =========================================

function Employee() {

    const [name, setName] =
        useState("Harsha");

    const [role, setRole] =
        useState("Developer");

    return (

        <div>

            <h2>{name}</h2>

            <h3>{role}</h3>

        </div>

    );

}


/*
Output:

Harsha

Developer
*/


/*
=========================================

KEY TAKEAWAYS

1. State stores changing data.
2. useState() creates state.
3. State updates trigger re-render.
4. State makes UI dynamic.
5. Components can have multiple states.
6. State is different from Props.

=========================================
*/