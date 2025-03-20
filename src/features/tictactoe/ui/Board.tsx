import { FC } from 'react';

import { useActions, useAppSelector } from '@src/app/store/hooks';
import { makeMove } from '../tictactoeSlice';

import Cell from './Cell';

import styles from './TicTacToe.module.scss';

const Board: FC = () => {
  const { board } = useAppSelector(state => state.tictactoe);
  const { dispatchMakeMove } = useActions({ makeMove });

  return (
    <div className={styles.board}>
      {board.map((cell, index) => (
        <Cell key={index} index={index} value={cell} onClick={() => dispatchMakeMove(index)} />
      ))}
    </div>
  );
};

export default Board;
