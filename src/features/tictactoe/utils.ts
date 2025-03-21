import { TPlayer, TWinner } from './types';

export const calculateWinner = (board: TPlayer[]): number[] | null => {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return [a, b, c];
    }
  }

  return null;
};

export const getGameStatus = (
  winner: TWinner,
  currentPlayer: TPlayer,
): string => {
  if (winner === 'draw') return "Game Draw!";
  if (winner) return `Winner: ${winner}`;
  return `Current Player: ${currentPlayer}`;
};
