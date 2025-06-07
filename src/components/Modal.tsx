import type { FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  win: boolean;
  startGameHandler: () => void;
  restartGame: () => void;
  isGameOver: boolean;
}

export const Modal: FC<ModalProps> = ({
  win,
  isGameOver,
  restartGame,
  startGameHandler,
}) => {
  return (
    <>
      {createPortal(
        <div className="flex items-center justify-center fixed left-0 right-0 w-full h-full bg-gray-400 opacity-60">
          <div className="bg-gray-400">
            {win && (
              <div className="flex flex-col">
                <p>WIN</p>
                <button onClick={restartGame}>Restart</button>
              </div>
            )}
            {isGameOver && (
              <div className="flex flex-col">
                <p>🧨 Game Over</p>
                <button onClick={restartGame}>Restart</button>
              </div>
            )}
            {!win && !isGameOver && (
              <button onClick={startGameHandler}>Start</button>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
