import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <h2>{count}</h2>;
}

export default Counter;