import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0); // state variable to store the remaining time on the timer
  const [initialTime, setInitialTime] = useState(0); // state variable to store the initial time set by the user
  const [timerOn, setTimerOn] = useState(false); // state variable to keep track of whether the timer is running or not

  useEffect(() => {
    if (timerOn && timeLeft > 0) { // if timer is on and there is time left
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000); // set a timeout to decrement the timeLeft by 1 second
      return () => clearTimeout(timer); // clear the timeout when the component unmounts or when the timerOn or timeLeft value changes
    } else if (timeLeft === 0) { // if timer has ended
      setTimerOn(false); // stop the timer
      alert("Timer has ended!"); // show an alert to the user that the timer has ended
    }
  }, [timeLeft, timerOn]);

  function handleTimeChange(event) { // event handler to handle changes to the input field for setting the timer duration
    setInitialTime(parseInt(event.target.value) * 60); // convert the value of the input field to minutes and store it in initialTime state variable
  }

  function handleStartTimer() { // event handler to start the timer
    setTimeLeft(initialTime); // set the timeLeft to the initialTime
    setTimerOn(true); // set the timerOn state variable to true to start the timer
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <h2>TIMER</h2>
      <div>
        <label>
          Set Timer (Minutes):
          <input type="number" onChange={handleTimeChange} />
        </label>
      </div>
      <br>
      </br>
      <div>
        <button onClick={handleStartTimer}>Start Timer</button>
      </div>
      <div>
        <p style={{fontSize: "5em", fontWeight: "bold"}}>
          Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60} // display the remaining time in minutes and seconds format
        </p>
      </div>
    </div>
  );
}

export default Timer;
