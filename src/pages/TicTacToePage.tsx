import { FC } from 'react';
import { useAppSelector } from '@store/hooks';

import { EGameMode } from '@src/features/tictactoe/helpers/types';

import TicTacToe from '@features/tictactoe/ui/TicTacToe';
import Spinner from '@src/shared/components/general/Spinner';

const TicTacToePage: FC = () => {
  const { players, gameMode, isAiThinking } = useAppSelector(state => state.tictactoe);

  return (
    <div className="container">
      <div className="card">
        <h1>
          {gameMode === EGameMode.VS_COMPUTER
            ? `${players.X} vs AI`
            : `${players.X} vs ${players.O}`}
          {isAiThinking && <Spinner width={30} />}
        </h1>

        <TicTacToe />
      </div>
    </div>
  );
};

export default TicTacToePage;
