export type TPlayer = 'X' | 'O' | null;
export type TWinner = TPlayer | 'draw';

export interface GameState {
  board: TPlayer[];
  currentPlayer: TPlayer;
  winner: TPlayer | 'draw' | null;
  winningCombo: number[] | null;
}
