import { Routes, Route, Navigate } from 'react-router-dom';
import TicTacToePage from '@pages/TicTacToePage';
import GameSettingsPage from '@src/pages/GameSettingsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/settings" replace />} />
      <Route path="/settings" element={<GameSettingsPage />} />
      <Route path="/game" element={<TicTacToePage />} />
    </Routes>
  );
};
