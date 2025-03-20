import { FC } from 'react';

import TicTacToe from '@features/tictactoe/ui/TicTacToe';

const TicTacToePage: FC = () => (
  <div className="container">
    <h1>Tic-Tac-Toe</h1>
    <TicTacToe />
  </div>
);

export default TicTacToePage;
