import React, { useState } from "react";
import "./styles.css";
import { ChromePicker } from "react-color";

export default function App() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="App">
      <h1>React Color Picker App</h1>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        {showColorPicker ? "Close color Picker" : "Pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updatedColor => {
            setColor(updatedColor.hex);
          }}
        />
      )}
      <h2>You picked {color} </h2>
    </div>
  );
}
