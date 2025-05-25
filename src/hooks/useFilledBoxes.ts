import { useEffect, useState } from "react";
import { END_COLUMN, END_ROW, START_BOX } from "../assets/constants";

interface useFilledBoxesProps {
  figureCoords: Row;
}

export const useFilledBoxes = ({ figureCoords }: useFilledBoxesProps) => {
  const [filledCoords, setFilledCoords] = useState<Row>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const filteredByRows = [] as Row[];
    const filteredByY = (n: number): Row =>
      filledCoords.filter((item) => item.y === n);

    for (let i = START_BOX; i <= END_ROW; i++) {
      filteredByRows.push(filteredByY(i));
    }

    filteredByRows.some((row) => {
      if (row.length === END_COLUMN) {
        const deleteRowY = row[0].y;

        const withoutDeletedRow = filledCoords.filter(
          (item1) => item1.y !== deleteRowY
        );

        const movedRows = withoutDeletedRow.map((item) =>
          item.y < deleteRowY
            ? {
                x: item.x,
                y: item.y + 1,
              }
            : item
        );

        setFilledCoords(movedRows);
        setScore(score + 10);
      }
    });
  }, [filledCoords, score]);

  const getIsCollisionY = () =>
    figureCoords.some((fig) => {
      const movedY = fig.y + 1;

      const isTouchingBottom = movedY > END_ROW;
      const isTouchingFilled = filledCoords.some(
        (filled) => filled.x === fig.x && filled.y === movedY
      );
      return isTouchingBottom || isTouchingFilled;
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

  return { isCollisionY, isGameOver, filledCoords, score };
};
