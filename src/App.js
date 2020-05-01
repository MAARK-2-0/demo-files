import React, { useState } from "react";

import ReactDOM from "react-dom";
import ButtonRed from "./Components/ButtonRed";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [radius, setRadius] = useState();
  const [state, setstate] = useState(false);
  const [arr] = useState([])
  const btn = (col, rad) => {
    setColor(col);
    setRadius(rad);
    setstate(true);
  };
  function getPositions(ev) {
    const element = {};
    if (state === true) {
      const _mouseY = ev.clientY;
      const _mouseX = ev.clientX;
      // document.getElementById("moving").append(<ButtonRed width="70px" color="red" top={_mouseY+'px'} left={(_mouseX-200)+'px'} />)
      element.type = "button";
      element.width = "70px";
      element.color = color;
      element.top = `${_mouseY}px`;
      element.left = `${_mouseX - 200}px`;
      element.radius = radius;

      setstate(false);
    } else {
      return;
    }
    arr.push(element);
  }

  return (
    <div className="App">
      <aside>
        <button id="btn" onClick={btn.bind(null, "red", "0px")}>
          Red Button
        </button>
        <button id="btn" onClick={btn.bind(null, "blue", "0px")}>
          Blue Button
        </button>
        <button id="btn" onClick={btn.bind(null, "red", "1000px")}>
          Red Round Button
        </button>
        <button id="btn" onClick={btn.bind(null, "blue", "1000px")}>
          Blue Round Button
        </button>
      </aside>
      <div id="moving" onClick={getPositions}>
        {arr.map((ele, i, arr) => {
          if (ele.type === "button") {
            return (
              <ButtonRed
                width={ele.width}
                color={ele.color}
                top={ele.top}
                left={ele.left}
                radius={ele.radius}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
