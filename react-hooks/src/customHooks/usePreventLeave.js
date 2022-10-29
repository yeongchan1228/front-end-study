const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
};

function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

export default UsePreventLeave;
