import { useState, type FC } from "react";

interface LevelProps {
  speedHandler: (speedCount: number) => void;
  startGameHandler: () => void;
}

export const Level: FC<LevelProps> = ({ speedHandler, startGameHandler }) => {
  const [level, setLevel] = useState(1);

  return (
    <>
      <p>Level: {level}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            speedHandler(500);
            setLevel(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            speedHandler(400);
            setLevel(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            speedHandler(300);
            setLevel(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            speedHandler(200);
            setLevel(4);
          }}
        >
          4
        </button>
      </div>
      <button onClick={startGameHandler}>Start</button>
    </>
  );
};
