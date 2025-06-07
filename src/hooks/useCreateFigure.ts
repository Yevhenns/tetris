import { useEffect, useState } from "react";
import { useMoveFigure } from "./useMoveFigure";
import { END_ROW } from "../assets/constants";
import { useFilledBoxes } from "./useFilledBoxes";
import { useRandomFigure } from "./useRandomFigure";
import { rotateStick } from "../helpers/rotateStick";
import { useLevel } from "./useLevel";

export const useCreateFigure = () => {
  const [figureCoords, setFigureCoords] = useState<Row>([]);
  const [startGame, setStartGame] = useState(false);
  const [figureName, setFigureName] = useState<string>();

  const startGameHandler = () => {
    setStartGame(true);
  };

  const endGameHandler = () => {
    setStartGame(false);
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
  };

  const { isCollisionY, isGameOver, filledCoords, score, restartGame, win } =
    useFilledBoxes({
      figureCoords,
      endGameHandler,
    });
  const { fastMoveDownHandler, level, speed } = useLevel({ score, startGame });
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
    setStartGame(true);
  };

  useEffect(() => {
    if (startGame) {
      const interval = setInterval(() => {
        setFigureCoords((prevCoords) => {
          if (!isCollisionY && prevCoords.some((item) => item.y < END_ROW)) {
            return prevCoords.map((item) => ({ x: item.x, y: item.y + 1 }));
          } else {
            generateRandomFigure();

            if (figure?.maxY) {
              setFigureName(figure?.name);
              return figure?.coords.map(({ x, y }) => ({
                x: x + 4,
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
  }, [isCollisionY, isGameOver, speed, figure?.coords, startGame]);

  useEffect(() => {
    if (isGameOver) {
      setStartGame(false);
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
    startGame,
    startGameHandler,
    restartGameHandler,
    rotate,
    win,
    level,
  };
};
