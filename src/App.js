import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={decrement}>- </button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
