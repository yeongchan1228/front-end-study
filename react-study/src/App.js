import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back to react!</h1>

      <Button text="button" />
    </div>
  );
}

export default App;
