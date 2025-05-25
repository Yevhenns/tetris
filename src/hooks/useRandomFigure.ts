import { useEffect, useState } from "react";
import { figures, type Figure } from "../assets/figures";

export const useRandomFigure = () => {
  const [figure, setFigure] = useState<Figure | null>(null);

  const generateRandomFigure = () => {
    const randomIndex = Math.floor(Math.random() * figures.length);
    setFigure(figures[randomIndex]);
  };

  useEffect(() => {
    generateRandomFigure();
  }, []);

  return { figure, generateRandomFigure };
};
