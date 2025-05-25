import { useEffect } from "react";
import { END_COLUMN, START_BOX } from "../assets/constants";

interface useMoveFigureProps {
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
  figureCoords: Row;
  filledCoords: Row;
}

export const useMoveFigure = ({
  setFigureCoords,
  figureCoords,
  filledCoords,
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setFigureCoords((prev) => {
        if (e.code === "ArrowLeft") {
          if (isCollisionMinusX || prev.some((item) => item.x === START_BOX))
            return prev;
          else {
            return prev.map((item) => ({ x: item.x - 1, y: item.y }));
          }
        }
        if (e.code === "ArrowRight") {
          if (isCollisionPlusX || prev.some((item) => item.x === END_COLUMN))
            return prev;
          else {
            return prev.map((item) => ({ x: item.x + 1, y: item.y }));
          }
        }
        if (e.code === "Space") {
          console.log("rotate");
        }
        return prev;
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCollisionMinusX, isCollisionPlusX, setFigureCoords]);
};
