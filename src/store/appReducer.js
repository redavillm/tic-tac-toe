const initialState = {
  cellsValue: Array(9).fill(""),
  whoseTurnValue: true,
};

export const appReducer = (state = initialState, action) => {
  const { cellsValue, whoseTurnValue } = state;
  const { type, payload } = action;

  switch (type) {
    case "ADD_VALUE_ON_CELL":
      return {
        cellsValue: [
          ...cellsValue.slice(0, payload),
          whoseTurnValue ? "X" : "O",
          ...cellsValue.slice(payload + 1, 9),
        ],
        whoseTurnValue: !whoseTurnValue,
      };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
