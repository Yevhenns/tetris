import { type FC } from "react";

interface LevelProps {
  speedHandler: (speedCount: number) => void;
}

export const Level: FC<LevelProps> = ({ speedHandler }) => {
  return (
    <>
      <p>Level</p>
      <div className="flex gap-2">
        <button onClick={() => speedHandler(500)}>1</button>
        <button onClick={() => speedHandler(400)}>2</button>
        <button onClick={() => speedHandler(300)}>3</button>
        <button onClick={() => speedHandler(200)}>4</button>
      </div>
    </>
  );
};
