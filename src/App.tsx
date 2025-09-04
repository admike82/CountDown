import "./App.css";
import Timer from "./Timer/Timer";

const queryParameters = new URLSearchParams(window.location.search);
const duration = Number(queryParameters.get("s")) || 300;
const message = queryParameters.get("msg") || "Let's go !";
const primary = "#" + (queryParameters.get("primary") || "21eaee");
const secondary = "#" + (queryParameters.get("secondary") || "fc4101");
const blink = queryParameters.get("blink") === "1" || false;
const audio = queryParameters.get("audio") === "1" || false;
console.log("🚀 ~ blink:", blink);

const _DURATION = {
  minutes: Math.floor(duration / 60),
  seconds: duration % 60,
};

function App() {
  return (
    <Timer
      initMinutes={_DURATION.minutes}
      initSeconds={_DURATION.seconds}
      primary={primary}
      secondary={secondary}
      message={message}
      blink={blink}
      audio={audio}
    />
  );
}

export default App;
