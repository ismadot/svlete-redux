import { onDestroy } from 'svelte';
import reduxStore, { type RootState } from '../config';

/**
 * Custom hook for selecting and responding to changes in Redux store state in Svelte components.
 *
 * @param select - Function to select a part of the Redux state.
 * @param onChange - Callback function to execute when the selected state changes.
 * @returns The current selected state.
 */
export function useSelector<TSelected>(
  select: (state: RootState) => TSelected,
  onChange: (selected: TSelected) => void,
): TSelected {
  // Get the current state from the Redux store based on the selection function.
  let currentState: TSelected = select(reduxStore.getState());

  // Define a function to handle changes in the store.
  const handleChange = () => {
    let nextState: TSelected = select(reduxStore.getState());

    // Check if the selected state has changed.
    if (nextState !== currentState) {
      currentState = nextState; // Update the current state.
      onChange(currentState); // Execute the onChange callback with the new state.
    }
  };

  // Subscribe to the Redux store, and call handleChange when the store updates.
  const unsubscribe = reduxStore.subscribe(handleChange);
  handleChange(); // Call handleChange initially to set the current state.

  // Ensure we unsubscribe from the store when the component is destroyed.
  onDestroy(unsubscribe);

  return currentState; // Return the current state.
}
