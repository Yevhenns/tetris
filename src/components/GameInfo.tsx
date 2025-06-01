import type { FC } from "react";
import type { Figure } from "../assets/figures";
import { useCreateBoard } from "../hooks/useCreateBoard";

interface GameInfoProps {
  isGameOver: boolean;
  figure: Figure | null;
  score: number;
}

export const GameInfo: FC<GameInfoProps> = ({ isGameOver, figure, score }) => {
  const { board } = useCreateBoard({
    endColumn: figure?.maxX || 0,
    endRow: figure?.maxY || 0,
  });

  const isActiveFigure = (x: number, y: number) => {
    return figure?.coords.some((item) => item.x === x && item.y === y);
  };

  return (
    <>
      <div className="text-xl font-bold">
        {isGameOver ? "🧨 Game Over" : "🎮 Next:"}
      </div>
      <div className="h-24">
        {!isGameOver &&
          board?.map((row, index) => (
            <div key={index} className="flex justify-between">
              {row.map((box, idx) => (
                <div
                  key={idx}
                  className={`w-6 h-6 border border-gray-800
                  ${isActiveFigure(box.x, box.y) ? "bg-red-500" : ""}
                `}
                />
              ))}
            </div>
          ))}
      </div>
      <p className="text-lg">🏆 Score: {score}</p>
    </>
  );
};
