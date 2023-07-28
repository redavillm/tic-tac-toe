import PropTypes from 'prop-types';

const Cell = ({ cell, click }) => {
  return (
    <div className="cell" onClick={click}>
      {cell}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.string,
  click: PropTypes.func
}

export default Cell;
  