import "./App.css";
import Header from "./components/header";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="App">
      <button
        type="button"
        className="menueToggleButton"
        onClick={() => setIsActive(!isActive)}
      >
        show Menue bar
      </button>

      {isActive ? (
        <div>
          <h1>R photos</h1>
        </div>
      ) : (
        <Header />
      )}
    </div>
  );
}

export default App;
