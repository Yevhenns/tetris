import { useEffect, useState } from "react";
import { END_COLUMN, END_ROW } from "../assets/constants";

export const useCreateBoard = () => {
  const [board, setBoard] = useState<Board>();

  const createRow = (y: number) => {
    const row = [] as Row;

    for (let i = 1; i <= END_COLUMN; i++) {
      const rowObject = {
        x: i,
        y: y,
      };
      row.push(rowObject);
    }

    return row;
  };

  useEffect(() => {
    const createBoard = () => {
      const board = [] as Board;

      for (let i = 1; i <= END_ROW; i++) {
        board.push(createRow(i));
      }

      return board;
    };
    setBoard(createBoard());
  }, []);

  return { board };
};
