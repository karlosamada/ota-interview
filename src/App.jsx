import { useState } from "react";
import "./App.css";

function App() {
  const [curState, setCurState] = useState(true);

  const toggle = () => {
    setCurState(!curState);
  };

  return (
    <div className="container">
      <div>
        <button onClick={toggle}>{curState ? "ON" : "OFF"}</button>
      </div>
    </div>
  );
}

export default App;
