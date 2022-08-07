import { useEffect, useState } from "react";

function Hello() {
  function destroyedFn() {
    console.log("destroyed.");
  }
  function effectFn() {
    console.log("created.");
    return destroyedFn;
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
