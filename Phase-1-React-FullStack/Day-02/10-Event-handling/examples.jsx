/*
=========================================
REACT EVENT HANDLING
=========================================
*/


// =========================================
// Example 1 - Button Click
// =========================================

function handleClick() {

    console.log("Button Clicked");

}

function ButtonExample() {

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}


/*
Output:

Button Clicked
*/


// =========================================
// Example 2 - Inline Event
// =========================================

function InlineEvent() {

    return (
        <button
            onClick={() =>
                console.log("Inline Click")
            }
        >
            Click
        </button>
    );

}


/*
Output:

Inline Click
*/


// =========================================
// Example 3 - State + Event
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
Output:

0

Click

1

2

3
*/


// =========================================
// Example 4 - Input Event
// =========================================

function InputExample() {

    function handleChange(event) {

        console.log(
            event.target.value
        );

    }

    return (
        <input
            onChange={handleChange}
            placeholder="Enter Name"
        />
    );

}


/*
Input:

Harsha

Console:

Harsha
*/


// =========================================
// Example 5 - Form Submit
// =========================================

function FormExample() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Form Submitted");

    }

    return (

        <form
            onSubmit={handleSubmit}
        >

            <button
                type="submit"
            >
                Submit
            </button>

        </form>

    );

}


/*
Output:

Form Submitted
*/


// =========================================
// Example 6 - Passing Arguments
// =========================================

function showMessage(name) {

    console.log(
        `Hello ${name}`
    );

}

function ArgumentExample() {

    return (
        <button
            onClick={() =>
                showMessage("Harsha")
            }
        >
            Say Hello
        </button>
    );

}


/*
Output:

Hello Harsha
*/


/*
=========================================

KEY TAKEAWAYS

1. React responds to user actions through events.
2. Common events are onClick, onChange and onSubmit.
3. React uses camelCase naming.
4. Event object contains event information.
5. State and Event Handling are commonly used together.

=========================================
*/