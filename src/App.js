import Watch from "./components/watch.js";
import Stopwatch from "./components/stopwatch.js";
import { useState } from "react";
function App() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);

  const showWatch = (event) => {
    setIsShown((current) => !current);
    setIsShown2((current) => !current);
    setIsActive((current) => !current);
    setIsActive2((current) => !current);
  };
  const showStopWatch = (event) => {
    setIsShown2((current) => !current);
    setIsShown((current) => !current);
    setIsActive2((current) => !current);
    setIsActive((current) => !current);
  };

  return (
    <div className="app">
      {!isShown2 && isShown && <Watch />}
      {!isShown && isShown2 && <Stopwatch />}

      <div className="btn">
        <button
          className={!isActive2 && isActive ? "active-app app-btn" : "app-btn"}
          onClick={showWatch}
        >
          Watch
        </button>
        <button
          className={!isActive && isActive2 ? "active-app app-btn" : "app-btn"}
          onClick={showStopWatch}
        >
          Stop-Watch
        </button>
      </div>
    </div>
  );
}

export default App;
