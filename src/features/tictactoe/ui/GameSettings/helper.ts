import { EGameMode } from "@src/features/tictactoe/helpers/types";

export const gameModeOptions = [
  { value: EGameMode.VS_HUMAN, label: 'VS Human' },
  { value: EGameMode.VS_COMPUTER, label: 'VS Computer' },
];

export const initialValues = {
  gameMode: gameModeOptions[1],
};
