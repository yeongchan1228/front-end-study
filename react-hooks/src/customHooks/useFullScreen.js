import { useRef } from "react";
import image1 from "./images/image1.jpg";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return { element, triggerFull };
};

function UseFullScreenEx() {
  const { element, triggerFull } = useFullScreen();
  return (
    <div>
      <img ref={element} src={image1}></img>
      <button onClick={triggerFull}>FullScreen</button>
    </div>
  );
}

export default UseFullScreenEx;
