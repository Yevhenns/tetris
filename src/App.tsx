import { Board } from "./components/Board";
import { GameControls } from "./components/GameControls";
import { useEngine } from "./hooks/useEngine";

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
  } = useEngine();

  return (
    <main className="flex flex-col items-center p-8 space-y-4 min-h-screen text-white">
      <div className="text-xl font-bold">
        {isGameOver ? "🧨 Game Over" : `🎮 Next: ${figure?.name}`}
      </div>
      <p className="text-lg">🏆 Score: {score}</p>
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
