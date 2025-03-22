import { TWinner, TCellValue, TBoard } from './types';

export const calculateWinningCombination = (board: TBoard): number[] | null => {
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
  currentPlayer: TCellValue,
): string => {
  if (winner === 'draw') return "Game Draw!";
  if (winner) return `Winner: ${winner}`;
  return `Current Player: ${currentPlayer}`;
};

export const isBoardFull = (board: TBoard): boolean => {
  return board.every(cell => cell !== null);
};

export const getEmptyCells = (board: TBoard): number[] => {
  return board.reduce((acc: number[], cell, index) => {
    if (cell === null) acc.push(index);
    return acc;
  }, []);
};
