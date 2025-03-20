import { FC } from 'react';

import { useActions } from '@store/hooks';
import { resetGame } from '../tictactoeSlice';

import Button from '@components/general/Button';
import Board from './Board';
import GameStatus from './GameStatus';

const TicTacToe: FC = () => {
  const { dispatchResetGame } = useActions({ resetGame });

  return (
    <>
      <GameStatus />
      <Board />
      <Button variant="primary" onClick={() => dispatchResetGame()}>
        Restart Game
      </Button>
    </>
  );
};

export default TicTacToe;
