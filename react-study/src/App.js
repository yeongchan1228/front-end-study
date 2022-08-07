// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("I run all the time.");

  const iRunOnlyOne = () => {
    console.log("I run only once.");
  };

  useEffect(iRunOnlyOne, []); // 딱 한 번만
  useEffect(() => {
    // keyword에 변화가 발생했을 때
    if (keyword !== "" && keyword.length > 5)
      console.log(
        "I run when 'keyword' changes and keyword not null and keyword > 5"
      );
  }, [keyword]);
  useEffect(() => console.log("I run when 'counter' changes"), [counter]);
  useEffect(() => console.log("I run when keyword & counter changes"));
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
