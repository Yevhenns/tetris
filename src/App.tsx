import { useCreateBoard } from "./hooks/useCreateBoard";
import { useCreateFigure } from "./hooks/useCreateFigure";

function App() {
  const { board } = useCreateBoard();
  const { figureCoords, filledCoords, isGameOver, figure, score } =
    useCreateFigure();

  const isActiveFigure = (x: number, y: number) => {
    return figureCoords.some((item) => item.x === x && item.y === y);
  };

  const isFilledBoard = (x: number, y: number) => {
    return filledCoords.some((item) => item.x === x && item.y === y);
  };

  return (
    <main>
      {isGameOver && <p>Game over</p>}
      {!isGameOver && <p>Next: {figure?.name}</p>}
      <p>Score: {score}</p>
      <div className="border-2">
        {board?.map((row, index) => (
          <div key={index} className="flex justify-between">
            {row.map((box, idx) => (
              <div
                key={idx}
                className={`p-2 w-6 h-6
                  ${isActiveFigure(box.x, box.y) ? "bg-red-500" : ""}
                  ${isFilledBoard(box.x, box.y) ? "bg-green-500" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
