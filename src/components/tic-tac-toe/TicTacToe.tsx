import { useState } from "react";
import { SlGameController } from "react-icons/sl";

interface SquareProps {
  value?: number | string;
  onClick: () => void;
}

interface GameProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  const handleCLick = () => {
    onClick();
  };

  return (
    <button
      className="float-left mr-[-1px] mt-[-1px] size-10 border border-gray-400 bg-white p-0 text-center text-2xl font-bold leading-tight"
      onClick={handleCLick}
    >
      {value}
    </button>
  );
};

const Board = ({ xIsNext, squares, onPlay }: GameProps) => {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const onClickSqure = (index: number) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="mb-4">{status}</div>
      <div className="flex">
        <Square value={squares[0]} onClick={() => onClickSqure(0)}></Square>
        <Square value={squares[1]} onClick={() => onClickSqure(1)}></Square>
        <Square value={squares[2]} onClick={() => onClickSqure(2)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[3]} onClick={() => onClickSqure(3)}></Square>
        <Square value={squares[4]} onClick={() => onClickSqure(4)}></Square>
        <Square value={squares[5]} onClick={() => onClickSqure(5)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[6]} onClick={() => onClickSqure(6)}></Square>
        <Square value={squares[7]} onClick={() => onClickSqure(7)}></Square>
        <Square value={squares[8]} onClick={() => onClickSqure(8)}></Square>
      </div>
    </>
  );
};

const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: string[], move: number) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="mb-0.5 rounded-md bg-gray-200 pl-2 pr-2 text-center text-sm"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="mx-auto max-w-md p-4">
      <div className="flex flex-row gap-2">
        <SlGameController size={24} />
        <h1 className="pb-8 text-2xl font-bold">Tic-Tac-Toe</h1>
      </div>
      <div className="flex gap-3">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        {/* Game Info */}
        <div className="ml-10 mt-5">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param squares
 * @returns
 */
const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
