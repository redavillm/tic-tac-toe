export const findWinner = (comb) => {
  const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winComb.length; i++) {
    const [a, b, c] = winComb[i];
    if (comb[a] && comb[a] === comb[b] && comb[a] === comb[c]) {
      return comb[a];
    }
  }
  return null;
};

export const nobodyWon = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      return false;
    }
  }
  return true;
};
