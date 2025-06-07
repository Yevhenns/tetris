import { Board } from "./components/Board";
import { GameControls } from "./components/GameControls";
import { GameInfo } from "./components/GameInfo";
import { useEngine } from "./hooks/useEngine";
import { Modal } from "./components/Modal";

function App() {
  const {
    board,
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
    moveDown,
    isGameStarted,
    startGameHandler,
    restartGameHandler,
    rotate,
    isVictory,
    level,
  } = useEngine();

  return (
    <main className="flex flex-col items-center p-8 space-y-4 min-h-screen text-white">
      {!isGameStarted && (
        <Modal
          isVictory={isVictory}
          startGameHandler={startGameHandler}
          restartGame={restartGameHandler}
          isGameOver={isGameOver}
        />
      )}
      <div className="flex gap-4 mb-24">
        <Board
          board={board}
          figureCoords={figureCoords}
          filledCoords={filledCoords}
        />
        <GameInfo
          isGameOver={isGameOver}
          figure={figure}
          score={score}
          level={level}
        />
      </div>
      <GameControls
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveDown={moveDown}
        rotate={rotate}
      />
    </main>
  );
}

export default App;
