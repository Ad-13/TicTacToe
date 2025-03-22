import { TCellValue } from './types';
import { calculateWinningCombination } from './utils';

export const findBestMove = (board: TCellValue[]): number => {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'O';
      const score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

const minimax = (board: TCellValue[], depth: number, isMaximizing: boolean): number => {
  const winningCombo = calculateWinningCombination(board);

  if (winningCombo) {
    const winner = board[winningCombo[0]];
    return winner === 'O' ? 10 - depth : depth - 10;
  }

  if (!board.includes(null)) return 0;

  let bestScore = isMaximizing ? -Infinity : Infinity;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = isMaximizing ? 'O' : 'X';
      const score = minimax(board, depth + 1, !isMaximizing);
      board[i] = null;
      bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
    }
  }
  return bestScore;
};
