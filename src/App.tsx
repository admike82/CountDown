import "./App.css";
import Timer from "./Timer/Timer";

const queryParameters = new URLSearchParams(window.location.search);
const URLparam = Number(queryParameters.get("s")) || 300
const message = queryParameters.get("msg") || "Let's go !"
const primary = "#" + (queryParameters.get("primary") || "21eaee")
const secondary = "#" + (queryParameters.get("secondary") || "fc4101")

const _DURATION = {
  minutes: Math.floor(URLparam / 60),
  seconds: URLparam % 60,
};

function App() {
  return (
    <Timer initMinutes={_DURATION.minutes} initSeconds={_DURATION.seconds} primary={primary} secondary={secondary} message={message} />
  );
}

export default App;
