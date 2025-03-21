import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from './types';
import { calculateWinner } from './utils';

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

      const winningCombo = calculateWinner(state.board);

      if (winningCombo) {
        state.winner = state.board[winningCombo[0]];
        state.winningCombo = winningCombo;
        return;
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
