import { useState } from "react";

const useInput = (defaultValue, validator) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    const val = event.target.value;
    if (typeof validator === "function") {
      if (validator(val)) {
        setValue(val);
      }
      return;
    } else {
      setValue(val);
    }
  };
  return { value, onChange };
};

function UseInputEx() {
  const number = useInput("", (value) => {
    if (value.length > 0) {
      const check = /^[0-9]+$/g;
      return check.test(value);
    }
    return true;
  });

  return (
    <div>
      <h1>useInput Example</h1>
      <div>
        <input placeholder="only number..." {...number}></input>
      </div>
    </div>
  );
}

export default UseInputEx;
