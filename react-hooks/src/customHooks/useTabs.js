import { useState } from "react";

const tabInfos = [
  {
    name: "Tab 1",
    content: "Tab 1 \n Contents...",
  },
  {
    name: "Tab 2",
    content: "Tab 2 \n Contents...",
  },
];

const useTabs = (defaultTab, tabInfos) => {
  const [currentIndex, setCurrentIndex] = useState(defaultTab);
  if (!tabInfos || !Array.isArray(tabInfos)) {
    return;
  }

  return {
    currentContent: tabInfos[currentIndex],
    setCurrentIndex: setCurrentIndex,
  };
};

function UseTabsEx() {
  const { currentContent, setCurrentIndex } = useTabs(0, tabInfos);
  return (
    <div>
      {tabInfos.map((tab, index) => (
        <button onClick={() => setCurrentIndex(index)}>{tab.name}</button>
      ))}
      <div>{currentContent.content}</div>
    </div>
  );
}

export default UseTabsEx;
