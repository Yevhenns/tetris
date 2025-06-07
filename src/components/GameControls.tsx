import type { FC } from "react";

interface GameControlsProps {
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotate: () => void;
}

export const GameControls: FC<GameControlsProps> = ({
  moveLeft,
  moveRight,
  moveDown,
  rotate,
}) => {
  const btn = `bg-yellow-400 rounded-full w-10 h-10 shadow-md active:shadow-inner active:translate-y-0.5 transition-all`;

  return (
    <>
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-8">
            <button className={btn} onClick={moveLeft}></button>
            <button className={btn} onClick={moveRight}></button>
          </div>
          <div className="mx-auto">
            <button className={btn} onClick={moveDown}></button>
          </div>
        </div>
        <button className={`${btn} w-16 h-16`} onClick={rotate}></button>
      </div>
    </>
  );
};
