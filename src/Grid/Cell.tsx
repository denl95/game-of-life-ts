import { CellState } from '../hooks/useGame';
import React from 'react';
import './Cell.css';

interface CellProps {
  value: CellState
}

const CELL_SIZE = 10;

const Cell = React.memo((props: CellProps) => {
  const { value } = props;
  return (
    <div
      className='cell'
      style={{ backgroundColor: value === 1 ? 'black' : 'white', width: CELL_SIZE, height: CELL_SIZE }}
    />
  );
});

export default Cell;
