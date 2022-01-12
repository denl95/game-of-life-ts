import { useCallback, useReducer } from 'react';
import { calculateNextGrid } from './utils';

export type CellState = 1 | 0;

export type GridType = CellState[][];

export interface GameState {
  grid: GridType
}

const UPDATE_GAME = 'UPDATE_GAME';

type Actions = { type: typeof UPDATE_GAME }

function reducer(state: GameState, action: Actions) {
  switch (action.type) {
    case UPDATE_GAME:
      return {
        grid: calculateNextGrid(state.grid),
      };
    default:
      throw new Error();
  }
}

const useGame = (initialState: GameState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateGame = useCallback(() => {
    dispatch({ type: UPDATE_GAME });
  }, [])

  return {
    state,
    actions: {
      updateGame
    }
  }
};

export default useGame;
