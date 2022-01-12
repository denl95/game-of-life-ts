import { CellState, GridType } from './useGame';

const MAX_CELL_NUMBER = 50;
export const generateRandomSquareGrid = () => {
  const grid: GridType = [];
  for (let i = 0; i < MAX_CELL_NUMBER; i++) {
    grid.push(Array.from({ length: MAX_CELL_NUMBER }, () => (Math.floor(Math.random() * 2)) as CellState))
  }
  return grid;
};

export const calculateNextGrid = (grid: GridType) => {
  const nextGrid: GridType = [];
  for (let i = 0; i < grid.length; i++) {
    nextGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      let aliveNeighbours = 0;
      for (let l = -1; l <= 1; l++) {
        for (let m = -1; m <= 1; m++) {
          if (l + i < 0 || m + j < 0 || m + j >= grid.length || l + i >= grid.length) {
            continue;
          }
          aliveNeighbours += grid[l + i][m + j];
        }
      }

      const currentCell = grid[i][j];
      aliveNeighbours -= currentCell;
      if (((currentCell === 1) && (aliveNeighbours < 2)) || ((currentCell === 1) && (aliveNeighbours > 3))) {
        nextGrid[i].push(0);
      } else if ((currentCell === 0) && (aliveNeighbours === 3)) {
        nextGrid[i].push(1);
      } else {
        nextGrid[i].push(currentCell);
      }
    }
  }
  return nextGrid;
};
