import React, { useMemo } from 'react';
import './App.css';
import { BIG_GRID, LINE_GRID, SQUARE_GRID, STACKED_GRID, THIRD_GRID } from './constants';
import Grid from './Grid/Grid';
import { generateRandomSquareGrid } from './hooks/utils';

function App() {
  const randomGrid = useMemo(() => generateRandomSquareGrid(), []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Life</h1>
      </header>
      <main>
        <Grid initialGrid={SQUARE_GRID} />
        <Grid initialGrid={LINE_GRID} />
        <Grid initialGrid={THIRD_GRID} />
        <Grid initialGrid={STACKED_GRID} />
        <Grid initialGrid={BIG_GRID} />
        <Grid initialGrid={randomGrid} />
      </main>
    </div>
  );
}

export default App;
