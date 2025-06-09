import { useEffect, useState } from "react";
import { useMoveFigure } from "./useMoveFigure";
import { END_ROW } from "../assets/constants";
import { useFilledBoxes } from "./useFilledBoxes";
import { useRandomFigure } from "./useRandomFigure";
import { rotateStick } from "../helpers/rotateStick";
import { useLevel } from "./useLevel";
import { rotateAngle } from "../helpers/rotateAngle";

export const useCreateFigure = () => {
  const [figureCoords, setFigureCoords] = useState<Row>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [figureName, setFigureName] = useState<string>();

  const startGameHandler = () => {
    setIsGameStarted(true);
  };

  const endGameHandler = () => {
    setIsGameStarted(false);
  };

  const rotate = () => {
    if (isCollisionY) return;
    if (figureName === "square" || figureName === "dot") return;
    if (
      figureName === "shortBarHorizontal" ||
      figureName === "shortBarVertical" ||
      figureName === "longBarHorizontal" ||
      figureName === "longBarVertical"
    )
      rotateStick({
        figureCoords,
        setFigureCoords,
        figureName,
        filledCoords,
      });
    if (
      figureName === "angle1" ||
      figureName === "angle2" ||
      figureName === "angle3" ||
      figureName === "angle4"
    )
      rotateAngle({
        figureCoords,
        setFigureCoords,
        figureName,
        filledCoords,
      });
  };

  const {
    isCollisionY,
    isGameOver,
    filledCoords,
    score,
    restartGame,
    isVictory,
  } = useFilledBoxes({
    figureCoords,
    endGameHandler,
  });
  const { fastMoveDownHandler, level, speed } = useLevel({
    score,
    isGameStarted,
  });
  const { figure, generateRandomFigure } = useRandomFigure();
  const { moveLeft, moveRight, moveDown } = useMoveFigure({
    setFigureCoords,
    figureCoords,
    filledCoords,
    isCollisionY,
    fastMoveDownHandler,
    rotate,
  });

  const restartGameHandler = () => {
    restartGame();
    setIsGameStarted(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(() => {
        setFigureCoords((prevCoords) => {
          if (!isCollisionY && prevCoords.some((item) => item.y < END_ROW)) {
            return prevCoords.map((item) => ({ x: item.x, y: item.y + 1 }));
          } else {
            generateRandomFigure();

            if (figure?.maxY) {
              setFigureName(figure?.name);
              const startX = 4;
              return figure?.coords.map(({ x, y }) => ({
                x: x + startX,
                y: y - figure.maxY + 1,
              }));
            }

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
  }, [isCollisionY, isGameOver, speed, figure?.coords, isGameStarted]);

  useEffect(() => {
    if (isGameOver) {
      setIsGameStarted(false);
    }
  }, [isGameOver]);

  return {
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    isGameStarted,
    startGameHandler,
    restartGameHandler,
    rotate,
    isVictory,
    level,
  };
};
