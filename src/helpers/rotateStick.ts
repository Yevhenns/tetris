import { END_COLUMN } from "../assets/constants";

interface RotateStickProps {
  figureCoords: Row;
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
  figureName: string;
}

interface checkOrientationProps {
  figureCoords: Row;
  coord: "x" | "y";
  figureName: string;
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
}

const checkOrientation = ({
  figureCoords,
  coord,
  figureName,
  setFigureCoords,
}: checkOrientationProps) => {
  const isOutOfRightBorder = (figure: Row) =>
    figure.some((item) => item.x === END_COLUMN + 1);

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
    !isOutOfRightBorder(rotatedShortStick)
  )
    setFigureCoords(rotatedShortStick);
  if (
    (figureName === "longBarHorizontal" || figureName === "longBarVertical") &&
    !isOutOfRightBorder(rotatedLongStick)
  ) {
    setFigureCoords(rotatedLongStick);
  }
};

export const rotateStick = ({
  figureCoords,
  setFigureCoords,
  figureName,
}: RotateStickProps) => {
  if (figureCoords.every((item) => item.x === figureCoords[0].x)) {
    checkOrientation({ figureCoords, setFigureCoords, figureName, coord: "x" });
    return;
  }
  if (figureCoords.every((item) => item.y === figureCoords[0].y))
    checkOrientation({ figureCoords, setFigureCoords, figureName, coord: "y" });
};
