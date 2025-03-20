export type Player = "X" | "O" | null;

export interface GameState {
  board: Player[];
  currentPlayer: Player;
  winner: Player | "draw" | null;
}
