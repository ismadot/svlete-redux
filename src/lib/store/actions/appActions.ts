import { createAction } from '@reduxjs/toolkit';

export enum ActionType {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  SET_USERNAME = 'SET_USERNAME',
}

export const addPlus = createAction(ActionType.PLUS);
export const addMinus = createAction(ActionType.MINUS);
export const setUsername = createAction<string>(ActionType.SET_USERNAME);
