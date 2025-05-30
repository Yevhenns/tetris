import { useCreateBoard } from "./useCreateBoard";
import { useCreateFigure } from "./useCreateFigure";

interface useEngineProps {
  speed: number;
}

export const useEngine = ({ speed }: useEngineProps) => {
  const { board } = useCreateBoard();
  const {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
  } = useCreateFigure({ speed });

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
