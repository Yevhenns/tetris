import { useEffect, useState } from "react";

interface useCreateBoard {
  endColumn: number;
  endRow: number;
}

export const useCreateBoard = ({ endColumn, endRow }: useCreateBoard) => {
  const [board, setBoard] = useState<Board>();

  const createRow = (y: number) => {
    const row = [] as Row;

    for (let i = 1; i <= endColumn; i++) {
      const rowObject = {
        x: i,
        y: y,
      };
      row.push(rowObject);
    }

    return row;
  };

  useEffect(() => {
    if (endColumn > 0) {
      const createBoard = () => {
        const board = [] as Board;

        for (let i = 1; i <= endRow; i++) {
          board.push(createRow(i));
        }

        return board;
      };
      setBoard(createBoard());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endColumn]);

  return { board };
};
