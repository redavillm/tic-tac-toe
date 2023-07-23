import "./App.css";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let move = true;

function App() {
  return (
    <div className="App">
      <div className="move">Сейчас ход: {move ? "X" : "O"}</div>
      <div className="grid">
        {numArr.map(el => (
          <div className="field" id={el}>O</div>
        ))}
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}

export default App;
