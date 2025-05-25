import { useEffect, useState } from "react";
import { useMoveFigure } from "./useMoveFigure";
import { END_ROW } from "../assets/constants";
import { useFilledBoxed } from "./useFilledBoxed";

export const useCreateFigure = () => {
  const [figureCoords, setFigureCoords] = useState<Row>([]);

  const { isCollision, isGameOver, filledCoords } = useFilledBoxed({
    figureCoords,
  });

  useMoveFigure({ setFigureCoords });

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
