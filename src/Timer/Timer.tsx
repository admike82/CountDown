import { useEffect, useRef, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

type propsType = {
  initMinutes: number;
  initSeconds: number;
  message: string | null
};

function Timer({ initMinutes, initSeconds, message }: propsType) {
  const [minutes, setMinutes] = useState(initMinutes);
  const [seconds, setseconds] = useState(initSeconds);
  const intervalRef = useRef<number>();

  useEffect(() => {
    let m = initMinutes;
    let s = initSeconds;
    const timer = setInterval(() => {
      if (s === 0) {
        s = 59;
        m--;
      } else {
        s--;
      }
      setMinutes(m);
      setseconds(s);
    }, 1000);
    intervalRef.current = timer;
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalRef.current);
    }
  }, [minutes, seconds]);

  return (
    <div className="timer-container">
      {minutes === 0 && seconds === 0 ? (
        <div className="start">
          <span className="message">{message || "Let's go !"}</span>
        </div>
      ) : (
        <CircularProgressbarWithChildren
          value={initMinutes * 60 + initSeconds - (minutes * 60 + seconds)}
          maxValue={initMinutes * 60 + initSeconds}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: "#21eaee",
            trailColor: "#fc4101",
          })}
        >
          <div>
            <span>{minutes}</span>:
            <span>
              {seconds < 10 && "0"}
              {seconds}
            </span>
          </div>
        </CircularProgressbarWithChildren>
      )}
    </div>
  );
}

export default Timer;
