import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

interface useEngineProps {
  endColumn: number;
  endRow: number;
}

export const useEngine = ({ endColumn, endRow }: useEngineProps) => {
  const { board } = useCreateBoard({ endColumn, endRow });
  const {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    startGame,
    startGameHandler,
    restartGameHandler,
    rotate,
    win,
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
    startGame,
    startGameHandler,
    restartGameHandler,
    rotate,
    win,
    level,
  };
};
