import { calculateNextGrid } from './utils';
import { GridType } from './useGame';
import { LINE_GRID, SQUARE_GRID, STACKED_GRID, THIRD_GRID } from '../constants';

const grids: GridType[] = [
  SQUARE_GRID,
  LINE_GRID,
  THIRD_GRID,
  STACKED_GRID,
];

const updatedGrids: GridType[] = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],
]

test('calculateNextGrid', () => {
  grids.forEach((grid, i) =>
    expect(calculateNextGrid(grid)).toEqual(updatedGrids[i])
  )
})