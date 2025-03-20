import { FC } from 'react';

import Cell from './Cell';

import styles from './TicTacToe.module.scss';

interface BoardProps {
  board: (string | null)[];
  winner: string | null;
  onCellClick: (index: number) => void;
}

const Board: FC<BoardProps> = ({ board, winner, onCellClick }) => {
  return (
    <div className={styles.board}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          disabled={!!winner}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
