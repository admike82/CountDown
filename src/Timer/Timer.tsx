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
  primary: string;
  secondary: string;
  message: string;
  blink: boolean;
  audio: boolean;
};

function Timer({
  initMinutes,
  initSeconds,
  message,
  primary,
  secondary,
  blink,
  audio,
}: propsType) {
  const [minutes, setMinutes] = useState(initMinutes);
  const [seconds, setseconds] = useState(initSeconds);
  const intervalRef = useRef<number>(0);

  const urlSong = new URL("/Audio/Audio.mp3", import.meta.url);
  const sound = new Audio(urlSong.href);

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
  }, [initMinutes, initSeconds]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalRef.current);
      if (audio) {
        sound.play();
      }
    }
  }, [minutes, seconds, audio]);

  return (
    <div className="timer-container" style={{ color: primary }}>
      {minutes === 0 && seconds === 0 ? (
        <div className={`start`}>
          <span className={`message ${blink ? "blink" : ""}`}>{message}</span>
        </div>
      ) : (
        <CircularProgressbarWithChildren
          value={initMinutes * 60 + initSeconds - (minutes * 60 + seconds)}
          maxValue={initMinutes * 60 + initSeconds}
          strokeWidth={5}
          styles={buildStyles({
            pathColor: primary,
            trailColor: secondary,
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
