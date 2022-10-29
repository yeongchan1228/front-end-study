import { useState, useEffect } from "react";

const useTitle = (value) => {
  const [title, setTitle] = useState(value);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

function UseTitleEx() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Main"), 3000);
  return <div></div>;
}

export default UseTitleEx;
