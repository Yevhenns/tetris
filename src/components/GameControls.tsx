import type { FC } from "react";

interface GameControlsProps {
  startGameHandler: () => void;
  restartGame: () => void;
  isGameOver: boolean;
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotate: () => void;
}

export const GameControls: FC<GameControlsProps> = ({
  startGameHandler,
  restartGame,
  isGameOver,
  moveLeft,
  moveRight,
  moveDown,
  rotate,
}) => {
  return (
    <>
      {isGameOver ? (
        <button onClick={restartGame}>Restart</button>
      ) : (
        <button onClick={startGameHandler}>Start</button>
      )}
      <button onClick={rotate}>Rotate</button>
      <div className="flex gap-4">
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveDown}>Down</button>
        <button onClick={moveRight}>Right</button>
      </div>
    </>
  );
};
