import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h3>Timer</h3>
      <h1>{time} sec</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => { setTime(0); setRunning(false); }}>
        Reset
      </button>
    </div>
  );
}

export default Timer;