import { useState } from "react";
import { findWinner } from "../check";
import GameStateLess from "./GameStateLess";

const GameStateFull = () => {
  let [index, setIndex] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(""));
  const isWinner = findWinner(cells);

  const click = (mark) => {
    const checkCells = [...cells];

    if (isWinner || cells[mark]) return;

    checkCells[mark] = index ? "X" : "O";
    setCells(checkCells);
    setIndex(!index);
  };

  const reset = () => {
    setCells(Array(9).fill(""));
    setIndex((index = true));
  };

  return (
    <GameStateLess
      index={index}
      cells={cells}
      isWinner={isWinner}
      click={click}
      reset={reset}
    />
  );
};

export default GameStateFull;
