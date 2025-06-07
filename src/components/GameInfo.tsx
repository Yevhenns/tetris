import type { FC } from "react";
import type { Figure } from "../assets/figures";
import { useCreateBoard } from "../hooks/useCreateBoard";

interface GameInfoProps {
  isGameOver: boolean;
  figure: Figure | null;
  score: number;
  level: number;
}

export const GameInfo: FC<GameInfoProps> = ({
  isGameOver,
  figure,
  score,
  level,
}) => {
  const { board } = useCreateBoard({
    endColumn: figure?.maxX || 0,
    endRow: figure?.maxY || 0,
  });

  const isActiveFigure = (x: number, y: number) => {
    return figure?.coords.some((item) => item.x === x && item.y === y);
  };

  return (
    <div>
      <p className="text-lg">🏆 Score: {score}</p>
      <p>Level: {level}</p>
      <div className="w-16 h-16">
        {!isGameOver &&
          board?.map((row, index) => (
            <div key={index} className="flex">
              {row.map((box, idx) => (
                <div
                  key={idx}
                  className={`w-4 h-4 border border-gray-800
                  ${isActiveFigure(box.x, box.y) ? "bg-red-500" : ""}
                `}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
