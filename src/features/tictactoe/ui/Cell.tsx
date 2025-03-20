import { FC } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { cellVariants } from '../helpers/animations';
import { TPlayer } from '../types';
import { useAppSelector } from '@src/app/store/hooks';

import styles from './TicTacToe.module.scss';

interface CellProps {
  value: TPlayer;
  index: number;
  onClick: () => void;
}

const Cell: FC<CellProps> = ({ value, index, onClick }) => {
  const { winner, winningCombo } = useAppSelector(state => state.tictactoe);
  
  const disabled = !!winner;
  const isWin = winningCombo?.includes(index) || false;
  const className = classNames(styles.cell, {
    [styles.disabled]: disabled,
  });

  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      initial="initial"
      animate={isWin ? 'win' : 'animate'}
      variants={cellVariants}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {value}
    </motion.button>
  );
};

export default Cell;
