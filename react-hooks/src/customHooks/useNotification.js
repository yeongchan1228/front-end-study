import { useEffect } from "react";

const useNotification = (title, options) => {
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  useEffect(() => {});

  if (!("Notification" in window)) {
    return;
  }

  return fireNotification;
};

function UseNotificationEx() {
  const triggerNotification = useNotification("Hellooo", {
    body: "This is Test..",
  });
  return (
    <div>
      <button onClick={triggerNotification}>Send Notification</button>
    </div>
  );
}

export default UseNotificationEx;
