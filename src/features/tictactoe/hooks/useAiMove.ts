import { useEffect } from 'react';
import { useAppSelector, useActions } from '@src/app/store/hooks';
import { makeAiMove, setIsAiThinking } from '../tictactoeSlice';
import { EGameMode } from '../helpers/types';

const useAiMove = (): void => {
  const { gameMode, currentPlayer } = useAppSelector(state => state.tictactoe);
  const { dispatchMakeAiMove, dispatchSetIsAiThinking } = useActions({ makeAiMove, setIsAiThinking });

  useEffect(() => {
    if (gameMode === EGameMode.VS_COMPUTER && currentPlayer === 'O') {
      dispatchSetIsAiThinking(true);
      const timer = setTimeout(() => {
        dispatchMakeAiMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameMode]);
};

export default useAiMove;
