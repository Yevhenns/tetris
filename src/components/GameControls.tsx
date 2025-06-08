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
  const btn = `bg-yellow-400 hover:bg-yellow-300 text-black
  rounded-full w-16 h-16 shadow-[0_4px_15px_rgba(255,255,255,0.2)]
  hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)] active:shadow-inner
  active:translate-y-1 transition-all duration-200 ease-in-out`;

  return (
    <div className="flex items-center gap-16">
      <div className="flex flex-col gap-6">
        <div className="flex gap-12">
          <button className={btn} onClick={moveLeft}></button>
          <button className={btn} onClick={moveRight}></button>
        </div>
        <div className="mx-auto">
          <button className={btn} onClick={moveDown}></button>
        </div>
      </div>
      <button className={`${btn} w-24 h-24`} onClick={rotate}></button>
    </div>
  );
};
