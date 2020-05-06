import React, { useState } from "react";
import ReactDOM from "react-dom";
import ButtonRed from "./Components/ButtonRed";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [radius, setRadius] = useState();
  const [state, setstate] = useState(false);
  const [aid, setaid] = useState();
  const [arr] = useState([]);
  const btn = (col, rad, aid) => {
    setColor(col);
    setRadius(rad);
    setaid(aid);
    setstate(true);
  };

  function getPositions(ev) {
    const element = {};
    if (state === true) {
      const _mouseY = ev.clientY;
      const _mouseX = ev.clientX;
      element.type = "button";
      element.width = "70px";
      element.color = color;
      element.top = `${_mouseY}px`;
      element.left = `${_mouseX - 200}px`;
      element.radius = radius;
      element.aid = aid;

      setstate(false);
    } else {
      return;
    }
    arr.push(element);
  }

  const drop = (e) => {
    e.preventDefault();

    const _mouseY = e.clientY;
    const _mouseX = e.clientX;
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id);
    const card = document.getElementById(card_id);
    card.style.display = "block";
    card.style.top = `${_mouseY}px`;
    card.style.left = `${_mouseX - 200}px `;
    console.log(card.style.top, card.style.top);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <aside>
        <button onClick={btn.bind(null, "red", "0px", "btn1")}>
          Red Button
        </button>
        <button onClick={btn.bind(null, "blue", "0px", "btn2")}>
          Blue Button
        </button>
        <button onClick={btn.bind(null, "red", "1000px", "btn3")}>
          Red Round Button
        </button>
        <button onClick={btn.bind(null, "blue", "1000px", "btn4")}>
          Blue Round Button
        </button>
      </aside>
      <div
        id="moving"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={getPositions}
      >
        {arr.map((ele) => {
          if (ele.type === "button") {
            return (
              <ButtonRed
                width={ele.width}
                color={ele.color}
                top={ele.top}
                left={ele.left}
                radius={ele.radius}
                aid={ele.aid}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
