import "./App.css";
import Timer from "./Timer/Timer";

const queryParameters = new URLSearchParams(window.location.search);
const URLparam = Number(queryParameters.get("s"))
const message = queryParameters.get("msg")

const _DURATION = {
  minutes: URLparam ? Math.floor(URLparam / 60) : 5,
  seconds: URLparam % 60,
};

function App() {
  return (
    <Timer initMinutes={_DURATION.minutes} initSeconds={_DURATION.seconds} message={message} />
  );
}

export default App;
