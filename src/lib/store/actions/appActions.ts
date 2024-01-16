import { createAction } from '@reduxjs/toolkit';

// Defining action types as an enumeration for consistency and to avoid typos.
export enum ActionType {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  SET_USERNAME = 'SET_USERNAME', // Action type for setting the username.
}

// Action creators using Redux Toolkit's createAction.
// Each function creates an action of the corresponding type.

// Action for incrementing a value (e.g., a counter).
export const addPlus = createAction(ActionType.PLUS);

// Action for decrementing a value.
export const addMinus = createAction(ActionType.MINUS);

// Action for setting a username. Payload is of type string.
export const setUsername = createAction<string>(ActionType.SET_USERNAME);
