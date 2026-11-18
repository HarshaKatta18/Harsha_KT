/*
=========================================
COMPONENT LIFECYCLE
=========================================
*/

import { useState, useEffect } from "react";


// =========================================
// Example 1 - Mounting
// =========================================

function MountExample() {

    useEffect(() => {

        console.log(
            "Component Mounted"
        );

    }, []);

    return (
        <h1>Mount Example</h1>
    );

}


/*
Output:

Component Mounted

Runs only once.
*/


// =========================================
// Example 2 - Updating
// =========================================

function UpdateExample() {

    const [count, setCount] =
        useState(0);

    useEffect(() => {
        
        console.log(
            "Count Updated"
        );

    }, [count]);

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

Click Button

Count Updated
*/


// =========================================
// Example 3 - Every Render
// =========================================

function EveryRender() {

    useEffect(() => {

        console.log(
            "Rendered"
        );

    });

    return (
        <h1>Hello React</h1>
    );

}


/*
Runs after every render.
*/


// =========================================
// Example 4 - Cleanup Function
// =========================================

function CleanupExample() {

    useEffect(() => {

        console.log(
            "Mounted"
        );

        return () => {

            console.log(
                "Component Removed"
            );

        };

    }, []);

    return (
        <h1>Cleanup Example</h1>
    );

}


/*
Output:

Mounted

When component is removed:

Component Removed
*/


// =========================================
// Example 5 - Timer Example
// =========================================

function TimerExample() {

    const [count, setCount] =
        useState(0);

    useEffect(() => {

        const timer =
            setInterval(() => {

                setCount(
                    prev => prev + 1
                );

            }, 1000);

        return () =>
            clearInterval(timer);

    }, []);

    return (
        <h2>{count}</h2>
    );

}


/*
Output:

0
1
2
3
...
*/


/*
=========================================

KEY TAKEAWAYS

1. Mounting = Component Created.
2. Updating = State/Props Change.
3. Unmounting = Component Removed.
4. useEffect() manages lifecycle logic.
5. [] = Run Once.
6. [dependency] = Run When Value Changes.
7. Cleanup function handles unmounting.

=========================================
*/