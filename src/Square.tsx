type Props = {
  value: string;
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
