import { useEffect, useRef, useState } from "react";
import { FAST_SPEED } from "../assets/constants";
import { levels } from "../assets/levels";

interface useLevelProps {
  score: number;
  isGameStarted: boolean;
}

export const useLevel = ({ score, isGameStarted }: useLevelProps) => {
  const [level, setLevel] = useState(levels[0].level);
  const [speed, setSpeed] = useState(levels[0].speed);

  const prevSpeedRef = useRef(speed);

  const speedHandler = (speedCount: number) => {
    prevSpeedRef.current = speedCount;
    setSpeed(speedCount);
  };

  const fastMoveDownHandler = (condition: boolean) => {
    if (!isGameStarted) return;
    if (!condition) {
      setSpeed(FAST_SPEED);
    }
    if (condition) {
      setSpeed(prevSpeedRef.current);
    }
  };

  useEffect(() => {
    const nextLevel = levels.find((level) => level.score === score);

    if (nextLevel) {
      setLevel(nextLevel.level);
      speedHandler(nextLevel.speed);
    }
  }, [score]);

  return { level, speed, fastMoveDownHandler };
};
