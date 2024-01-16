import { createReducer, type PayloadAction } from '@reduxjs/toolkit';
import { addPlus, addMinus, setUsername } from '../actions/appActions';

interface AppStateAppReducer {
  counter: number;
  username: string;
}

export const initialStateAppReducer: AppStateAppReducer = {
  counter: 0,
  username: '',
};

const appReducer = createReducer(initialStateAppReducer, (builder) => {
  builder
    .addCase(addPlus, (state) => {
      state.counter++;
    })
    .addCase(addMinus, (state) => {
      state.counter--;
    })
    .addCase(setUsername, (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    });
});

export default appReducer;
