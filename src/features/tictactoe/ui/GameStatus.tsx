import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '@src/app/store/hooks';
import { getGameStatus } from '../utils';

const GameStatus: FC = () => {
  const { currentPlayer, winner } = useAppSelector(state => state.tictactoe);
  const gameStatus = getGameStatus(winner, currentPlayer);

  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={winner || currentPlayer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.1 }}
      >
        {gameStatus}
      </motion.h2>
    </AnimatePresence>
  );
};

export default GameStatus;
