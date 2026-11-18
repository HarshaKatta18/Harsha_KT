import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Mounted");
  }, []);

  return <h1>useEffect Example</h1>;
}

export default Example;