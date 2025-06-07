import type { FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isVictory: boolean;
  startGameHandler: () => void;
  restartGame: () => void;
  isGameOver: boolean;
}

export const Modal: FC<ModalProps> = ({
  isVictory,
  isGameOver,
  restartGame,
  startGameHandler,
}) => {
  const modalBtn = `px-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition`;

  return (
    <>
      {createPortal(
        <div className="flex items-center justify-center fixed inset-0 bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center space-y-4 min-w-[280px]">
            {isVictory && (
              <div className="flex flex-col items-center space-y-4">
                <p className="text-2xl font-bold text-green-600">🏆 Victory!</p>
                <button onClick={restartGame} className={modalBtn}>
                  Restart
                </button>
              </div>
            )}
            {isGameOver && (
              <div className="flex flex-col items-center space-y-4">
                <p className="text-2xl font-bold text-red-600">🧨 Game Over</p>
                <button onClick={restartGame} className={modalBtn}>
                  Restart
                </button>
              </div>
            )}
            {!isVictory && !isGameOver && (
              <button onClick={startGameHandler} className={modalBtn}>
                Start
              </button>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
