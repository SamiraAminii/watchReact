import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [theArray, setTheArray] = useState([]);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  function lab() {
    const time = document.querySelector(".content");

    setTheArray(theArray.concat(time.innerText));
    // console.log(theArray);
  }
  function reset() {
    // debugger;
    setTime(0);
    const newList = theArray.filter((item, index) => item === index);

    setTheArray(newList);
  }

  return (
    <div className="clock">
      <h2 className="head">Stop Watch</h2>
      <div className="content">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="stop-watch--btn">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={reset}>Reset</button>
        <button onClick={lab}>Lab</button>
      </div>
      <ul>
        {theArray.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
