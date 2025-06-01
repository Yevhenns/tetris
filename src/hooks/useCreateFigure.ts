import { useEffect, useState } from "react";
import { useMoveFigure } from "./useMoveFigure";
import { END_ROW } from "../assets/constants";
import { useFilledBoxes } from "./useFilledBoxes";
import { useRandomFigure } from "./useRandomFigure";

interface useCreateFigureProps {
  speed: number;
  fastMoveDownHandler: (condition: boolean) => void;
}

export const useCreateFigure = ({
  speed,
  fastMoveDownHandler,
}: useCreateFigureProps) => {
  const [figureCoords, setFigureCoords] = useState<Row>([]);
  const [startGame, setStartGame] = useState(false);

  const startGameHandler = () => {
    setStartGame(true);
  };

  const { isCollisionY, isGameOver, filledCoords, score } = useFilledBoxes({
    figureCoords,
  });
  const { figure, generateRandomFigure } = useRandomFigure();
  const { moveLeft, moveRight, moveDown } = useMoveFigure({
    setFigureCoords,
    figureCoords,
    filledCoords,
    isCollisionY,
    fastMoveDownHandler,
  });

  console.log(figure);
  useEffect(() => {
    if (startGame) {
      const interval = setInterval(() => {
        setFigureCoords((prevCoords) => {
          if (!isCollisionY && prevCoords.some((item) => item.y < END_ROW)) {
            return prevCoords.map((item) => ({ x: item.x, y: item.y + 1 }));
          } else {
            generateRandomFigure();
            const maxY = figure?.coords[figure.coords.length - 1].y;

            if (maxY)
              return figure?.coords.map(({ x, y }) => ({
                x: x + 4,
                y: y - maxY + 1,
              }));

            return [];
          }
        });
      }, speed);

      if (isGameOver) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCollisionY, isGameOver, speed, figure?.coords, startGame]);

  return {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    startGameHandler,
  };
};
