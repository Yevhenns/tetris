import { useEffect } from "react";

interface useMoveFigureProps {
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
}
export const useMoveFigure = ({ setFigureCoords }: useMoveFigureProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setFigureCoords((prev) => {
        if (e.code === "ArrowLeft") {
          if (prev.some((item) => item.x === 1)) return prev;
          else {
            return prev.map((item) => ({ x: item.x - 1, y: item.y }));
          }
        }
        if (e.code === "ArrowRight") {
          if (prev.some((item) => item.x === 10)) return prev;
          else {
            return prev.map((item) => ({ x: item.x + 1, y: item.y }));
          }
        }
        return prev;
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setFigureCoords]);
};
