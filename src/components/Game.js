import { useState } from "react";
import Cell from "./Cell";
import { findWinner } from "../check";

const Game = () => {
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

export default Game;
