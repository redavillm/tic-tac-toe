import { useState } from "react";
import GameStateLess from "./GameStateLess";
import { findWinner } from "../check";

const GameStateFull = () => {
  const [index, setIndex] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(""));
  const isWinner = findWinner(cells);

  return (
    <GameStateLess
      index={index}
      cells={cells}
      setIndex={setIndex}
      setCells={setCells}
      isWinner={isWinner}
    />
  );
};

export default GameStateFull;
