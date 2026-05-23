import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [bgChanges, setBGChanges] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setBGChanges(bgChanges + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>Changes: {bgChanges}</h1>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
