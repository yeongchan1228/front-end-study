import { useState } from "react";

function UseStateEx() {
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div>
      <h1>{item}</h1>
      <div>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
    </div>
  );
}

export default UseStateEx;
