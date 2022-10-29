const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (!onCancel || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      if (onConfirm) {
        onConfirm();
      }
    } else {
      if (onCancel) {
        onCancel();
      }
    }
  };

  return confirmAction;
};

function UseConfirmEx() {
  const testFunc = useConfirm("Are you Sure?", () => {
    console.log("action...");
  });
  return (
    <div>
      <button onClick={testFunc}>Button</button>
    </div>
  );
}

export default UseConfirmEx;
