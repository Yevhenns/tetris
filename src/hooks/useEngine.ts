import { END_COLUMN, END_ROW } from "../assets/constants";
import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

export const useEngine = () => {
  const { board } = useCreateBoard({ endColumn: END_COLUMN, endRow: END_ROW });
  const {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    isGameStarted,
    startGameHandler,
    restartGameHandler,
    rotate,
    isVictory,
    level,
  } = useCreateFigure();

  return {
    board,
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    isGameStarted,
    startGameHandler,
    restartGameHandler,
    rotate,
    isVictory,
    level,
  };
};
