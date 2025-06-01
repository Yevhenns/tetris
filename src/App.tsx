import { useRef, useState } from "react";
import { Board } from "./components/Board";
import { GameControls } from "./components/GameControls";
import { GameInfo } from "./components/GameInfo";
import { Level } from "./components/Level";
import { useEngine } from "./hooks/useEngine";
import { END_COLUMN, END_ROW } from "./assets/constants";

function App() {
  const [speed, setSpeed] = useState(500);
  const prevSpeedRef = useRef(speed);

  const speedHandler = (speedCount: number) => {
    prevSpeedRef.current = speedCount;
    setSpeed(speedCount);
  };

  const fastMoveDownHandler = (condition: boolean) => {
    if (!condition) {
      setSpeed(30);
    }
    if (condition) {
      setSpeed(prevSpeedRef.current);
    }
  };

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
    startGameHandler,
  } = useEngine({
    speed,
    fastMoveDownHandler,
    endColumn: END_COLUMN,
    endRow: END_ROW,
  });

  return (
    <main className="flex flex-col items-center p-8 space-y-4 min-h-screen text-white">
      <Level speedHandler={speedHandler} startGameHandler={startGameHandler} />
      <GameInfo isGameOver={isGameOver} figure={figure} score={score} />
      <Board
        board={board}
        figureCoords={figureCoords}
        filledCoords={filledCoords}
      />
      <GameControls
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveDown={moveDown}
      />
    </main>
  );
}

export default App;
