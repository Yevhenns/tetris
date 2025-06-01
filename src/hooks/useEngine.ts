import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

interface useEngineProps {
  speed: number;
  fastMoveDownHandler: (condition: boolean) => void;
  endColumn: number;
  endRow: number;
}

export const useEngine = ({
  speed,
  fastMoveDownHandler,
  endColumn,
  endRow,
}: useEngineProps) => {
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
    startGameHandler,
    restartGame,
    rotate,
  } = useCreateFigure({ speed, fastMoveDownHandler });

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
    startGameHandler,
    restartGame,
    rotate,
  };
};
