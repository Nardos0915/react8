import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State to hold the count value
  const [isRunning, setIsRunning] = useState(false); // State to determine if the counter is running

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={startCounter} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopCounter} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Counter;
