import type { FC } from "react";
import type { Figure } from "../assets/figures";

interface GameInfoProps {
  isGameOver: boolean;
  figure: Figure | null;
  score: number;
}

export const GameInfo: FC<GameInfoProps> = ({ isGameOver, figure, score }) => {
  return (
    <>
      <div className="text-xl font-bold">
        {isGameOver ? "🧨 Game Over" : `🎮 Next: ${figure?.name}`}
      </div>
      <p className="text-lg">🏆 Score: {score}</p>
    </>
  );
};
