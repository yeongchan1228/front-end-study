import { useEffect } from "react";

const useBeforeLeave = (func) => {
  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        func();
      }
    };
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function UseBeforeLeaveEx() {
  useBeforeLeave(() => console.log("mouse leave..."));

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default UseBeforeLeaveEx;
