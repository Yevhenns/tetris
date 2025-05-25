import { useEffect, useState } from "react";
import { useMoveFigure } from "./useMoveFigure";
import { END_ROW } from "../assets/constants";

export const useCreateFigure = () => {
  const [figureCoords, setFigureCoords] = useState<Row>([]);
  const [filledCoords, setFilledCoords] = useState<Row>([]);

  useMoveFigure({ setFigureCoords });

  const getIsCollision = () =>
    figureCoords.some((fig) => {
      const movedY = fig.y + 1;
      return filledCoords.some(
        (filled) => filled.x === fig.x && filled.y === movedY
      );
    });

  const isCollision = getIsCollision();

  const isGameOver = filledCoords.some(
    (item) => (item.x === 5 || item.x === 6) && item.y === 1
  );

  useEffect(() => {
    if (isCollision || figureCoords.some((item) => item.y === END_ROW)) {
      setFilledCoords((prev) => {
        return [...prev, ...figureCoords];
      });
    }
  }, [figureCoords, isCollision]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFigureCoords((prevCoords) => {
        if (!isCollision && prevCoords.some((item) => item.y < END_ROW)) {
          return prevCoords.map((item) => ({ x: item.x, y: item.y + 1 }));
        } else {
          return [
            // TODO add random figure
            { x: 5, y: 1 },
            { x: 6, y: 1 },
          ];
        }
      });
    }, 500);

    if (isGameOver) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCollision, isGameOver]);

  return { figureCoords, filledCoords, isGameOver };
};
