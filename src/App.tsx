import "./App.css";
import Timer from "./Timer/Timer";

const _DURATION = {
  minutes: 5,
  seconds: 0
}

function App() {
  return (
    <Timer initMinutes={_DURATION.minutes} initSeconds={_DURATION.seconds}/>
  );
}

export default App;
