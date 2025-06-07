import { useEffect, useRef, useState } from "react";
import { levels } from "../assets/constants";

interface useLevelProps {
  score: number;
  startGame: boolean;
}

export const useLevel = ({ score, startGame }: useLevelProps) => {
  const [level, setLevel] = useState(levels[0].level);
  const [speed, setSpeed] = useState(levels[0].speed);

  const prevSpeedRef = useRef(speed);

  const speedHandler = (speedCount: number) => {
    prevSpeedRef.current = speedCount;
    setSpeed(speedCount);
  };

  const fastMoveDownHandler = (condition: boolean) => {
    if (!startGame) return;
    if (!condition) {
      setSpeed(30);
    }
    if (condition) {
      setSpeed(prevSpeedRef.current);
    }
  };

  useEffect(() => {
    if (score === 50) {
      setLevel(2);
      speedHandler(400);
    }
    if (score === 100) {
      setLevel(3);
      speedHandler(300);
    }
    if (score === 150) {
      setLevel(4);
      speedHandler(200);
    }
    if (score === 0) {
      setLevel(1);
      speedHandler(500);
    }
  }, [score]);

  return { level, speed, fastMoveDownHandler };
};
