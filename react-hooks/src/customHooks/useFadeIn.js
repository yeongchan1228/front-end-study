import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 2) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });

  return { ref: element, style: { opacity: 0 } };
};

function UseFadeInEx() {
  const test = useFadeIn(3, 5);
  return (
    <div>
      <p {...test}>Hello</p>
    </div>
  );
}

export default UseFadeInEx;
