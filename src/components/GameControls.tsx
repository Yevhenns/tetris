import type { FC } from "react";

interface GameControlsProps {
  moveLeft: () => void;
  moveRight: () => void;
}

export const GameControls: FC<GameControlsProps> = ({
  moveLeft,
  moveRight,
}) => {
  return (
    <div className="flex gap-4">
      <button onClick={moveLeft}>Left</button>
      <button onClick={moveRight}>Right</button>
    </div>
  );
};
