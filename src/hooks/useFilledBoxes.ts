import { useEffect, useState } from "react";
import {
  END_COLUMN,
  END_ROW,
  SCORE_STEP,
  START_BOX,
  VICTORY_SCORE,
} from "../assets/constants";
import { levels } from "../assets/levels";

interface useFilledBoxesProps {
  figureCoords: Row;
  endGameHandler: () => void;
}

export const useFilledBoxes = ({
  figureCoords,
  endGameHandler,
}: useFilledBoxesProps) => {
  const [filledCoords, setFilledCoords] = useState<Row>([]);
  const [score, setScore] = useState(levels[0].score);
  const [isVictory, setIsVictory] = useState(false);

  const restartGame = () => {
    setFilledCoords([]);
    setScore(levels[0].score);
    setIsVictory(false);
  };

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

  const isGameOver = filledCoords.some((item) => item.y === 1);

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
        setScore(score + SCORE_STEP);
      }
    });
  }, [filledCoords, score]);

  useEffect(() => {
    if (isCollisionY || figureCoords.some((item) => item.y === END_ROW)) {
      setFilledCoords((prev) => {
        return [...prev, ...figureCoords];
      });
    }
  }, [figureCoords, isCollisionY]);

  useEffect(() => {
    if (score === VICTORY_SCORE) {
      setIsVictory(true);
      endGameHandler();
    }
  }, [endGameHandler, score, setIsVictory]);

  return {
    isCollisionY,
    isGameOver,
    filledCoords,
    score,
    restartGame,
    isVictory,
  };
};
