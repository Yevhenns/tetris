import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

export const useEngine = () => {
  const { board } = useCreateBoard();
  const {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
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
  };
};
