type Props = {
  value?: string;
};

const Square: React.FC<Props> = ({ value }) => {
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
};

export default Square;
