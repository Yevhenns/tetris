import { useEffect, useState } from "react";
import { COLUMNS, ROWS } from "../assets/constants";

export const useCreateBoard = () => {
  const [board, setBoard] = useState<Board>();

  const createRow = (y: number) => {
    const row = [] as Row;

    for (let i = 1; i <= COLUMNS; i++) {
      const rowObject = {
        x: i,
        y: y,
      };
      row.push(rowObject);
    }

    return row;
  };

  const createBoard = () => {
    const board = [] as Board;

    for (let i = 1; i <= ROWS; i++) {
      board.push(createRow(i));
    }

    return board;
  };

  useEffect(() => {
    setBoard(createBoard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { board };
};
