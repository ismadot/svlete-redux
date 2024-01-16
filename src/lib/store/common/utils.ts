import { onDestroy } from 'svelte';
import reduxStore, { type RootState } from '../config';

export function useSelector<TSelected>(
  select: (state: RootState) => TSelected,
  onChange: (selected: TSelected) => void,
): TSelected {
  let currentState: TSelected = select(reduxStore.getState());

  const handleChange = () => {
    let nextState: TSelected = select(reduxStore.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  };

  const unsubscribe = reduxStore.subscribe(handleChange);
  handleChange();
  onDestroy(unsubscribe);
  return currentState;
}
