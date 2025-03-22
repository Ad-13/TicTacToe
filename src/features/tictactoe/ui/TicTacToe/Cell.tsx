import { FC } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { cellVariants } from '../../helpers/animations';
import { TCellValue } from '../../helpers/types';
import { useAppSelector } from '@src/app/store/hooks';

import styles from './TicTacToe.module.scss';

interface CellProps {
  value: TCellValue;
  index: number;
  onClick: (index: number) => void;
}

const Cell: FC<CellProps> = ({ value, index, onClick }) => {
  const { winner, winningCombo, isAiThinking } = useAppSelector(state => state.tictactoe);
  
  const disabled = !!winner;
  const isWin = winningCombo?.includes(index) || false;
  const className = classNames(styles.cell, {
    [styles.disabled]: disabled,
  });

  const onCellClick = () => {
    if (isAiThinking || value !== null) return;
    onClick(index);
  };

  return (
    <motion.button
      className={className}
      onClick={onCellClick}
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
