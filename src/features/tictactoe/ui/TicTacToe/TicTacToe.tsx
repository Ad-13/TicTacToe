import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions } from '@store/hooks';
import { resetGame } from '../../tictactoeSlice';

import Button from '@components/general/Button';
import Board from './Board';
import GameStatus from './GameStatus';
import useAiMove from '../../hooks/useAiMove';

import styles from './TicTacToe.module.scss';

const TicTacToe: FC = () => {
  useAiMove();
  const { dispatchResetGame } = useActions({ resetGame });
  const navigate = useNavigate();

  const backToSettings = () => {
    dispatchResetGame();
    navigate('/settings');
  };

  return (
    <>
      <GameStatus />
      <Board />
      <div className={styles.actions}>
        <Button variant="success" onClick={backToSettings}>
          ◀️ Back to Settings
        </Button>
        <Button variant="primary" onClick={() => dispatchResetGame()}>
          Restart Game
        </Button>
      </div>
    </>
  );
};

export default TicTacToe;
