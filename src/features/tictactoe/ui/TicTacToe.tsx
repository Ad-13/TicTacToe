import { FC } from 'react';

import { useActions, useAppSelector } from '@store/hooks';
import { makeMove, resetGame } from '../tictactoeSlice';

import Button from '@components/general/Button';
import Board from './Board';
import GameStatus from './GameStatus';

const TicTacToe: FC = () => {
  const { board, currentPlayer, winner } = useAppSelector(state => state.tictactoe);
  const { dispatchMakeMove, dispatchResetGame } = useActions({ makeMove, resetGame });

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <GameStatus winner={winner} currentPlayer={currentPlayer} />
      <Board board={board} winner={winner} onCellClick={dispatchMakeMove} />
      <Button variant="primary" onClick={() => dispatchResetGame()}>
        Restart Game
      </Button>
    </div>
  );
};

export default TicTacToe;
