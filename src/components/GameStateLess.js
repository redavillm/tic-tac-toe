import { resetGame } from "../store/action";
import { store } from "../store/store";
import Cell from "./Cell";
import PropTypes from "prop-types";

const GameStateLess = ({ whoseTurn, cells, isWinner, noWinder }) => {
  const reset = () => {
    store.dispatch(resetGame);
  };

  return (
    <>
      <div className="index">
        {isWinner
          ? "Победил " + isWinner
          : noWinder
          ? "No one won!"
          : "Active player " + (whoseTurn ? "X" : "O")}
      </div>
      <div className="grid">
        {cells.map((cell, index) => (
          <Cell key={index} index={index} cell={cell} isWinner={isWinner} />
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
  reset: PropTypes.func,
};

export default GameStateLess;
