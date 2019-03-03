import React, { useState } from "react";
import { Button } from "@blueprintjs/core";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <b>Count:</b> <span data-testid="count">{count}</span>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
}
