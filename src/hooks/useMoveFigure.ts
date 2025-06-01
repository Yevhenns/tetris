import { useEffect } from "react";
import { END_COLUMN, START_BOX } from "../assets/constants";

interface useMoveFigureProps {
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
  figureCoords: Row;
  filledCoords: Row;
  isCollisionY: boolean;
  fastMoveDownHandler: (condition: boolean) => void;
  rotate: () => void;
}

export const useMoveFigure = ({
  setFigureCoords,
  figureCoords,
  filledCoords,
  isCollisionY,
  fastMoveDownHandler,
  rotate,
}: useMoveFigureProps) => {
  const getIsCollisionMinusX = () =>
    figureCoords.some((fig) => {
      const movedMinusX = fig.x - 1;

      return filledCoords.some(
        (filled) => filled.y === fig.y && filled.x === movedMinusX
      );
    });

  const getIsCollisionPlusX = () =>
    figureCoords.some((fig) => {
      const movedPlusX = fig.x + 1;

      return filledCoords.some(
        (filled) => filled.y === fig.y && filled.x === movedPlusX
      );
    });

  const isCollisionMinusX = getIsCollisionMinusX();
  const isCollisionPlusX = getIsCollisionPlusX();

  const moveLeft = () => {
    setFigureCoords((prev) => {
      if (
        isCollisionY ||
        isCollisionMinusX ||
        prev.some((item) => item.x === START_BOX)
      )
        return prev;
      else {
        return prev.map((item) => ({ x: item.x - 1, y: item.y }));
      }
    });
  };

  const moveRight = () => {
    setFigureCoords((prev) => {
      if (
        isCollisionY ||
        isCollisionPlusX ||
        prev.some((item) => item.x === END_COLUMN)
      )
        return prev;
      else {
        return prev.map((item) => ({ x: item.x + 1, y: item.y }));
      }
    });
  };

  const moveDown = () => {
    fastMoveDownHandler(isCollisionY);
  };

  useEffect(() => {
    if (isCollisionY) {
      fastMoveDownHandler(true);
    }
  }, [fastMoveDownHandler, isCollisionY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setFigureCoords((prev) => {
        if (e.code === "ArrowLeft") {
          if (
            isCollisionY ||
            isCollisionMinusX ||
            prev.some((item) => item.x === START_BOX)
          )
            return prev;
          else {
            return prev.map((item) => ({ x: item.x - 1, y: item.y }));
          }
        }
        if (e.code === "ArrowRight") {
          if (
            isCollisionY ||
            isCollisionPlusX ||
            prev.some((item) => item.x === END_COLUMN)
          )
            return prev;
          else {
            return prev.map((item) => ({ x: item.x + 1, y: item.y }));
          }
        }
        if (e.code === "ArrowDown") {
          fastMoveDownHandler(isCollisionY);
        }
        if (e.code === "Space") {
          rotate();
        }
        return prev;
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isCollisionMinusX,
    isCollisionPlusX,
    isCollisionY,
    setFigureCoords,
    fastMoveDownHandler,
    rotate,
  ]);

  return { moveLeft, moveRight, moveDown };
};
