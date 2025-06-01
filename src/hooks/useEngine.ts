import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

interface useEngineProps {
  speed: number;
  fastMoveDownHandler: (condition: boolean) => void;
}

export const useEngine = ({ speed, fastMoveDownHandler }: useEngineProps) => {
  const { board } = useCreateBoard();
  const {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
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
  };
};
