import { useEffect, useState } from "react";
import { figures } from "../assets/figures";

export const useRandomFigure = () => {
  const [figure, setFigure] = useState<(typeof figures)[number] | null>(null);

  const generateRandomFigure = () => {
    const randomIndex = Math.floor(Math.random() * figures.length);
    setFigure(figures[randomIndex]);
  };

  useEffect(() => {
    generateRandomFigure();
  }, []);

  return { figure, generateRandomFigure };
};
