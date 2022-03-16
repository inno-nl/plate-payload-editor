import { nanoid } from "nanoid";

export const initialFlatListValue = [
  {
    type: "block",
    depth: 0,
    id: nanoid(),
    children: [
      {
        text: "block 1"
      }
    ]
  },
  {
    type: "block",
    depth: 0,
    id: nanoid(),
    children: [
      {
        text: "block 2"
      }
    ]
  },
  {
    type: "block",
    depth: 0,
    id: nanoid(),
    children: [
      {
        text: "block 3"
      }
    ]
  }
];
