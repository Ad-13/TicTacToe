import { motion } from 'framer-motion';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './TicTacToe.module.scss';

interface CellProps {
  value: string | null;
  disabled: boolean;
  onClick: () => void;
}

const Cell: FC<CellProps> = ({ value, disabled, onClick }) => {
  const className = classNames(styles.cell, {
    [styles.disabled]: disabled,
  });

  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
    >
      {value}
    </motion.button>
  );
};

export default Cell;
