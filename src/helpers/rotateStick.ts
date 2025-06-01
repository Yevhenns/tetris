interface RotateStickProps {
  figureCoords: Row;
  setFigureCoords: React.Dispatch<React.SetStateAction<Row>>;
  figureName: string;
}

export const rotateStick = ({
  figureCoords,
  setFigureCoords,
  figureName,
}: RotateStickProps) => {
  if (figureCoords.every((item) => item.x === figureCoords[0].x)) {
    const firstBox = figureCoords[0];
    const { x, y } = firstBox;
    const rotatedShortStick: Row = [
      { x: x, y: y },
      { x: x + 1, y: y },
    ];
    const rotatedLongStick: Row = [
      { x: x, y: y },
      { x: x + 1, y: y },
      { x: x + 2, y: y },
      { x: x + 3, y: y },
    ];
    if (
      figureName === "shortBarHorizontal" ||
      figureName === "shortBarVertical"
    )
      setFigureCoords(rotatedShortStick);
    if (figureName === "longBarHorizontal" || figureName === "longBarVertical")
      setFigureCoords(rotatedLongStick);
  }

  if (figureCoords.every((item) => item.y === figureCoords[0].y)) {
    const firstBox = figureCoords[0];
    const { x, y } = firstBox;
    const rotatedShortStick: Row = [
      { x: x, y: y },
      { x: x, y: y + 1 },
    ];
    const rotatedLongStick: Row = [
      { x: x, y: y },
      { x: x, y: y + 1 },
      { x: x, y: y + 2 },
      { x: x, y: y + 3 },
    ];
    if (
      figureName === "shortBarHorizontal" ||
      figureName === "shortBarVertical"
    )
      setFigureCoords(rotatedShortStick);
    if (figureName === "longBarHorizontal" || figureName === "longBarVertical")
      setFigureCoords(rotatedLongStick);
  }
};
