const Cell = ({ cell, click }) => {
  return (
    <div className="cell" onClick={click}>
      {cell}
    </div>
  );
};

export default Cell;
  