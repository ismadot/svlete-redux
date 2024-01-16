import {
  configureStore,
  combineReducers,
  type Reducer,
  type EnhancedStore,
} from '@reduxjs/toolkit';
import { readable, writable, type Readable } from 'svelte/store';
import appReducer from './reducers/appReducer';

// Define the shape of the entire Redux state.
interface RootState {
  app: ReturnType<typeof appReducer>;
}

// Combine reducers from different modules to create the root reducer.
const rootReducer: Reducer<RootState> = combineReducers({
  app: appReducer,
});

// Configure the Redux store with the root reducer and enable Redux DevTools in non-production environments.
const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

/**
 * Function to bind the Redux store to a Svelte readable store.
 * This allows Svelte components to subscribe to Redux state updates.
 *
 * @param store The Redux store to be wrapped.
 * @returns An object with 'subscribe' to listen to state changes and 'dispatch' to dispatch actions.
 */
const bindReduxStore = <T extends EnhancedStore<any, any, any>>(
  store: T,
): {
  subscribe: Readable<ReturnType<T['getState']>>['subscribe'];
  dispatch: T['dispatch'];
} => {
  // Create a Svelte readable store that syncs with the Redux store's state.
  const state = readable(store.getState(), (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState());
    });
    return unsubscribe; // Return the unsubscribe function to clean up the subscription.
  });

  return {
    subscribe: state.subscribe, // Expose the subscribe function.
    dispatch: store.dispatch, // Expose the Redux store's dispatch function.
  };
};

// Export a Svelte store that is bound to the Redux store.
export const store = bindReduxStore(reduxStore);

// A writable Svelte store for global polling state.
export const globalPollingEnabled = writable(true);

export default reduxStore;
export type { RootState };
