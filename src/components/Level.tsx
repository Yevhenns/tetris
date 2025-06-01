import { useState, type FC } from "react";

interface LevelProps {
  speedHandler: (speedCount: number) => void;
}

export const Level: FC<LevelProps> = ({ speedHandler }) => {
  const [level, setLevel] = useState(1);

  const setLevelHandler = (speed: number, level: number) => {
    speedHandler(speed);
    setLevel(level);
  };

  return (
    <>
      <p>Level: {level}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setLevelHandler(500, 1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setLevelHandler(400, 2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setLevelHandler(300, 3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setLevelHandler(200, 4);
          }}
        >
          4
        </button>
      </div>
    </>
  );
};
