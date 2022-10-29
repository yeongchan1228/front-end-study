import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

function UseScrollEx() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <p style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>
        Hello
      </p>
    </div>
  );
}

export default UseScrollEx;
