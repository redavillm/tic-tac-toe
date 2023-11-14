import GameStateLess from "./GameStateLess";
import { findWinner, nobodyWon } from "../check.js";
import { useSelector } from "react-redux";
import { selectCells, selectWhoseTurnValue } from "../store/selectors";

const GameStateFull = () => {
  const cells = useSelector(selectCells);
  const whoseTurn = useSelector(selectWhoseTurnValue);

  const isWinner = findWinner(cells);
  const noWinder = nobodyWon(cells);

  return (
    <GameStateLess
      whoseTurn={whoseTurn}
      cells={cells}
      isWinner={isWinner}
      noWinder={noWinder}
    />
  );
};

export default GameStateFull;
