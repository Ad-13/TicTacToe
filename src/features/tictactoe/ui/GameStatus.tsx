import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '@src/app/store/hooks';

const GameStatus: FC = () => {
  const { currentPlayer, winner } = useAppSelector(state => state.tictactoe);

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={winner || currentPlayer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.1 }}
      >
        {winner ? (winner === 'draw' ? 'Draw' : `Winner: ${winner}`) : `Turn: ${currentPlayer}`}
      </motion.h2>
    </AnimatePresence>
  );
};

export default GameStatus;
