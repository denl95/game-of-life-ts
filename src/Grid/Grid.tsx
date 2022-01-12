import React, { useEffect, useRef } from 'react';
import useGame, { GridType } from '../hooks/useGame';
import Cell from './Cell';
import './Grid.css';

interface GridProps {
  initialGrid: GridType
}

const Grid = (props: GridProps) => {
  const { state, actions } = useGame({ grid: props.initialGrid });
  const { grid } = state;
  const requestID = useRef(0);

  const tick = () => {
    const delay = 1000 / 30;
    const start = new Date().getTime();
    actions.updateGame();

    let end = new Date().getTime();
    let delta = end - start;
    while (delta < delay) {
      end = new Date().getTime();
      delta = end - start;
    }
    requestID.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    tick()
    return () => cancelAnimationFrame(requestID.current);
  }, []);

  return (
    <div className='grid'>
      {grid.map((row, i) =>
        <div className='gridRow' key={i}>
          {row.map((cell, j) => <Cell key={j} value={cell} />)}
        </div>)}
    </div>
  );
};

export default Grid;
