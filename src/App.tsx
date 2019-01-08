import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import { double } from "./double";

export const App = observer(() => {
  const counter = useObservable({ value: 0 });

  return (
    <div>
      <div>
        Count: <span data-testid="counter.value">{counter.value}</span> (count x
        2 = {double(counter.value)})
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }
});
