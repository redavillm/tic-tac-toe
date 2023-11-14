import { useDispatch } from "react-redux";
import { RESET_GAME } from "../store/actions";
import Cell from "./Cell";
import PropTypes from "prop-types";

const GameStateLess = ({ whoseTurn, cells, isWinner, noWinder }) => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(RESET_GAME);
  };

  const stepInfo = () => {
    return isWinner
      ? "Победил " + isWinner
      : noWinder
      ? "No one won!"
      : "Active player " + (whoseTurn ? "X" : "O");
  };

  return (
    <>
      <div className="index">{stepInfo()}</div>
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
