import { FC } from 'react';

import GameSettings from '@features/tictactoe/ui/GameSettings';

import styles from './GameSettingsPage.module.scss';

const GameSettingsPage: FC = () => (
  <div className={styles.settings}>
    <h1>Game Settings</h1>
    <GameSettings />
  </div>
);

export default GameSettingsPage;
