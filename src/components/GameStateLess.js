import Cell from "./Cell";
import PropTypes from "prop-types";
import { click, reset } from "../actions";

const GameStateLess = ({ index, cells, isWinner, setCells, setIndex }) => {
  
  return (
    <>
      <div className="index">
        {isWinner
          ? "Победил " + isWinner
          : "Active player " + (index ? "X" : "O")}
      </div>
      <div className="grid">
        {cells.map((cell, i) => (
          <Cell
            key={i}
            cell={cell}
            click={() =>
              click({ i, cells, isWinner, setCells, index, setIndex })
            }
          />
        ))}
      </div>
      <button
        className="reset"
        onClick={() => {
          reset({ setCells, setIndex });
        }}
      >
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
