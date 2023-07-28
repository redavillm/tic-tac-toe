import Cell from "./Cell";
import PropTypes from "prop-types";

const GameStateLess = ({ index, cells, isWinner, click, reset }) => {
    return (
      <>
        <div className="index">
          {isWinner
            ? "Победил " + isWinner
            : "Сейчас ходит " + (index ? "X" : "O")}
        </div>
        <div className="grid">
          {cells.map((cell, i) => (
            <Cell key={i} cell={cell} click={() => click(i)} />
          ))}
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </>
    );
  };
  
  GameStateLess.propType = {
    index: PropTypes.boolean,
    cells: PropTypes.array,
    isWinner: PropTypes.object,
    click: PropTypes.func,
    reset: PropTypes.func,
  };

  export default GameStateLess;