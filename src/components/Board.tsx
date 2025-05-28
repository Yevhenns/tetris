import type { FC } from "react";

interface BoardProps {
  board: Board | undefined;
  figureCoords: Row;
  filledCoords: Row;
}

export const Board: FC<BoardProps> = ({
  board,
  figureCoords,
  filledCoords,
}) => {
  const isActiveFigure = (x: number, y: number) => {
    return figureCoords.some((item) => item.x === x && item.y === y);
  };

  const isFilledBoard = (x: number, y: number) => {
    return filledCoords.some((item) => item.x === x && item.y === y);
  };

  return (
    <div className="border-4 border-gray-700 bg-black p-2 rounded">
      {board?.map((row, index) => (
        <div key={index} className="flex justify-between">
          {row.map((box, idx) => (
            <div
              key={idx}
              className={`w-6 h-6 border border-gray-800
                  ${
                    isActiveFigure(box.x, box.y)
                      ? "bg-red-500 animate-pulse"
                      : ""
                  }
                  ${
                    isFilledBoard(box.x, box.y) ? "bg-green-600" : "bg-gray-800"
                  }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
