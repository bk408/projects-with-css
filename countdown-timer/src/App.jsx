import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive || (minutes === 0 && seconds === 0)) {
      return; // Do nothing if not active or time is up
    }

    const timer = setInterval(() => {
      setSecond((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              clearInterval(timer); // Stop the timer
              setIsActive(false); // Deactivate the timer
              return 0;
            }
            return prevMinutes - 1;
          });
          return 59; // Reset seconds to 59 if minutes are decremented
        }
        return prevSeconds - 1;
      });
    }, 500);

    return () => clearInterval(timer); // Cleanup interval on component unmount or effect re-run
  }, [isActive, minutes, seconds]);

   const handleBtn = () => {
     setIsActive(true); // Start the countdown
   };

  return (
    <>
      <h2>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h2>
      <button onClick={handleBtn}>Start</button>
    </>
  );
}

export default App;
