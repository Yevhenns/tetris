import { useEffect, useState } from "react";
import { END_ROW } from "../assets/constants";

interface useFilledBoxesProps {
  figureCoords: Row;
}

export const useFilledBoxes = ({ figureCoords }: useFilledBoxesProps) => {
  const [filledCoords, setFilledCoords] = useState<Row>([]);

  const getIsCollisionY = () =>
    figureCoords.some((fig) => {
      const movedY = fig.y + 1;
      return filledCoords.some(
        (filled) => filled.x === fig.x && filled.y === movedY
      );
    });

  const isCollisionY = getIsCollisionY();

  const isGameOver = filledCoords.some(
    (item) => (item.x === 5 || item.x === 6) && item.y === 1
  );

  useEffect(() => {
    if (isCollisionY || figureCoords.some((item) => item.y === END_ROW)) {
      setFilledCoords((prev) => {
        return [...prev, ...figureCoords];
      });
    }
  }, [figureCoords, isCollisionY]);

  return { isCollisionY, isGameOver, filledCoords };
};
