import { Board } from "./components/Board";
import { GameControls } from "./components/GameControls";
import { GameInfo } from "./components/GameInfo";
import { useEngine } from "./hooks/useEngine";
import { END_COLUMN, END_ROW } from "./assets/constants";
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
    startGame,
    startGameHandler,
    restartGameHandler,
    rotate,
    win,
    level,
  } = useEngine({
    endColumn: END_COLUMN,
    endRow: END_ROW,
  });

  return (
    <main className="flex flex-col items-center p-8 space-y-4 min-h-screen text-white">
      {!startGame && (
        <Modal
          win={win}
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
