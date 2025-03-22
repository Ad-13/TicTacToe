export type TPlayersNames = {
  X: string;
  O: string;
};
export type TPlayer = 'X' | 'O';
export type TCellValue = TPlayer | null;
export type TWinner = TCellValue | 'draw';
export type TBoard  = TCellValue[];

export const enum EGameMode {
  VS_HUMAN = 'vs-human',
  VS_COMPUTER = 'vs-computer',
};

export interface IGameState {
  board: TBoard;
  currentPlayer: TPlayer;
  winner: TWinner;
  winningCombo: number[] | null;
  gameMode: EGameMode;
  players: TPlayersNames;
  isAiThinking: boolean;
}
