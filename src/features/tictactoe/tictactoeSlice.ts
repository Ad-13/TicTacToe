import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from './types';

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningCombo: null,
};

const tictactoeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.board[index] || state.winner) return;

      state.board[index] = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      for (const [a, b, c] of winningCombinations) {
        if (
          state.board[a] &&
          state.board[a] === state.board[b] &&
          state.board[a] === state.board[c]
        ) {
          state.winner = state.board[a];
          state.winningCombo = [a, b, c];
          return;
        }
      }

      if (!state.board.includes(null)) {
        state.winner = 'draw';
        state.winningCombo = null;
      }
    },
    resetGame: state => {
      state.board = Array(9).fill(null);
      state.currentPlayer = 'X';
      state.winner = null;
      state.winningCombo = null;
    },
  },
});

export const { makeMove, resetGame } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
