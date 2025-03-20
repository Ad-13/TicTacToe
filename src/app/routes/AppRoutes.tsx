import { Routes, Route } from 'react-router-dom';
import TicTacToe from '@features/tictactoe/ui/TicTacToe';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TicTacToe />} />
    </Routes>
  );
};
