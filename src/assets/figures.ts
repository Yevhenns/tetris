export const figures = [
  {
    name: "shortBarHorizontal",
    coords: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    maxX: 2,
    maxY: 1,
  },
  {
    name: "shortBarVertical",
    coords: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ],
    maxX: 1,
    maxY: 2,
  },
  {
    name: "longBarHorizontal",
    coords: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
    ],
    maxX: 4,
    maxY: 1,
  },
  {
    name: "longBarVertical",
    coords: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
    ],
    maxX: 1,
    maxY: 4,
  },
  {
    name: "square",
    coords: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ],
    maxX: 2,
    maxY: 2,
  },
  {
    name: "dot",
    coords: [{ x: 1, y: 1 }],
    maxX: 1,
    maxY: 1,
  },
  {
    name: "angle1",
    coords: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ],
    maxX: 2,
    maxY: 2,
  },
  {
    name: "angle2",
    coords: [
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 1, y: 1 },
    ],
    maxX: 2,
    maxY: 2,
  },
  {
    name: "angle3",
    coords: [
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ],
    maxX: 2,
    maxY: 2,
  },
  {
    name: "angle4",
    coords: [
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ],
    maxX: 2,
    maxY: 2,
  },
];

export type Figure = (typeof figures)[number];
