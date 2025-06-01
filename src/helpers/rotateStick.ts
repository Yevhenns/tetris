import { END_COLUMN, END_ROW } from "../assets/constants";

interface RotateStickProps {
  figureCoords: Row;
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
  figureName: string;
  filledCoords: Row;
}

interface checkOrientationProps extends RotateStickProps {
  coord: "x" | "y";
}

const checkOrientation = ({
  figureCoords,
  coord,
  figureName,
  setFigureCoords,
  filledCoords,
}: checkOrientationProps) => {
  const getIsCollisionY = (figure: Row) =>
    figure.some((fig) => {
      const isTouchingBottom = fig.y === END_ROW;
      const isTouchingFilled = filledCoords.some(
        (filled) => filled.x === fig.x && filled.y === fig.y
      );
      return isTouchingBottom || isTouchingFilled;
    });

  const getIsCollisionPlusX = (figure: Row) =>
    figure.some((fig) => {
      return filledCoords.some(
        (filled) => filled.y === fig.y && filled.x === fig.x
      );
    });

  const isOutOfBorder = (figure: Row) =>
    figure.some((item) => item.x === END_COLUMN + 1) ||
    getIsCollisionY(figure) ||
    getIsCollisionPlusX(figure);

  const firstBox = figureCoords[0];
  const { x, y } = firstBox;
  const rotatedShortStick: Row =
    coord === "x"
      ? [
          { x: x, y: y },
          { x: x + 1, y: y },
        ]
      : [
          { x: x, y: y },
          { x: x, y: y + 1 },
        ];

  const rotatedLongStick: Row =
    coord === "x"
      ? [
          { x: x, y: y },
          { x: x + 1, y: y },
          { x: x + 2, y: y },
          { x: x + 3, y: y },
        ]
      : [
          { x: x, y: y },
          { x: x, y: y + 1 },
          { x: x, y: y + 2 },
          { x: x, y: y + 3 },
        ];
  if (
    (figureName === "shortBarHorizontal" ||
      figureName === "shortBarVertical") &&
    !isOutOfBorder(rotatedShortStick)
  )
    setFigureCoords(rotatedShortStick);
  if (
    (figureName === "longBarHorizontal" || figureName === "longBarVertical") &&
    !isOutOfBorder(rotatedLongStick)
  ) {
    setFigureCoords(rotatedLongStick);
  }
};

export const rotateStick = ({
  figureCoords,
  setFigureCoords,
  figureName,
  filledCoords,
}: RotateStickProps) => {
  if (figureCoords.every((item) => item.x === figureCoords[0].x)) {
    checkOrientation({
      figureCoords,
      setFigureCoords,
      figureName,
      coord: "x",
      filledCoords,
    });
    return;
  }
  if (figureCoords.every((item) => item.y === figureCoords[0].y))
    checkOrientation({
      figureCoords,
      setFigureCoords,
      figureName,
      coord: "y",
      filledCoords,
    });
};
