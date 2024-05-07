import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill("")]);
  const currentSquares: string[] = history[history.length - 1];

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number) => {
    // todo
  };

  const moves = history.map((squares: string[], move: number) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
