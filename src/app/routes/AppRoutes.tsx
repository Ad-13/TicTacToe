import { Routes, Route } from 'react-router-dom';
import TicTacToePage from '@pages/TicTacToePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TicTacToePage />} />
    </Routes>
  );
};
