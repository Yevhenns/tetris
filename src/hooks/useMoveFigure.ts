import { useEffect } from "react";
import { END_COLUMN, START_BOX } from "../assets/constants";

interface useMoveFigureProps {
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
}
export const useMoveFigure = ({ setFigureCoords }: useMoveFigureProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setFigureCoords((prev) => {
        if (e.code === "ArrowLeft") {
          if (prev.some((item) => item.x === START_BOX)) return prev;
          else {
            return prev.map((item) => ({ x: item.x - 1, y: item.y }));
          }
        }
        if (e.code === "ArrowRight") {
          if (prev.some((item) => item.x === END_COLUMN)) return prev;
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
  }, [setFigureCoords]);
};
