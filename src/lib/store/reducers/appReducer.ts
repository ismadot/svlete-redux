import { createReducer, type PayloadAction } from '@reduxjs/toolkit';
import { addPlus, addMinus, setUsername } from '../actions/appActions';

// Define the shape of the application's state in the Redux store.
interface AppStateAppReducer {
  counter: number; // State for counting.
  username: string; // State for storing the user's name.
}

// Define the initial state of the application.
export const initialStateAppReducer: AppStateAppReducer = {
  counter: 0,
  username: '',
};

// Create a reducer using Redux Toolkit's createReducer function.
// This reducer will handle updates to the app's state based on dispatched actions.
const appReducer = createReducer(initialStateAppReducer, (builder) => {
  builder
    // Handle addPlus action: increment the counter by 1.
    .addCase(addPlus, (state) => {
      state.counter++;
    })
    // Handle addMinus action: decrement the counter by 1.
    .addCase(addMinus, (state) => {
      state.counter--;
    })
    // Handle setUsername action: update the username in the state.
    // The action payload contains the new username.
    .addCase(setUsername, (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    });
});

export default appReducer;
