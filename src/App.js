import { useState } from "react";
import "./App.css";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let move = false;

const Cell = (props) => {
  let [sym, setSym] = useState("");

  return (
    <div
      className="field"
      id={props.number}
      onClick={() => {
        move === true ? setSym((sym = "x")) : setSym((sym = "o"));
      }}
    >
      {sym}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="move">Сейчас ход: {move ? "X" : "O"}</div>
      <div className="grid">
        {numArr.map((el) => (
          <Cell number={el} />
        ))}
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}

export default App;
