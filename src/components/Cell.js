import PropTypes from "prop-types";
import { addValue } from "../store/actions";
import { useDispatch } from "react-redux";

const Cell = ({ cell, index, isWinner }) => {
  const dispatch = useDispatch();
  const click = (cell) => {
    if (isWinner) {
      return;
    }
    return cell === "" ? dispatch(addValue(index)) : cell;
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
