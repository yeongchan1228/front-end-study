import { useState, useEffect } from "react";

function UseEffectEx() {
  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };

  const onlyOnce = () => console.log("Only Once...");
  useEffect(onlyOnce, []);

  const changeItemMsg = () => console.log("Change Item");
  useEffect(changeItemMsg, [item]);

  return (
    <div>
      {item}
      <div>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
    </div>
  );
}

export default UseEffectEx;
