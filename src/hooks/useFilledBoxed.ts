import { useEffect, useState } from "react";
import { END_ROW } from "../assets/constants";

interface useFilledBoxedProps {
  figureCoords: Row;
}

export const useFilledBoxed = ({ figureCoords }: useFilledBoxedProps) => {
  const [filledCoords, setFilledCoords] = useState<Row>([]);

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

  return { isCollision, isGameOver, filledCoords };
};
