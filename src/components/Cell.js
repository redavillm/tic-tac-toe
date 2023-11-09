import PropTypes from "prop-types";
import { store } from "../store/store";
import { addValue } from "../store/action";

const Cell = ({ cell, index, isWinner }) => {
  const click = (cell) => {
    if (isWinner) {
      return;
    }
    return cell === "" ? store.dispatch(addValue(index)) : cell;
  };

  return (
    <div
      className="cell"
      onClick={() => {
        click(cell);
      }}
    >
      {cell}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.string,
  click: PropTypes.func,
};

export default Cell;
