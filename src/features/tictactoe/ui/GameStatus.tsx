import { FC } from "react";

interface GameStatusProps {
  winner: string | null;
  currentPlayer: string | null;
}

const GameStatus: FC<GameStatusProps> = ({ winner, currentPlayer }) => {
  return <h2>{winner ? `Winner: ${winner}` : `Turn: ${currentPlayer}`}</h2>;
};

export default GameStatus;
