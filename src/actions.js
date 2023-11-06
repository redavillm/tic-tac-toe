export const click = ({ i, cells, setCells, index, setIndex, isWinner }) => {
  const checkCells = [...cells];

  if (isWinner || cells[i]) return;

  checkCells[i] = index ? "X" : "O";
  setCells(checkCells);
  setIndex(!index);
};

export const reset = ({ setCells, setIndex }) => {
  setCells(Array(9).fill(""));
  setIndex(true);
};
