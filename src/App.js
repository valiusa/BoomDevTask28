import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [text, setText] = useState("");
  const isValid = useMemo(() => {
    const num = parseInt(text, 10);

    return !isNaN(num);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          {/* <i className="fas fa-times" /> */}
          <i className={`fas ${isValid ? "fa-check" : "fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
