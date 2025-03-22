import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EGameMode, IGameState } from './helpers/types';
import { calculateWinningCombination } from './helpers/utils';
import { findBestMove } from './helpers/ai';

const initialState: IGameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningCombo: null,
  gameMode: EGameMode.VS_HUMAN,
  players: { X: 'Player 1', O: 'Player 2' },
  isAiThinking: false,
};

const tictactoeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    setIsAiThinking: (state, action: PayloadAction<boolean>) => {
      state.isAiThinking = action.payload;
    },
    setGameMode: (state, action: PayloadAction<EGameMode>) => {
      state.gameMode = action.payload;
      if (action.payload === EGameMode.VS_COMPUTER) {
        state.players.O = 'Computer';
      }
    },
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.isAiThinking || state.board[index] || state.winner) return;

      state.board[index] = state.currentPlayer;

      const winningCombo = calculateWinningCombination(state.board);

      if (winningCombo) {
        state.winner = state.board[winningCombo[0]];
        state.winningCombo = winningCombo;
        return;
      }

      if (!state.board.includes(null)) {
        state.winner = 'draw';
        return;
      }

      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    makeAiMove: (state) => {
      const bestMove = findBestMove(state.board);
      state.board[bestMove] = 'O';

      const winningCombo = calculateWinningCombination(state.board);
      state.isAiThinking = false;

      if (winningCombo) {
        state.winner = state.board[winningCombo[0]];
        state.winningCombo = winningCombo;
        return;
      }

      if (!state.board.includes(null)) {
        state.winner = 'draw';
        return;
      }

      state.currentPlayer = 'X';
    },
    resetGame: state => ({ ...initialState, gameMode: state.gameMode, players: state.players }),
  },
});

export const { makeMove, resetGame, setGameMode, makeAiMove, setIsAiThinking } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
