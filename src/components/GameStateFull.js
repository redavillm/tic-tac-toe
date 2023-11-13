import { useState } from "react";
import GameStateLess from "./GameStateLess";
import { findWinner, nobodyWon } from "../check";
import { store } from "../store/store";

const GameStateFull = () => {
  const { cellsValue, whoseTurnValue } = store.getState();
  const [whoseTurn, setWhoseTurn] = useState(whoseTurnValue);
  const [cells, setCells] = useState(cellsValue);
  const isWinner = findWinner(cells);
  const noWinder = nobodyWon(cells);

  store.subscribe(() => {
    const { cellsValue } = store.getState();
    setCells(cellsValue);
  });
  store.subscribe(() => {
    const { whoseTurnValue } = store.getState();
    setWhoseTurn(whoseTurnValue);
  });

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
