import { useState } from "react";
import "./App.css";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cell = ({ num, index, setIndex, value }) => {
  let [localValue, setLocalValue] = useState();

  return (
    <div
      className="cell"
      id={num}
      onClick={() => {
        if (!localValue) {
          if (index) {
            setIndex(!index);
            setLocalValue((localValue = "x"));
          } else {
            setIndex(!index);
            setLocalValue((localValue = "o"));
          }
        }
      }}
    >
      {localValue}
    </div>
  );
};

const setValue = (index) => {
  return index ? "x" : "o";
};

function App() {
  // let [value, setValue] = useState('');
  let [index, setIndex] = useState(true);
  let [cell1, setCell1] = useState("");

  return (
    <div className="App">
      <div className="index">Сейчас ход: {index ? "X" : "O"}</div>
      <div className="grid">
        {/* {numArr.map((el) => (
          <Cell num={el} index={index} setIndex={setIndex} />
        ))} */}
        <div
          className="cell"
          onClick={setCell1(!cell1 ? setCell1(setValue(index)) : cell1)}
        >
          {cell1}
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}

export default App;
