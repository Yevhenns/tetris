import { useState } from "react";
import { Board } from "./components/Board";
import { GameControls } from "./components/GameControls";
import { GameInfo } from "./components/GameInfo";
import { Level } from "./components/Level";
import { useEngine } from "./hooks/useEngine";

function App() {
  const [speed, setSpeed] = useState(500);

  const {
    board,
    figureCoords,
    filledCoords,
    isGameOver,
    figure,
    score,
    moveLeft,
    moveRight,
  } = useEngine({ speed });

  const speedHandler = (speedCount: number) => {
    setSpeed(speedCount);
  };

  return (
    <main className="flex flex-col items-center p-8 space-y-4 min-h-screen text-white">
      <Level speedHandler={speedHandler} />
      <GameInfo isGameOver={isGameOver} figure={figure} score={score} />
      <Board
        board={board}
        figureCoords={figureCoords}
        filledCoords={filledCoords}
      />
      <GameControls moveLeft={moveLeft} moveRight={moveRight} />
    </main>
  );
}

export default App;
