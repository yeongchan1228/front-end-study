import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function UseClickEx() {
  const test = useClick(() => {
    console.log("clicked");
  });
  return (
    <div>
      <p ref={test}>Example</p>
    </div>
  );
}

export default UseClickEx;
